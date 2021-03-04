"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var conditions_1 = __importDefault(require("../conditions"));
function nopuedo(client, message) {
    client.sendVoice(message.chatId, "./imposible.mp3");
}
/**
 * no puedo
 */
exports.default = {
    match: conditions_1.default.or(conditions_1.default.contains("te chupo la pinga"), conditions_1.default.contains("te chupamos la pinga"), conditions_1.default.contains("no puedo")),
    command: nopuedo,
};
//# sourceMappingURL=no-puedo.js.map