"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const conditions_1 = __importDefault(require("../conditions"));
function cardano(client, message) {
    axios_1.default.get("https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false")
        .then(resp => {
        const price = resp.data.market_data.current_price.eur;
        const randomResps = ["Ahora mismo ada está en {} euros", "cardano a {} euros", "Illo ahora esta como en {} euros", "a {} lereles esta cardano", "ada {} euros", "{} euros cardano nice cock"];
        const random = randomResps[Math.floor(Math.random() * randomResps.length)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZGFuby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1hbmRzL2NhcmRhbm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsK0RBQXVDO0FBRXZDLFNBQVMsT0FBTyxDQUFDLE1BQWdCLEVBQUUsT0FBZ0I7SUFFL0MsZUFBSyxDQUFDLEdBQUcsQ0FBQyw0SkFBNEosQ0FBQztTQUM5SixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFFTCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ3RELE1BQU0sV0FBVyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsb0JBQW9CLEVBQUUsa0NBQWtDLEVBQUUsMkJBQTJCLEVBQUUsY0FBYyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDOUwsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsa0JBQWU7SUFDWCxLQUFLLEVBQUUsb0JBQVUsQ0FBQyxFQUFFLENBQUMsb0JBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsb0JBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUUsT0FBTyxFQUFFLE9BQU87Q0FDbkIsQ0FBQSJ9