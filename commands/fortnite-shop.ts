import axios from "axios";
import { Message, Whatsapp } from "venom-bot";
import conditions from "../conditions";

function fortnite(client: Whatsapp, message: Message)
{
    axios.get("https://fortnite-api.com/v2/shop/br")
            .then(data =>
                {
                    const entries = data.data.data.daily.entries;
                    entries.push(...data.data.data.featured?.entries??[]);
                    entries.push(...data.data.data.specialFeatured?.entries??[]);
                    entries.push(...data.data.data.specialDaily?.entries??[]);
                    
                    let msg = "";
                    msg += "En la tienda de fortnite hoy hay lo siguiente: \n\n";
                    for (let i = 0; i < entries.length; i++) {
                        
                        const entry = entries[i];
                        if (entry.bundle)
                            continue;
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