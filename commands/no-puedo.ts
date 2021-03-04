import { Message, Whatsapp } from "venom-bot";
import conditions from "../conditions";

function nopuedo(client: Whatsapp, message: Message)
{
    client.sendVoice(message.chatId, "./imposible.mp3"); 
}

/**
 * no puedo
 */
export default {
    match: conditions.or(
        conditions.contains("te chupo la pinga"), 
        conditions.contains("te chupamos la pinga"),
        conditions.contains("no puedo")
    ),
    command: nopuedo,
}