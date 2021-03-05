import { create } from "venom-bot";
import bot from "./bot";

import express from "express";

create('test2',(base64Qrimg, asciiQR, attempts) => {}, (statusSession, session) => {}, { useChrome: false, browserArgs: ['--no-sandbox'] })
.then((client) => bot(client))
.catch((error) => console.log(error));

const app = express();
app.get('/', (req, res) =>
{
    res.send("Fornique bot is running");
});

app.listen(process.env.PORT, () => console.log("server listening"));