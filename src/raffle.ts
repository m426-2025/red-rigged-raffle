import { Prize } from "./prize";

export class Raffle {
  private entrants: string[];
  private prizes: Prize[];

  constructor(entrants: string[], prizes: Prize[]) {
    this.entrants = entrants;
    this.prizes = prizes;
  }

  private shuffleEntrants(): string[] {
    const pool = [...this.entrants];
    const result: string[] = [];

    while (pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      result.push(pool[idx]);
      pool.splice(idx, 1);
    }

    return result;
  }

  private assignPrizes(shuffled: string[]): Map<string, string> {
    const winners = new Map<string, string>();
    const entrantQueue = [...shuffled];
    const prizeQueue = [...this.prizes];

    while (prizeQueue.length > 0 && entrantQueue.length > 0) {
      const prize = prizeQueue[0];
      const entrant = entrantQueue.shift()!;
      winners.set(entrant, prize.name);

      if (prize.quantity > 1) {
        prize.decrementCount();
      } else {
        prizeQueue.shift();
      }
    }

    return winners;
  }

  public draw(): Map<string, string> {
    const shuffled = this.shuffleEntrants();
    return this.assignPrizes(shuffled);
  }
}
