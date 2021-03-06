"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conditions_1 = __importDefault(require("../conditions"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ydG5pdGUtZGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tYW5kcy9mb3J0bml0ZS1kYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLCtEQUF1QztBQUV2QyxTQUFTLGFBQWEsQ0FBQyxNQUFnQixFQUFFLE9BQWdCO0lBRXJELElBQUksT0FBTyxDQUFDLE1BQU07UUFDZCxPQUFPO0lBQ1gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVEOztHQUVHO0FBQ0gsa0JBQWU7SUFDWCxLQUFLLEVBQUUsb0JBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3RDLE9BQU8sRUFBRSxhQUFhO0NBQ3pCLENBQUEifQ==