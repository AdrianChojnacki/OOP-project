class Wallet {
  constructor(money) {
    let _money = money;

    // Pobieranie aktualnej wartości portfela
    this.getWalletValue = () => _money;

    // Sprawdzanie czy użytkownik posiada odpowiednią ilość środków
    this.checkCanPlay = (value) => {
      if (_money >= value) return true;
      return false;
    };

    // Aktualizacja stanu portfela
    this.chageWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("Nieprawidłowy typ działania");
        }
      } else {
        console.log(typeof value);
        throw new Error("Nieprawidłowa liczba");
      }
    };
  }
}

const wallet = new Wallet(200);
