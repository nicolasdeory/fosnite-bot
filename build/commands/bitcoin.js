"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const conditions_1 = __importDefault(require("../conditions"));
function bitcoin(client, message) {
    axios_1.default.get("https://blockchain.info/ticker")
        .then(resp => {
        const price = resp.data.EUR.last;
        const randomResps = ["Ahora mismo btc está en {} euros", "Btc a {} euros", "Illo ahora esta como en {} euros", "a {} lereles esta btc", "{} euros", "{} euros btc nice cock"];
        const random = randomResps[Math.floor(Math.random() * randomResps.length)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYml0Y29pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1hbmRzL2JpdGNvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsK0RBQXVDO0FBRXZDLFNBQVMsT0FBTyxDQUFDLE1BQWdCLEVBQUUsT0FBZ0I7SUFFL0MsZUFBSyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFFTCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxnQkFBZ0IsRUFBRSxrQ0FBa0MsRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUM5SyxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxrQkFBZTtJQUNYLEtBQUssRUFBRSxvQkFBVSxDQUFDLEVBQUUsQ0FBQyxvQkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxvQkFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RSxPQUFPLEVBQUUsT0FBTztDQUNuQixDQUFBIn0=