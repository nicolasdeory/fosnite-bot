import axios from "axios";
import {Message, Whatsapp} from "venom-bot";
import conditions from "../conditions";

function bitcoin(client: Whatsapp, message: Message)
{
    axios.get("https://blockchain.info/ticker")
            .then(resp =>
                {
                    const price = resp.data.EUR.last;
                    const randomResps = ["Ahora mismo btc está en {} euros", "Btc a {} euros", "Illo ahora esta como en {} euros", "a {} lereles esta btc", "{} euros", "{} euros btc nice cock"];
                    const random = randomResps[Math.floor(Math.random() * randomResps.length)];
                    client.reply(message.chatId, random.replace("{}", price), message.id);
                });
}

/**
 * !btc o !bitcoin
 */
export default {
    match: conditions.or(conditions.exact("!btc"), conditions.exact("!bitcoin")),
    command: bitcoin
}