"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var venom_bot_1 = require("venom-bot");
var bot_1 = __importDefault(require("./bot"));
var express_1 = __importDefault(require("express"));
venom_bot_1.create('test2', function (base64Qrimg, asciiQR, attempts) { }, function (statusSession, session) { }, { useChrome: false, browserArgs: ['--no-sandbox'] })
    .then(function (client) { return bot_1.default(client); })
    .catch(function (error) { return console.log(error); });
var app = express_1.default();
app.listen(process.env.PORT, function () { return console.log("server listening"); });
//# sourceMappingURL=index.js.map