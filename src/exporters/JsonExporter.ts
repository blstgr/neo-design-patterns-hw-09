import { writeFileSync } from "fs";
import { DataExporter } from "./DataExporter";

export class JsonExporter extends DataExporter {
  protected render(): void {
    this.result = JSON.stringify(this.data, null, 2);
  }

  protected save(): void {
    writeFileSync("dist/users.json", this.result);
  }
}