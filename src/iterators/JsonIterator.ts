import { readFileSync } from "fs";
import { UserData } from "../data/UserData";

export class JsonIterator implements Iterable<UserData> {
    private data: UserData[];

    constructor(filePath: string) {
        const file = readFileSync(filePath, "utf-8");
        this.data = JSON.parse(file) as UserData[];
    }

    [Symbol.iterator](): Iterator<UserData> {
        let index = 0;
        const data = this.data;

        return {
            next(): IteratorResult<UserData> {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                }
                return { value: null, done: true };
            },
        };
    }
}