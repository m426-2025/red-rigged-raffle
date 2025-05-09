export class Prize {

  constructor(
    private name: string,
    private count: number,
  ) { }

  public get Name(): string {
    return this.name;
  }

  public get Count(): number {
    return this.count;
  }

  public set Count(neuerHase: number) {
    this.count = neuerHase;
  }
}
