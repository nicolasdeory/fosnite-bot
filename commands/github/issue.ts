import axios from "axios";
import {Message, Whatsapp} from "venom-bot";
import conditions from "../../conditions";
import whatsapp from "../../whatsapp";
import { getColumnName, getIssueName as getIssue } from "./api";

// Repo Id - Destination Number Id
const repository_toMap: Record<number, string> = {
    344437361: "34675406061-1614020708@g.us"
}

/**
 * Automatic
 */
export default async function githubissue(data: any)
{
    const client = whatsapp.client;
    if (!client)
        return;
        
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
            text = `${data.sender.login} assigned issue *#${data.issue.number}* - ${data.issue.title} to ${data.issue.assignee.login}.`
        } else if (data.action === "moved")
        {
            const columnNameFrom = await getColumnName(data.changes.column_id.from);
            const columnNameTo = await getColumnName(data.project_card.column_id);
            if (!data.project_card.content_url)
                return; // it's not an issue; it's a note, so omit it
            console.log(data.project_card);
            const issue = await getIssue(data.project_card.content_url);

            text = `${data.sender.login} moved issue *#${issue.number}* (${issue.title}) from ${columnNameFrom} to ${columnNameTo}`;
        }
        if (text)
            client.sendText(destination, `*-- GITHUB NOTIFICATION --*\n\n${text}`)
    }
}