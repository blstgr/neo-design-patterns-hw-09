import { readFileSync } from "fs";
import { UserData } from "../data/UserData";
import { DOMParser } from "xmldom";

export class XmlIterator implements Iterable<UserData> {
    private readonly data: UserData[];

    constructor(filePath: string) {
        const xml = readFileSync(filePath, "utf-8");
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "application/xml");
        const users = doc.getElementsByTagName("user");

        this.data = [];

        let i: number;
        for (i = 0; i < users.length; i++) {
            const userNode = users[i];
            const getText = (tag: string) =>
                userNode.getElementsByTagName(tag)[0]?.textContent || "";

            this.data.push({
                id: parseInt(getText("id")),
                name: getText("name"),
                email: getText("email"),
                phone: getText("phone"),
            });
        }
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