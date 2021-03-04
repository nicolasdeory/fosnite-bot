import { create } from "venom-bot";
import bot from "./bot";

create('test2',(base64Qrimg, asciiQR, attempts) => {}, (statusSession, session) => {}, { useChrome: false, browserArgs: ['--no-sandbox'] })
.then((client) => bot(client))
.catch((error) => console.log(error));