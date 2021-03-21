import { Message, Whatsapp } from "venom-bot";
import conditions from "../conditions";

function zombie(client: Whatsapp, message: Message)
{
    if (message.sender.id === "34654853483@c.us" || message.body === "!zombie")
    {
        const i = Math.round(Math.random() * 4);
        client.sendVoice(message.chatId, `./zombie${i+1}.mp3`);
    }
}

/**
 * no puedo
 */
export default {
    match: conditions.or(
        conditions.contains("joder"), 
        conditions.contains("cabron"),
        conditions.contains("ostia"),
        conditions.contains("culo"),
        conditions.contains("que te den"),
        conditions.contains("que os den"),
        conditions.contains("capullo"),
        conditions.contains("gilipollas"),
        conditions.contains("una polla"),
        conditions.contains("callate"),
        conditions.contains("no me jodas"),
        conditions.contains("cojones"),
        conditions.exact("!zombie"),
    ),
    command: zombie,
}