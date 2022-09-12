function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  return {
    deposit(amount) {
      balance += amount;
      transactions.push({ type: "deposit", amount: amount });
      return amount;
    },

    withdraw(amount) {
      if (amount > balance) amount = balance;
      balance -= amount;
      transactions.push({ type: "withdraw", amount: amount });
      return amount;
    },

    balance() {
      return balance;
    },

    transactions() {
      return transactions;
    },

    number() {
      return number;
    },
  };
}

function makeBank() {
  let accounts = [];
  return {

    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      destination.deposit(source.withdraw(amount));
    },
  };
}

let bank = makeBank();
console.log(bank.accounts);
