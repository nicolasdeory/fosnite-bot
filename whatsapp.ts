import { create, Whatsapp } from "venom-bot";

class WhatsappClient
{
    client: Whatsapp | undefined

    init(createdCallback: (client:Whatsapp) => void)
    {
        create('test2',
            (base64Qrimg, asciiQR, attempts) => { },
            (statusSession, session) => { console.log(statusSession) },
            {
                useChrome: false,
                browserArgs: ['--no-sandbox']
            },
            JSON.parse(process.env.WHATSAPP_TOKEN ?? ''))
            .then((client) => 
            {
                this.client = client;
                // bot(client);
                createdCallback(this.client);
            })
            .catch((error) => console.log(error));
    }
}

export default new WhatsappClient();
