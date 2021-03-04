import { Message, Whatsapp } from "venom-bot";
import conditions from "../conditions";

function fortniteDance(client: Whatsapp, message: Message)
{
    if (message.fromMe)
        return;
    client.sendVoice(message.chatId, "./fortnitedance.mp3"); 
}

/**
 * fortnite
 */
export default {
    match: conditions.contains("fortnite"),
    command: fortniteDance
}