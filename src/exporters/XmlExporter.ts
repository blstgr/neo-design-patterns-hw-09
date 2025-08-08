import { writeFileSync } from "fs";
import { DataExporter } from "./DataExporter";
import { UserData } from "../data/UserData";

export class XmlExporter extends DataExporter {
  protected render(): void {
    const usersXml = this.data
        .map((user: UserData) => {
          return `
  <user>
    <id>${user.id}</id>
    <name>${user.name}</name>
    <email>${user.email}</email>
    <phone>${user.phone}</phone>
  </user>`;
        })
        .join("");

    this.result = `<?xml version="1.0" encoding="UTF-8"?>\n<users>${usersXml}\n</users>`;
  }

  protected afterRender(): void {
    this.result += `\n<!-- Експорт згенеровано: ${new Date().toISOString()} -->`;
  }

  protected save(): void {
    writeFileSync("dist/users.xml", this.result);
  }
}