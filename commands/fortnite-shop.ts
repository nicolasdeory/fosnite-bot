import axios from "axios";
import { Message, Whatsapp } from "venom-bot";
import conditions from "../conditions";

function fortnite(client: Whatsapp, message: Message)
{
    axios.get("https://fortnite-api.com/v2/shop/br")
            .then(data =>
                {
                    const daily = data.data.data.daily.entries;
                    let msg = "";
                    msg += "En la tienda de fortnite hoy hay lo siguiente: \n\n";
                    for (let i = 0; i < daily.length; i++) {
                        const entry = daily[i];
                        const price = entry.finalPrice;
                        for(let j = 0; j < entry.items.length; j++)
                        {
                            const item = entry.items[j];
                            if (item.type.value !== "emote")
                                continue;
                            
                            msg += `BAILE: *${item.name}* por ${price} paVos (youtu.be/${item.showcaseVideo}) \n`
                        }
                    }
                    msg += "\nYa me comentáis si os mola alguno.";
                    client.sendText(message.from, msg);
                });
}

/**
 * !fshop
 */
export default {
    match: conditions.exact("!fshop"),
    command: fortnite
}