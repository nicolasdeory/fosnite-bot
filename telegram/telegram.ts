import ligaScraper from "./commands/ligaBot";
import api from "./telegram-api";

interface Command {
    match: (m: string) => boolean,
    command: (message: any) => void,
    allowFurtherProcessing?: boolean
}

const commands:Array<Command> = [
    ligaScraper
]

async function init()
{
    const user = await api.getUser();
    if (!user)
    {
        const phone = process.env.TELEGRAM_PHONE_NUMBER!;
        const { phone_code_hash } = await api.sendCode(phone);
        try
        {
            // const code: string = await new Promise((resolve) => rl.question("telegram code?", (a) => resolve(a)));
            const code = "";
            const authResult = await api.signIn(code, phone, phone_code_hash);
            console.log(`authResult:`, authResult);
        } catch (error)
        {
            if (error.error_message !== 'SESSION_PASSWORD_NEEDED')
            {
                return;
            }
            // look up 2FA because you might need it
        }
    } 

    api.on('updateShortMessage', (update: any) =>
    {
        const {message} = update;
        console.log(message);
    });

    api.on('updates', (update: any) =>
    {
        update.updates.forEach((upd:any) => {
            if (upd._ == "updateNewChannelMessage")
            {
               // console.log(upd.message);
                for (let i = 0; i < commands.length; i++) {
                    const cmd = commands[i];
                    if (upd.message.message && cmd.match(upd.message.message))
                    {
                        cmd.command(upd.message);
                        if (!cmd.allowFurtherProcessing)
                            break;
                    }
                }
            }
        });
    });

    console.log("Telegram bot listening for updates");

}

export default { init }