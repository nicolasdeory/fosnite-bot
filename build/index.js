"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var venom_bot_1 = require("venom-bot");
var bot_1 = __importDefault(require("./bot"));
venom_bot_1.create('test2')
    .then(function (client) { return bot_1.default(client); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map