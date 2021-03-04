import axios from "axios";
import conditions from "./conditions";
import venom from "venom-bot";
import bitcoin from "./commands/bitcoin";
import fortnite from "./commands/fortnite-shop";
import nopuedo from "./commands/no-puedo";
import gracias from "./commands/gracias";
import cardano from "./commands/cardano";
import fortniteDance from "./commands/fortnite-dance";

interface Command {
    match: (m: string) => boolean,
    command: (client : venom.Whatsapp, message: venom.Message) => void
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

    client.onAnyMessage((message) =>
    {
        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (cmd.match(message.body))
            {
                cmd.command(client, message);
                break;
            }
        }
    });
}

export default bot;