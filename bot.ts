import axios from "axios";
import conditions from "./conditions";
import venom from "venom-bot";
import bitcoin from "./commands/bitcoin";
import fortnite from "./commands/fortnite-shop";
import nopuedo from "./commands/no-puedo";
import gracias from "./commands/gracias";
import cardano from "./commands/cardano";
import fortniteDance from "./commands/fortnite-dance";
import Alive from "./alive";

interface Command {
    match: (m: string) => boolean,
    command: (client : venom.Whatsapp, message: venom.Message) => void,
    allowFurtherProcessing?: boolean
}

function bot(client: venom.Whatsapp)
{
    const commands: Array<Command> = [
        bitcoin,
        cardano,
        fortnite,
        nopuedo,
        fortniteDance,
        gracias
    ];

    const alive = new Alive(client);

    client.onAnyMessage((message) =>
    {
        alive.receivedMessage();

        if (!message.fromMe)
            console.log(message.from + ": " + message.body);
        
        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (cmd.match(message.body))
            {
                cmd.command(client, message);
                if (!cmd.allowFurtherProcessing)
                    break;
            }
        }
    }).catch((r) =>
    {
        console.error("ERROR HANDLING MESSAGE");
        console.error(r);
    });
}

export default bot;