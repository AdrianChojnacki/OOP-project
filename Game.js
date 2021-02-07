class Game {
  constructor(start) {
    this.stats = new Statistics();
    this.wallet = new Wallet(start);

    document.getElementById("start").addEventListener("click", this.startGame);

    this.spanWallet = document.querySelector(".panel span");
    this.boards = document.querySelectorAll("div.color");
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector(".score span.result");
    this.spanGames = document.querySelector(".score span.number");
    this.spanWins = document.querySelector(".score span.win");
    this.spanLosses = document.querySelector(".score span.loss");

    this.render();
  }

  render(
    colors = ["gray", "gray", "gray"],
    money = this.wallet.getWalletValue(),
    result = "",
    stats = [0, 0, 0],
    bid = 0,
    moneyWon = 0
  ) {
    this.boards.forEach((board, i) => {
      board.style.backgroundColor = colors[i];
    });

    this.spanWallet.textContent = money;

    if (result) {
      result = `Wygrałeś ${moneyWon}`;
    } else if (!result && result !== "") {
      result = `Przegrałeś ${bid}`;
    }

    this.spanResult.textContent = result;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[0];
    this.spanLosses.textContent = stats[0];
  }

  startGame() {}
}
