import { create, Whatsapp } from "venom-bot";
import bot from "./bot";

import express from "express";
import github from "./commands/github";

let whatsappClient: Whatsapp;

create('test2',(base64Qrimg, asciiQR, attempts) => {}, (statusSession, session) => {console.log(statusSession)}, { useChrome: false, browserArgs: ['--no-sandbox'] })
.then((client) => 
{
    whatsappClient = client;
    bot(client);
})
.catch((error) => console.log(error));

const app = express();

app.get('/githubwebhook', (req,res) =>
{
    github(whatsappClient, req.body)
});

app.get('/', (req, res) =>
{
    res.send("Fornique bot is running");
});

app.listen(process.env.PORT, () => console.log("server listening"));