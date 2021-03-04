"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var conditions_1 = __importDefault(require("../conditions"));
function fortniteDance(client, message) {
    if (message.fromMe)
        return;
    client.sendVoice(message.chatId, "./fortnitedance.mp3");
}
/**
 * fortnite
 */
exports.default = {
    match: conditions_1.default.contains("fortnite"),
    command: fortniteDance
};
//# sourceMappingURL=fortnite-dance.js.map