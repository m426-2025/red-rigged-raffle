import { Raffle } from "./raffle.js";
import { Prize } from "./prize.js";

test("test raffle functionality", () => {
  // Arrange
  const participants = [
    "@User1", "@User2", "@User3", "@User4", "@User5",
    "@User6", "@User7", "@User8", "@User9", "@User10"
  ];
  
  const prizes = [
    new Prize("Prize1", 1), // 1 Prize1 available
    new Prize("Prize2", 2), // 2 Prize2 available
    new Prize("Prize3", 3), // 3 Prize3 available
  ];
  
  const totalPrizes = prizes.reduce((sum, prize) => sum + prize.quantity, 0); // Should be 6
  
  // Act
  const raffle = new Raffle(participants, prizes);
  const winnerPrizeMap = raffle.drawWinners();
  
  // Assert
  expect(winnerPrizeMap.size).toBe(totalPrizes); // Should have 6 winners with prizes
  
  // Check if we have the correct number of each prize type
  const prizeDistribution = new Map<string, number>();
  for (const prize of winnerPrizeMap.values()) {
    prizeDistribution.set(prize, (prizeDistribution.get(prize) || 0) + 1);
  }
  
  expect(prizeDistribution.get("Prize1")).toBe(1); // Should have 1 Prize1
  expect(prizeDistribution.get("Prize2")).toBe(2); // Should have 2 Prize2
  expect(prizeDistribution.get("Prize3")).toBe(3); // Should have 3 Prize3
});