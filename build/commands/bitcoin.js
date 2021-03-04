"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var conditions_1 = __importDefault(require("../conditions"));
function bitcoin(client, message) {
    axios_1.default.get("https://blockchain.info/ticker")
        .then(function (resp) {
        var price = resp.data.EUR.last;
        var randomResps = ["Ahora mismo btc está en {} euros", "Btc a {} euros", "Illo ahora esta como en {} euros", "a {} lereles esta btc", "{} euros", "{} euros btc nice cock"];
        var random = randomResps[Math.floor(Math.random() * randomResps.length)];
        client.reply(message.chatId, random.replace("{}", price), message.id);
    });
}
/**
 * !btc o !bitcoin
 */
exports.default = {
    match: conditions_1.default.or(conditions_1.default.exact("!btc"), conditions_1.default.exact("!bitcoin")),
    command: bitcoin
};
//# sourceMappingURL=bitcoin.js.map