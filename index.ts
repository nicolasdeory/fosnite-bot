import { create } from "venom-bot";
import bot from "./bot";

create('test2')
.then((client) => bot(client))
.catch((error) => console.log(error));