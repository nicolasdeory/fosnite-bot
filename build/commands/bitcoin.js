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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYml0Y29pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1hbmRzL2JpdGNvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFFMUIsNkRBQXVDO0FBRXZDLFNBQVMsT0FBTyxDQUFDLE1BQWdCLEVBQUUsT0FBZ0I7SUFFL0MsZUFBSyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUNsQyxJQUFJLENBQUMsVUFBQSxJQUFJO1FBRUYsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQU0sV0FBVyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsZ0JBQWdCLEVBQUUsa0NBQWtDLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDOUssSUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsa0JBQWU7SUFDWCxLQUFLLEVBQUUsb0JBQVUsQ0FBQyxFQUFFLENBQUMsb0JBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsb0JBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUUsT0FBTyxFQUFFLE9BQU87Q0FDbkIsQ0FBQSJ9