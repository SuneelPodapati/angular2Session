import {SavingsAccount } from "./modules/savingsAccount";
import {Account } from "./modules/account";
let acc : Account  = new SavingsAccount(101,"Mini", 2000);
acc.display();
console.log("Depositiong 200..");
acc.deposit(200);
console.log(`Balance: ${acc.Balance}`);
acc.withdraw(2000);
console.log(`Balance: ${acc.Balance}`);
acc.withdraw(200);
console.log(`Balance: ${acc.Balance}`);