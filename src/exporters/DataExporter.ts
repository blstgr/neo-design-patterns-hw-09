import { UserData } from "../data/UserData";

export abstract class DataExporter {
  protected data: any[] = []; // raw data from API
  protected result: string = "";
  protected transformedData: UserData[] = []; // final sorted + filtered users


  public async export(): Promise<void> {
    await this.load();
    this.transform();
    this.beforeRender();  // optional
    this.render();        // required
    this.afterRender();   // optional
    this.save();          // required
  }

  protected async load(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let rawData: any;
    rawData = await response.json();
    this.data = rawData;
  }

  protected transform(): void {
    this.data = this.data
        .map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
  }

  protected beforeRender(): void {}
  protected abstract render(): void;
  protected afterRender(): void {}
  protected abstract save(): void;

}

