/*function createBankAcccount(initialBalance) {
  let balance = initialBalance;

  let deposit = function (amount) {
    balance += amount;
    console.log(`Balance:${balance}`); //template litigles
  };
  let withdraw = function (amount) {
    balance -= amount;
    console.log(`Balance:${balance}`);
  };
  return (deposit, withdraw);
}
const account = createBankAcccount();

account.deposit(500);
account.withdraw(300);
console.log(account.balance);*/
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  let deposit = function (amount) {
    balance += amount;
    console.log(`Balance: ${balance}`);
  };

  let withdraw = function (amount) {
    if (amount > balance) {
      console.log("Insufficient funds!");
    } else {
      balance -= amount;
      console.log(`Balance: ${balance}`);
    }
  };

  return {
    deposit, // shorthand for deposit: deposit
    withdraw, // shorthand for withdraw: withdraw
    getBalance: function () {
      return balance;
    },
  };
}

const account = createBankAccount(1000); // start with an initial balance

account.deposit(500); // Balance: 1500
account.withdraw(300); // Balance: 1200
console.log(account.getBalance()); // 1200
