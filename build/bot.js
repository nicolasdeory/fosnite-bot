"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bitcoin_1 = __importDefault(require("./commands/bitcoin"));
var fortnite_shop_1 = __importDefault(require("./commands/fortnite-shop"));
var no_puedo_1 = __importDefault(require("./commands/no-puedo"));
var gracias_1 = __importDefault(require("./commands/gracias"));
var cardano_1 = __importDefault(require("./commands/cardano"));
var fortnite_dance_1 = __importDefault(require("./commands/fortnite-dance"));
var alive_1 = __importDefault(require("./alive"));
function bot(client) {
    var commands = [
        bitcoin_1.default,
        cardano_1.default,
        fortnite_shop_1.default,
        no_puedo_1.default,
        fortnite_dance_1.default,
        gracias_1.default
    ];
    var alive = new alive_1.default(client);
    client.onAnyMessage(function (message) {
        alive.receivedMessage();
        if (!message.fromMe)
            console.log(message.from + ": " + message.body);
        for (var i = 0; i < commands.length; i++) {
            var cmd = commands[i];
            if (cmd.match(message.body)) {
                cmd.command(client, message);
                break;
            }
        }
    }).catch(function (r) {
        console.error("ERROR HANDLING MESSAGE");
        console.error(r);
    });
}
exports.default = bot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0RBQXlDO0FBQ3pDLDJFQUFnRDtBQUNoRCxpRUFBMEM7QUFDMUMsK0RBQXlDO0FBQ3pDLCtEQUF5QztBQUN6Qyw2RUFBc0Q7QUFDdEQsa0RBQTRCO0FBTzVCLFNBQVMsR0FBRyxDQUFDLE1BQXNCO0lBRS9CLElBQU0sUUFBUSxHQUFtQjtRQUM3QixpQkFBTztRQUNQLGlCQUFPO1FBQ1AsdUJBQVE7UUFDUixrQkFBTztRQUNQLHdCQUFhO1FBQ2IsaUJBQU87S0FDVixDQUFDO0lBRUYsSUFBTSxLQUFLLEdBQUcsSUFBSSxlQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFDLE9BQU87UUFFeEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUMzQjtnQkFDSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDN0IsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO1FBRVAsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsa0JBQWUsR0FBRyxDQUFDIn0=