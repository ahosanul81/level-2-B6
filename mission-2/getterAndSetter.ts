// access >> modify

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  //   addBalance(balance: number) {
  //     this._userBalance = this._userBalance + balance;
  //   }

  // setter
  set addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
  // getter
  get getBalance() {
    return (this._userBalance = this._userBalance);
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

// mezbaBhaiAccount.addBalance(100);
// mezbaBhaiAccount.addBalance(50);
mezbaBhaiAccount.addBalance = 100;

console.log(mezbaBhaiAccount.getBalance);
