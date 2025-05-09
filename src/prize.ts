export class Prize {
    private prizeName: string;
    private prizeCount: number;
  
    constructor(name: string, quantity: number) {
      this.prizeName = name;
      this.prizeCount = quantity;
    }
  
    public get name(): string {
      return this.prizeName;
    }
  
    public get quantity(): number {
      return this.prizeCount;
    }
  
    public decrementCount(): void {
      this.prizeCount--;
    }
  }
  