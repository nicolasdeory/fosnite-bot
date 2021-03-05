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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZGFuby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1hbmRzL2NhcmRhbm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFFMUIsNkRBQXVDO0FBRXZDLFNBQVMsT0FBTyxDQUFDLE1BQWdCLEVBQUUsT0FBZ0I7SUFFL0MsZUFBSyxDQUFDLEdBQUcsQ0FBQyw0SkFBNEosQ0FBQztTQUM5SixJQUFJLENBQUMsVUFBQSxJQUFJO1FBRUYsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUN0RCxJQUFNLFdBQVcsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLG9CQUFvQixFQUFFLGtDQUFrQyxFQUFFLDJCQUEyQixFQUFFLGNBQWMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQzlMLElBQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFFRDs7R0FFRztBQUNILGtCQUFlO0lBQ1gsS0FBSyxFQUFFLG9CQUFVLENBQUMsRUFBRSxDQUFDLG9CQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLG9CQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLE9BQU8sRUFBRSxPQUFPO0NBQ25CLENBQUEifQ==