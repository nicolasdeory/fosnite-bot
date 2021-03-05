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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tcHVlZG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tYW5kcy9uby1wdWVkby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDZEQUF1QztBQUV2QyxTQUFTLE9BQU8sQ0FBQyxNQUFnQixFQUFFLE9BQWdCO0lBRS9DLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFFRDs7R0FFRztBQUNILGtCQUFlO0lBQ1gsS0FBSyxFQUFFLG9CQUFVLENBQUMsRUFBRSxDQUNoQixvQkFBVSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUN4QyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUMzQyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FDbEM7SUFDRCxPQUFPLEVBQUUsT0FBTztDQUNuQixDQUFBIn0=