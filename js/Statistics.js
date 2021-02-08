class Statistics {
  constructor() {
    this.gameResults = [];
  }

  // Dodanie wyniku gry do statystyk
  addGameToStatistics(win, bid) {
    let gameResult = {
      win: win,
      bid: bid,
    };
    this.gameResults.push(gameResult);
  }

  // Zwrócenie statystyk
  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter((result) => result.win).length;
    let losses = this.gameResults.filter((result) => !result.win).length;

    return [games, wins, losses];
  }
}
