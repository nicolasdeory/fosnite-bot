import { Whatsapp } from "venom-bot";

export default class Alive {
    
    static TIMEOUT = 30;
    static PING_INTERVAL = 60;

    client: Whatsapp;
    pingTimer: NodeJS.Timeout;
    pingTimeout: NodeJS.Timeout | undefined;

    constructor(client: Whatsapp)
    {
        this.client = client;
        this.pingTimer = setTimeout(this.ping, Alive.PING_INTERVAL)
    }

    ping()
    {
        this.client.sendText(process.env.WHATSAPP_NUMBER!, "ping");
        this.pingTimeout = setTimeout(this.onTimedOut, Alive.TIMEOUT);
    }

    receivedMessage()
    {
        clearTimeout(this.pingTimer);
        if (this.pingTimeout) clearTimeout(this.pingTimeout);
        this.pingTimer = setTimeout(this.ping, Alive.PING_INTERVAL)
    }

    onTimedOut()
    {
        console.error("FATAL: Dind't receive ping message on time!");
        process.exit(1);
    }

}