
import { Raffle } from "./raffle";
import { Prize } from "./prize";

test("Raffle zieht genau so viele Gewinner wie gesamt verfügbare Preise", () => {
  const entrants = ["Alice", "Bob", "Charlie"];
  const prizes = [
    new Prize("Prize1", 2),
    new Prize("Prize2", 1)
  ];
  const raffle = new Raffle(entrants, prizes);
  const result = raffle.draw();

  expect(result.size).toBe(3);
});
