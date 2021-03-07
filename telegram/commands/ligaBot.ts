import scrapeIt from "scrape-it";
import conditions from "../../conditions";
import whatsapp from "../../whatsapp";
import api from "../telegram-api";

interface Entity
{
    _: string,
    offset: number,
    length: number
}

interface Message
{
    id: number,
    channelId: number,
    text: string,
    timestamp: number
}

interface Team
{
    shortName: string,
    fullName: string
}

interface Match
{
    team1: Team,
    team2: Team
}

interface ScrapedMatch {
    time: string,
    match: string
}

// remove messages older than 10 minutes, every ATTENTION_CLEAR_INTERVAL seconds
const ATTENTION_BUFFER_MAX_SECONDS = 1000;

const ATTENTION_CLEAR_INTERVAL = 60000;

// every 30 minutes scrape match site
const MATCH_SCRAPE_INTERVAL = 1800000;

// retry in 3 minutes if failed
const MATCH_SCRAPE_RETRY_TIME = 180000;


const TEAM_ABBREVIATIONS: Record<string,Array<string>> = {
    "barcelona": ["barca","barsa","barça","fcb"],
    "atletico": ["atleti"],
    "juventus": ["juve"]
}

const EXCLUDED_WORDS = ["fc", "cf", "real", "de", "ac"];

class LigaScraper
{

    attentionMessages: Array<Message> = [];

    watchedMatches: Map<string,Match> = new Map<string, Match>();

    constructor()
    {
        setInterval(() =>
        {
            const currentTimestamp = new Date();
            const elementsToRemove = this.attentionMessages.filter(m =>
            {
                const age = (currentTimestamp.getTime() / 1000) - m.timestamp;
                return age > ATTENTION_BUFFER_MAX_SECONDS;
            });
            elementsToRemove.forEach(e => this.attentionMessages.splice(this.attentionMessages.indexOf(e), 1));
        }, ATTENTION_CLEAR_INTERVAL);

        setInterval(() => this.scrapeMatches(), MATCH_SCRAPE_INTERVAL);
        this.scrapeMatches();
    }

    getTeamShortName(fullName: string): string
    {
        const normalized = fullName.toLowerCase().normalize("NFD");
        const alternatives = normalized.split(" ");
        for (let i = 0; i < alternatives.length; i++) {
            const alt = alternatives[i].trim();
            if (alt.length < 3 || EXCLUDED_WORDS.indexOf(alt) >= 0)
                alternatives.splice(alternatives.indexOf(alt), 1);
            
            if (alt in TEAM_ABBREVIATIONS)
            {
                alternatives.push(...TEAM_ABBREVIATIONS[alt]);
            }
        }
        return alternatives.join("|");
    }

    scrapeMatches()
    {
        // NOTE also scrapes basketball or whatever's on the page
        scrapeIt('https://www.tarjetarojatvonline.tv/', {
            matches: {
                listItem: "tbody tr",
                data: {
                    time: "td:nth-child(1) span",
                    match: "td:nth-child(3) b"
                }
            }
        }).then(({ data, response }) =>
        {
            if (response.statusCode !== 200)
            {
                console.error("Error retrieving matches for today! Retrying");
                setTimeout(() => this.scrapeMatches(), MATCH_SCRAPE_RETRY_TIME);
            } else
            {
                this.watchedMatches.clear();
                ((data as any).matches as Array<ScrapedMatch>).forEach(m =>
                {
                    if (!m.match)
                        return;
                        
                    const matches = m.match.split('vs');
                    const team1: Team = {
                        fullName: matches[0].trim(),
                        shortName: this.getTeamShortName(matches[0].trim())
                    }

                    const team2: Team = {
                        fullName: matches[1].trim(),
                        shortName: this.getTeamShortName(matches[1].trim())
                    }

                    if (!this.watchedMatches.has(m.match))
                        this.watchedMatches.set(m.match, {team1, team2});
                });
            }
        });
    }

    messageMatchesMatch(message: string)
    {
        const normalized = message.toLowerCase().normalize("NFD");
        return Array.from(this.watchedMatches.values()).find(x =>
        {
            const matchesTeam1 = x.team1.shortName.normalize("NFD").split("|").some(x => normalized.indexOf(x) >= 0);
            const matchesTeam2 = x.team2.shortName.normalize("NFD").split("|").some(x => normalized.indexOf(x) >= 0);

            return matchesTeam1 || matchesTeam2;
        });
    }
}

const ligaScraper = new LigaScraper();

function ligaBot(message: any)
{
    if (!whatsapp.client)
        return;

    const messageText = message.message as string;
    const match = ligaScraper.messageMatchesMatch(messageText);
    const urlMatch = messageText.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g)
    if (messageText.indexOf(".m3u8") >= 0 && (urlMatch?.length ?? 0 > 0))
    {
        // If the message contains an url
        const url = urlMatch!.find(x => x.indexOf("http") >= 0);
        if (match)
        {
            console.log(`Game link for ${match.team1.fullName}* vs *${match.team2.fullName}* detected. Sending to whatsapp`);
            whatsapp.client.sendText("34658780090-1614884816@g.us",
                `-- *${match.team1.fullName}* vs *${match.team2.fullName}* --\n\nPuedes verlo en ${url}`);
        } else if (message.reply_to)
        {
            // is there a reply?
            const replyId = message.reply_to.reply_to_msg_id;
            const repliedMessage = ligaScraper.attentionMessages.find(x => x.channelId === message.peer_id.channel_id && x.id === replyId);
            if (repliedMessage)
            {
                const repliedMessageMatch = ligaScraper.messageMatchesMatch(repliedMessage.text);
                if (repliedMessageMatch)
                {
                    console.log(`Game link for ${repliedMessageMatch.team1.fullName}* vs *${repliedMessageMatch.team2.fullName}* detected. Sending to whatsapp`);
                    whatsapp.client.sendText("34658780090-1614884816@g.us",
                        `-- *${repliedMessageMatch.team1.fullName}* vs *${repliedMessageMatch.team2.fullName}* --\n\nPuedes verlo en ${url}`);
                } else
                {
                    console.log("Received a game url but could't associate it to any interesting match");
                }
            }
        } else
        {
            console.log("Received a game url but could't associate it to any interesting match");
        }
    }
    else
    {
        // Otherwise, it's a regular message, if it has any important words let's pay attention to it
        if (match)
        {
            console.log("[ligaBot] Received an interesting message, saving for later: " + messageText)
            ligaScraper.attentionMessages.push(
                {
                    id: message.id,
                    channelId: message.peer_id.channel_id,
                    text: messageText,
                    timestamp: message.date,
                });
        }
    }
}

export default {
    match: conditions.any(),
    command: ligaBot
}