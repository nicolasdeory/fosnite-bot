"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var conditions_1 = __importDefault(require("../conditions"));
function gracias(client, message) {
    if (message.fromMe)
        return;
    client.reply(message.chatId, "gracias", message.id);
    client.sendImageAsSticker(message.chatId, "./javier troya.jpg");
}
/**
 * gracias
 */
exports.default = {
    match: conditions_1.default.contains("gracias"),
    command: gracias
};
//# sourceMappingURL=gracias.js.map