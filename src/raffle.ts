import { Prize } from "./prize.js";

export class Raffle {
  constructor(
    private participants: string[],
    private availablePrizes: Prize[],
  ) {}

  //  _____________________________
  // < Finger weg von meinem Code! >
  //  -----------------------------
  //       \                    / \  //\
  //        \    |\___/|      /   \//  \\
  //             /0  0  \__  /    //  | \ \
  //            /     /  \/_/    //   |  \  \
  //            @_^_@'/   \/_   //    |   \   \
  //            //_^_/     \/_ //     |    \    \
  //         ( //) |        \///      |     \     \
  //       ( / /) _|_ /   )  //       |      \     _\
  //     ( // /) '/,_ _ _/  ( ; -.    |    _ _\.-~        .-~~~^-.
  //   (( / / )) ,-{        _      `-.|.-~-.           .~         `.
  //  (( // / ))  '/\      /                 ~-. _ .-~      .-~^-.  \
  //  (( /// ))      `.   {            }                   /      \  \
  //   (( / ))     .----~-.\        \-'                 .~         \  `. \^-.
  //              ///.----..>        \             _ -~             `.  ^-`  ^-_
  //                ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
  //
  public drawWinners(): Map<string, string> {
    const winnerPrizeMap = new Map<string, string>();
    const randomizedParticipants = new Array<string>();
    
    // Teilnehmer zufällig anordnen
    while (this.participants.length > 0) {
      const randomValue = Math.random();
      const randomIndex = Math.floor(
        randomValue * this.participants.length,
      );
      const selectedParticipant = this.participants[randomIndex];
      randomizedParticipants.push(selectedParticipant);
      
      // Entferne den selektierten Teilnehmer statt immer den letzten
      this.participants.splice(randomIndex, 1);
    }
    
    // Preise an Gewinner verteilen
    while (this.availablePrizes.length > 0 && randomizedParticipants.length > 0) {
      const currentPrize = this.availablePrizes[0];
      const winner = randomizedParticipants.shift();
      winnerPrizeMap.set(winner, currentPrize.name);
      
      // Reduziere die Anzahl des aktuellen Preises
      currentPrize.quantity--;
      
      // Entferne den Preis, wenn keine mehr übrig sind
      if (currentPrize.quantity <= 0) {
        this.availablePrizes.shift();
      }
    }
    
    return winnerPrizeMap;
  }
}