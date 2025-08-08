import { writeFileSync } from "fs";
import { DataExporter } from "./DataExporter";

export class CsvExporter extends DataExporter {
  protected render(): void {
    const lines = this.data.map(user =>
        `${user.id},${user.name},${user.email},${user.phone}`
    );
    this.result = "id,name,email,phone\n" + lines.join("\n");
  }

  protected save(): void {
    writeFileSync("dist/users.csv", this.result);
  }
}