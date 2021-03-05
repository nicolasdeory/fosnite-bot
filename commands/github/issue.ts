import axios from "axios";
import {Message, Whatsapp} from "venom-bot";
import conditions from "../../conditions";

// Repo Id - Destination Number Id
const repository_toMap: Record<number, string> = {
    344437361: "34675406061-1614020708@g.us"
}

/**
 * Automatic
 */
export default function githubissue(client: Whatsapp, data: any)
{
    const repo = data.repository.id;
    const destination = repository_toMap[repo];
    if (destination)
    {
        let text;
        if (data.action === "closed")
        {
            text = `Closed issue *#${data.issue.number}* - ${data.issue.title}.\nClosed by ${data.sender.login}.`;
        } else if (data.action === "opened" || data.action === "reopened")
        {
            text = `Opened issue *#${data.issue.number}* - ${data.issue.title}.\nOpened by ${data.sender.login}.`;
        } else if (data.action === "assigned")
        {
            text = `${data.sender.login} assigned issue *#${data.issue.number}* - ${data.issue.title} to ${data.issue.assignee}.`
        }
        if (text)
            client.sendText(destination, `*-- GITHUB NOTIFICATION --*\n\n${text}`)
    }
}