//   ____               _             _                         _   _
//  / ___| _____      _(_)_ __  _ __ | |__   __ _ _ __ ___ _ __| | | | __ _ ___  ___
// | |  _ / _ \ \ /\ / / | '_ \| '_ \| '_ \ / _` | '__/ _ \ '__| |_| |/ _` / __|/ _ \
// | |_| |  __/\ V  V /| | | | | | | | |_) | (_| | | |  __/ |  |  _  | (_| \__ \  __/
//  \____|\___| \_/\_/ |_|_| |_|_| |_|_.__/ \__,_|_|  \___|_|  |_| |_|\__,_|___/\___|
export class Prize {
  //  _________________________
  // < Mich kann man gewinnen! >
  //  -------------------------
  //   \
  //    \   \
  //         \ /\
  //         ( )
  //       .( o ).
  //
  constructor(
    private prizeName: string,
    private prizeQuantity: number,
  ) {}

  public get name(): string {
    return this.prizeName;
  }

  public get quantity(): number {
    return this.prizeQuantity;
  }

  public set quantity(newQuantity: number) {
    this.prizeQuantity = newQuantity;
  }
  
  toString(): string {
    return this.prizeName;
  }
}