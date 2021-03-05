"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var conditions_1 = __importDefault(require("../conditions"));
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
/**
 * !fshop
 */
exports.default = {
    match: conditions_1.default.exact("!fshop"),
    command: fortnite
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ydG5pdGUtc2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1hbmRzL2ZvcnRuaXRlLXNob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFFMUIsNkRBQXVDO0FBRXZDLFNBQVMsUUFBUSxDQUFDLE1BQWdCLEVBQUUsT0FBZ0I7SUFFaEQsZUFBSyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQztTQUN2QyxJQUFJLENBQUMsVUFBQSxJQUFJO1FBRUYsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixHQUFHLElBQUkscURBQXFELENBQUM7UUFDN0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDL0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUMxQztnQkFDSSxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLE9BQU87b0JBQzNCLFNBQVM7Z0JBRWIsR0FBRyxJQUFJLGFBQVcsSUFBSSxDQUFDLElBQUksY0FBUyxLQUFLLHlCQUFvQixJQUFJLENBQUMsYUFBYSxTQUFNLENBQUE7YUFDeEY7U0FDSjtRQUNELEdBQUcsSUFBSSxzQ0FBc0MsQ0FBQztRQUM5QyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsa0JBQWU7SUFDWCxLQUFLLEVBQUUsb0JBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pDLE9BQU8sRUFBRSxRQUFRO0NBQ3BCLENBQUEifQ==