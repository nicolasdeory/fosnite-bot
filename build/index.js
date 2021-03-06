"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const readline_1 = __importDefault(require("readline"));
const bot_1 = __importDefault(require("./bot"));
const issue_1 = __importDefault(require("./commands/github/issue"));
const telegram_1 = __importDefault(require("./telegram/telegram"));
const whatsapp_1 = __importDefault(require("./whatsapp"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
whatsapp_1.default.init(client => {
    bot_1.default(client);
});
const app = express_1.default();
app.use(express_1.default.json());
app.post('/github/issue', (req, res) => {
    issue_1.default(req.body);
    res.sendStatus(200);
});
app.get('/', (req, res) => {
    res.send("Fornique bot is running");
});
app.listen(process.env.PORT, () => console.log("server listening"));
process.on('unhandledRejection', up => { throw up; });
process.on('uncaughtExceptionMonitor', e => { throw e; });
process.on('uncaughtException', e => { throw e; });
telegram_1.default.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLHNEQUE4QjtBQUM5Qix3REFBZ0M7QUFFaEMsZ0RBQXdCO0FBQ3hCLG9FQUFrRDtBQUNsRCxtRUFBMkM7QUFDM0MsMERBQWtDO0FBRWxDLE1BQU0sRUFBRSxHQUFHLGtCQUFRLENBQUMsZUFBZSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztJQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07Q0FDekIsQ0FBQyxDQUFDO0FBRUgsa0JBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDbkIsYUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBRW5DLGVBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBRXRCLEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFFcEUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckQsT0FBTyxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbEQsa0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyJ9