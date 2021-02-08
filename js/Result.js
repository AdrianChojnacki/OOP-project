class Result {
  // static moneyWonInGame(result, bid) {
  //   if (result) return 3 * bid;
  //   else return 0;
  // }
  static moneyWonInGame(result, bid) {
    if (result === 1) {
      return 2 * bid;
    } else if (result === 2) {
      return 4 * bid;
    } else if (result === 3) {
      return 8 * bid;
    } else if (result === 4) {
      return 16 * bid;
    } else {
      return 0;
    }
  }

  // static checkWinner(draw) {
  //   if (
  //     (draw[0] === draw[1] && draw[1] === draw[2]) ||
  //     (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  static checkWinner(draw) {
    if (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) {
      return 1;
    } else if (draw[0] === "red" && draw[1] === "red" && draw[2] === "red") {
      return 2;
    } else if (draw[0] === "green" && draw[1] === "green" && draw[2] === "green") {
      return 3;
    } else if (draw[0] === "blue" && draw[1] === "blue" && draw[2] === "blue") {
      return 4;
    } else {
      return false;
    }
  }
}
