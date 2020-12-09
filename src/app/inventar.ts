export class Inventar {
    constructor(
      id: number,
      uid: number,
      name: string,
      created: Date,
      location: string,
      status: string,
      weight?: number,
      size?: string,
      content?: Array<string>,
      image?: string,
      comment?: string) {}
}
