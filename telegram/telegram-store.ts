import Record from "airtable/lib/record";
import airtable from "../airtable";

const TABLE_NAME = 'telegramStore';

class TelegramStore {

    getItem(key: string) : Promise<string|null> {
        return new Promise(async (resolve, reject) =>
        {
            const r = await airtable.getItem(TABLE_NAME, key);
            resolve(r?.fields.value);
        });
    }

    setItem(key: string, value: string) : Promise<void>
    {
        return new Promise(async (resolve, reject) =>
        {
            const res = await airtable.getItem(TABLE_NAME, key);
            if (res)
            {
                await airtable.updateItem(TABLE_NAME, res.id, { value });
                resolve();
            } else
            {
                await airtable.createItem(TABLE_NAME, key, { value });
                resolve();
            }
        });
    }
}

export default new TelegramStore();