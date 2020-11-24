export class Inventar {
    constructor(
      id: number,
      uid: number,
      navn: string,
      registrert: Date,
      plassering: string,
      status: string,
      vekt?: number,
      størrelse?: string,
      innhold?: Array<string>,
      bilde?: string,
      kommentar?: string) {}
}
