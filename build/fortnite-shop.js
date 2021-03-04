"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
function fortnite(client, message) {
    axios_1.default.get("https://fortnite-api.com/v2/shop/br")
        .then(function (data) {
        var daily = data.data.data.daily.entries;
        var msg = "";
        msg += "En la tienda de fortnite hoy hay lo siguiente: \n\n";
        for (var i = 0; i < daily.length; i++) {
            var entry = daily[i];
            var price = entry.finalPrice;
            for (var j = 0; j < entry.items.length; j++) {
                var item = entry.items[j];
                if (item.type.value !== "emote")
                    continue;
                msg += "BAILE: *" + item.name + "* por " + price + " paVos (youtu.be/" + item.showcaseVideo + ") \n";
            }
        }
        msg += "\nYa me comentáis si os mola alguno.";
        client.sendText(message.from, msg);
    });
}
exports.default = fortnite;
//# sourceMappingURL=fortnite-shop.js.map