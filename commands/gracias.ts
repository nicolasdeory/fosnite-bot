import { Message, Whatsapp } from "venom-bot";
import conditions from "../conditions";

function gracias(client:Whatsapp, message: Message)
{
    if (message.fromMe)
        return;
        
    client.reply(message.chatId, "gracias", message.id);
    client.sendImageAsSticker(message.chatId, "./javier troya.jpg");
}

/**
 * gracias
 */
export default {
    match: conditions.contains("gracias"),
    command: gracias
}