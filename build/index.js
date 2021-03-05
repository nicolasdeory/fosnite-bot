"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var venom_bot_1 = require("venom-bot");
var bot_1 = __importDefault(require("./bot"));
var express_1 = __importDefault(require("express"));
var issue_1 = __importDefault(require("./commands/github/issue"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var whatsappClient;
venom_bot_1.create('test2', function (base64Qrimg, asciiQR, attempts) { }, function (statusSession, session) { console.log(statusSession); }, {
    useChrome: false,
    browserArgs: ['--no-sandbox']
}, JSON.parse((_a = process.env.WHATSAPP_TOKEN) !== null && _a !== void 0 ? _a : ''))
    .then(function (client) {
    whatsappClient = client;
    bot_1.default(client);
})
    .catch(function (error) { return console.log(error); });
var app = express_1.default();
app.use(express_1.default.json());
app.post('/github/issue', function (req, res) {
    issue_1.default(whatsappClient, req.body);
    res.sendStatus(200);
});
app.get('/', function (req, res) {
    res.send("Fornique bot is running");
});
app.listen(process.env.PORT, function () { return console.log("server listening"); });
process.on('unhandledRejection', function (up) { throw up; });
process.on('uncaughtExceptionMonitor', function (e) { throw e; });
process.on('uncaughtException', function (e) { throw e; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsOENBQXdCO0FBRXhCLG9EQUE4QjtBQUc5QixrRUFBa0Q7QUFDbEQsa0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsSUFBSSxjQUF3QixDQUFDO0FBRzdCLGtCQUFNLENBQUMsT0FBTyxFQUNWLFVBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxRQUFRLElBQU8sQ0FBQyxFQUN2QyxVQUFDLGFBQWEsRUFBRSxPQUFPLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFDMUQ7SUFDSSxTQUFTLEVBQUUsS0FBSztJQUNoQixXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUM7Q0FDaEMsRUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLG1DQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQzVDLElBQUksQ0FBQyxVQUFDLE1BQU07SUFFVCxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLGFBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQixDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7QUFFMUMsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFFL0IsZUFBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFFbEIsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7QUFFcEUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxVQUFBLEVBQUUsSUFBTSxNQUFNLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELE9BQU8sQ0FBQyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsVUFBQSxDQUFDLElBQUssTUFBTSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztBQUN2RCxPQUFPLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQUEsQ0FBQyxJQUFLLE1BQU0sQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMifQ==