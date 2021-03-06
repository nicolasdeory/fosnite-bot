"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const conditions_1 = __importDefault(require("../conditions"));
function fortnite(client, message) {
    axios_1.default.get("https://fortnite-api.com/v2/shop/br")
        .then(data => {
        const entries = data.data.data.daily.entries;
        entries.push(...data.data.data.featured?.entries ?? []);
        entries.push(...data.data.data.specialFeatured?.entries ?? []);
        entries.push(...data.data.data.specialDaily?.entries ?? []);
        let msg = "";
        msg += "En la tienda de fortnite hoy hay lo siguiente: \n\n";
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (entry.bundle)
                continue;
            const price = entry.finalPrice;
            for (let j = 0; j < entry.items.length; j++) {
                const item = entry.items[j];
                if (item.type.value !== "emote")
                    continue;
                msg += `BAILE: *${item.name}* por ${price} paVos (youtu.be/${item.showcaseVideo}) \n`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ydG5pdGUtc2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1hbmRzL2ZvcnRuaXRlLXNob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsK0RBQXVDO0FBRXZDLFNBQVMsUUFBUSxDQUFDLE1BQWdCLEVBQUUsT0FBZ0I7SUFFaEQsZUFBSyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQztTQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFFTCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxJQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxJQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxJQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEdBQUcsSUFBSSxxREFBcUQsQ0FBQztRQUM3RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUVyQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxLQUFLLENBQUMsTUFBTTtnQkFDWixTQUFTO1lBQ2IsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUMvQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO2dCQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTztvQkFDM0IsU0FBUztnQkFFYixHQUFHLElBQUksV0FBVyxJQUFJLENBQUMsSUFBSSxTQUFTLEtBQUssb0JBQW9CLElBQUksQ0FBQyxhQUFhLE1BQU0sQ0FBQTthQUN4RjtTQUNKO1FBQ0QsR0FBRyxJQUFJLHNDQUFzQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxrQkFBZTtJQUNYLEtBQUssRUFBRSxvQkFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDakMsT0FBTyxFQUFFLFFBQVE7Q0FDcEIsQ0FBQSJ9