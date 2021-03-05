import { create, Whatsapp } from "venom-bot";
import bot from "./bot";

import express from "express";
import github from "./commands/github/issue";
import bodyParser from "body-parser";
import githubissue from "./commands/github/issue";

let whatsappClient: Whatsapp;


create('test2',
    (base64Qrimg, asciiQR, attempts) => { },
    (statusSession, session) => { console.log(statusSession) },
    {
        useChrome: false,
        browserArgs: ['--no-sandbox']
    },
    JSON.parse(process.env.WHATSAPP_TOKEN ?? ''))
    .then((client) => 
    {
        whatsappClient = client;
        bot(client);
    })
    .catch((error) => console.log(error));

const app = express();
app.use(express.json());

app.post('/github/issue', (req, res) =>
{
    githubissue(whatsappClient, req.body)
    res.sendStatus(200);
});

app.get('/', (req, res) =>
{
    res.send("Fornique bot is running");
});

app.listen(process.env.PORT, () => console.log("server listening"));