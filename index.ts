import dotenv from "dotenv";
dotenv.config();
import express from "express";
import readline from "readline";
import { Whatsapp } from "venom-bot";
import bot from "./bot";
import githubissue from "./commands/github/issue";
import telegram from "./telegram/telegram";
import whatsapp from "./whatsapp";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

whatsapp.init(client => {
    bot(client);
});

const app = express();
app.use(express.json());

app.post('/github/issue', (req, res) =>
{
    githubissue(req.body)
    res.sendStatus(200);
});

app.get('/', (req, res) =>
{
    res.send("Fornique bot is running");
});

app.listen(process.env.PORT, () => console.log("server listening"));

process.on('unhandledRejection', up => { throw up });
process.on('uncaughtExceptionMonitor', e => { throw e });
process.on('uncaughtException', e => { throw e });

telegram.init();