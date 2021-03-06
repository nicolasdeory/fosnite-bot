import airtable from "airtable";
import Base from "airtable/lib/base";
import Record from "airtable/lib/record";
import Table from "airtable/lib/table";

interface BaseType {
    (tableName: string): Table;
    _base: Base;
    getId(): string;
    makeRequest(options: {
        method?: string;
        path?: string;
        qs?: globalThis.Record<string, any>;
        headers?: globalThis.Record<string, any>;
        body?: globalThis.Record<string, any>;
        _numAttempts?: number;
    }): Promise<Response & {
        statusCode: number;
    }>;
    table(tableName: string): Table;
}

class AirtableStorage {
    
    private base: BaseType;

    constructor()
    {
        this.base = airtable.base('appaY3RobYciBF2zE');
    }

    getItem(tableName:string, key: string) : Promise<Record|null>
    {
        return new Promise(async (resolve, reject) =>
        {
            const records = await this.base(tableName).select({filterByFormula: `key = "${key}"`})
            .firstPage();
            if (records.length == 0)
                resolve(null);
            else
                resolve(records[0]);
        })
    }

    createItem(tableName:string, key: string, valueObject: any)
    {
        return this.base(tableName).create([{fields: {key, ...valueObject}}]);
    }

    updateItem(tableName:string, id: string, valueObject: any)
    {
        return this.base(tableName).update([{id, fields: valueObject}]);
    }
}

export default new AirtableStorage();