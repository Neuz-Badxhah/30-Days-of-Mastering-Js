class BankAccount {
  #balance = 0;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  diposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getBalance() {
    console.log(`Your balance is ${this.#balance}`);
  }
}

const account = new BankAccount(1000);
console.log(`Opening Balance: ${account.getBalance()}`);
account.diposit(500);
console.log(`After Deposite: ${account.getBalance()}`);
account.withdraw(200);
console.log(`After withdraw: ${account.getBalance()}`);
