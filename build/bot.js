"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitcoin_1 = __importDefault(require("./commands/bitcoin"));
const fortnite_shop_1 = __importDefault(require("./commands/fortnite-shop"));
const no_puedo_1 = __importDefault(require("./commands/no-puedo"));
const gracias_1 = __importDefault(require("./commands/gracias"));
const cardano_1 = __importDefault(require("./commands/cardano"));
const fortnite_dance_1 = __importDefault(require("./commands/fortnite-dance"));
const alive_1 = __importDefault(require("./alive"));
function bot(client) {
    const commands = [
        bitcoin_1.default,
        cardano_1.default,
        fortnite_shop_1.default,
        no_puedo_1.default,
        fortnite_dance_1.default,
        gracias_1.default
    ];
    const alive = new alive_1.default(client);
    client.onAnyMessage((message) => {
        alive.receivedMessage();
        if (!message.fromMe)
            console.log(message.from + ": " + message.body);
        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (cmd.match(message.body)) {
                cmd.command(client, message);
                if (!cmd.allowFurtherProcessing)
                    break;
            }
        }
    }).catch((r) => {
        console.error("ERROR HANDLING MESSAGE");
        console.error(r);
    });
}
exports.default = bot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsaUVBQXlDO0FBQ3pDLDZFQUFnRDtBQUNoRCxtRUFBMEM7QUFDMUMsaUVBQXlDO0FBQ3pDLGlFQUF5QztBQUN6QywrRUFBc0Q7QUFDdEQsb0RBQTRCO0FBUTVCLFNBQVMsR0FBRyxDQUFDLE1BQXNCO0lBRS9CLE1BQU0sUUFBUSxHQUFtQjtRQUM3QixpQkFBTztRQUNQLGlCQUFPO1FBQ1AsdUJBQVE7UUFDUixrQkFBTztRQUNQLHdCQUFhO1FBQ2IsaUJBQU87S0FDVixDQUFDO0lBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxlQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBRTVCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDM0I7Z0JBQ0ksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCO29CQUMzQixNQUFNO2FBQ2I7U0FDSjtJQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBRVgsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsa0JBQWUsR0FBRyxDQUFDIn0=