"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var conditions_1 = __importDefault(require("../conditions"));
function gracias(client, message) {
    if (message.fromMe)
        return;
    client.reply(message.chatId, "a ti", message.id);
    client.sendImageAsSticker(message.chatId, "./javier troya.jpg");
}
/**
 * gracias
 */
exports.default = {
    match: conditions_1.default.contains("gracias"),
    command: gracias
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhY2lhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1hbmRzL2dyYWNpYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2REFBdUM7QUFFdkMsU0FBUyxPQUFPLENBQUMsTUFBZSxFQUFFLE9BQWdCO0lBRTlDLElBQUksT0FBTyxDQUFDLE1BQU07UUFDZCxPQUFPO0lBRVgsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxrQkFBZTtJQUNYLEtBQUssRUFBRSxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDckMsT0FBTyxFQUFFLE9BQU87Q0FDbkIsQ0FBQSJ9