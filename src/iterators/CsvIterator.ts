import { readFileSync } from "fs";
import { UserData } from "../data/UserData";

export class CsvIterator implements Iterable<UserData> {
    private data: UserData[];

    constructor(filePath: string) {
        const file = readFileSync(filePath, "utf-8");
        const lines = file.trim().split("\n").slice(1); // skip header
        this.data = lines.map((line) => {
            const [id, name, email, phone] = line.split(",");
            return {
                id: Number(id),
                name,
                email,
                phone,
            };
        });
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