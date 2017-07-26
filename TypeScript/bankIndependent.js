"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const savingsAccount_1 = require("./modules/savingsAccount");
let acc = new savingsAccount_1.SavingsAccount(101, "Mini", 2000);
acc.display();
console.log("Depositiong 200..");
acc.deposit(200);
console.log(`Balance: ${acc.Balance}`);
acc.withdraw(2000);
console.log(`Balance: ${acc.Balance}`);
acc.withdraw(200);
console.log(`Balance: ${acc.Balance}`);
//# sourceMappingURL=bankIndependent.js.map