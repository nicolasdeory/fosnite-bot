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
function bot(client) {
    var commands = [
        bitcoin_1.default,
        cardano_1.default,
        fortnite_shop_1.default,
        no_puedo_1.default,
        fortnite_dance_1.default,
        gracias_1.default
    ];
    client.onAnyMessage(function (message) {
        for (var i = 0; i < commands.length; i++) {
            var cmd = commands[i];
            if (cmd.match(message.body)) {
                cmd.command(client, message);
                break;
            }
        }
    });
}
exports.default = bot;
//# sourceMappingURL=bot.js.map