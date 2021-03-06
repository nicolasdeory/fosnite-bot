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

const attentionMessages: Array<Message> = [];
// remove messages older than 10 minutes, every ATTENTION_CLEAR_INTERVAL seconds
const ATTENTION_BUFFER_MAX_SECONDS = 1000;
const ATTENTION_CLEAR_INTERVAL = 60000;

setInterval(() =>
{
    const currentTimestamp = new Date();
    const elementsToRemove = attentionMessages.filter(m =>
    {
        const age = (currentTimestamp.getTime() / 1000) - m.timestamp;
        return age > ATTENTION_BUFFER_MAX_SECONDS;
    });
    elementsToRemove.forEach(e => attentionMessages.splice(attentionMessages.indexOf(e), 1));
}, ATTENTION_CLEAR_INTERVAL)

const watchedMatches: Array<Match> = [
    {
        team1: { shortName: "osasuna", fullName: "Osasuna" },
        team2: { shortName: "barcelona|barsa|barça|barca", fullName: "FC Barcelona" }
    },
    {
        team1: { shortName: "madrid", fullName: "Real Madrid" },
        team2: { shortName: "barcelona", fullName: "FC Barcelona" }
    },
];

function messageMatchesMatch(message: string)
{
    const normalized = message.toLowerCase().normalize("NFD");
    return watchedMatches.find(x => {
        const matchesTeam1 = x.team1.shortName.normalize("NFD").split("|").some(x => normalized.indexOf(x) >= 0);
        const matchesTeam2 = x.team2.shortName.normalize("NFD").split("|").some(x => normalized.indexOf(x) >= 0);
        
        return matchesTeam1 || matchesTeam2;
    });
}

function ligaScraper(message: any)
{

    if (!whatsapp.client)
        return;

    const messageText = message.message as string;
    const match = messageMatchesMatch(messageText);
    const urlMatch = messageText.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g)
    if (messageText.indexOf(".m3u8") >= 0 && (urlMatch?.length??0 > 0))
    {
        // If the message has exactly one url in the message
        const url = urlMatch![0];
        if (match)
        {
            console.log(`Game link for ${match.team1.fullName}* vs *${match.team2.fullName}* detected. Sending to whatsapp`);
            whatsapp.client.sendText("34658780090-1614884816@g.us",
                        `-- *${match.team1.fullName}* vs *${match.team2.fullName}* --\n\nPuedes verlo en ${url}`);
        } else if (message.reply_to)
        {
            // is there a reply?
            const replyId = message.reply_to.reply_to_msg_id;
            const repliedMessage = attentionMessages.find(x => x.channelId === message.peer_id.channel_id && x.id === replyId);
            if (repliedMessage)
            {
                const repliedMessageMatch = messageMatchesMatch(repliedMessage.text);
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
            console.log("[ligaScraper] Received an interesting message, saving for later: " + messageText)
            attentionMessages.push(
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
    command: ligaScraper
}