import { Prize } from "./gewinnbarer-hase";

export class Game {
  constructor(
    private players: string[],
    private prizes: Prize[],
  ) { }

  public play(): Map<string, string> {
    const richieMichies = new Map<string, string>();
    const mokieBrokies = new Array<string>();
    while (this.players.length > 0) {
      const zufälligerHase = Math.random();
      const rangierterHase = Math.floor(
        zufälligerHase * this.players.length,
      );
      const ausgesuchterHase = this.players[rangierterHase];
      mokieBrokies.push(ausgesuchterHase);
      this.players.pop();
    }
    while (this.prizes.length > 0 && mokieBrokies.length > 0) {
      const gewonnenerHase = this.prizes[0];
      const gewinnenderHase = mokieBrokies.shift();
      richieMichies.set(gewinnenderHase, gewonnenerHase.Name);
      if (gewonnenerHase.Count == 0) {
        this.prizes.shift();
      } else {
        this.prizes[0].Count--;
      }
    }
    return richieMichies;
  }
}
