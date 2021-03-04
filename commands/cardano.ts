import axios from "axios";
import {Message, Whatsapp} from "venom-bot";
import conditions from "../conditions";

function cardano(client: Whatsapp, message: Message)
{
    axios.get("https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false")
            .then(resp =>
                {
                    const price = resp.data.market_data.current_price.eur;
                    const randomResps = ["Ahora mismo ada está en {} euros", "cardano a {} euros", "Illo ahora esta como en {} euros", "a {} lereles esta cardano", "ada {} euros", "{} euros cardano nice cock"];
                    const random = randomResps[Math.floor(Math.random() * randomResps.length)];
                    client.reply(message.chatId, random.replace("{}", price), message.id);
                });
}

/**
 * !ada o !cardano
 */
export default {
    match: conditions.or(conditions.exact("!ada"), conditions.exact("!cardano")),
    command: cardano
}