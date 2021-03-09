import axios from "axios";

interface Issue {
    number: number,
    title: string
}

export function getColumnName(columnId: number): Promise<string>
{
    return new Promise(async (resolve, reject) =>
    {
        const result = await axios.get("https://api.github.com/projects/columns/"+columnId, {
            headers: {
                "Authorization": `token ${process.env.GITHUB_TOKEN}`,
                "Accept": "application/vnd.github.inertia-preview+json"
            }});
        resolve(result.data.name);
    })
}

export function getIssueName(issueUrl: string): Promise<Issue>
{
    return new Promise(async (resolve, reject) =>
    {
        const result = await axios.get(issueUrl);
        resolve({number: result.data.number, title: result.data.title});
    })
}