"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var conditions_1 = __importDefault(require("../conditions"));
function cardano(client, message) {
    axios_1.default.get("https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false")
        .then(function (resp) {
        var price = resp.data.market_data.current_price.eur;
        var randomResps = ["Ahora mismo ada está en {} euros", "cardano a {} euros", "Illo ahora esta como en {} euros", "a {} lereles esta cardano", "ada {} euros", "{} euros cardano nice cock"];
        var random = randomResps[Math.floor(Math.random() * randomResps.length)];
        client.reply(message.chatId, random.replace("{}", price), message.id);
    });
}
/**
 * !ada o !cardano
 */
exports.default = {
    match: conditions_1.default.or(conditions_1.default.exact("!ada"), conditions_1.default.exact("!cardano")),
    command: cardano
};
//# sourceMappingURL=cardano.js.map