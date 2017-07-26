"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
class CurrentAccount extends account_1.Account {
    constructor(accountNumber, holdersName, balance, currentLimit = 0) {
        super(accountNumber, holdersName, balance);
        this._currentLimit = currentLimit;
    }
    withdraw(amount) {
        if (this.Balance + this._currentLimit - amount < 0) {
            console.log("Insufficient funds..");
            return;
        }
        console.log(`Withdrawing ${amount} from savings account`);
        this.PBalance -= amount;
    }
}
exports.CurrentAccount = CurrentAccount;
//# sourceMappingURL=currentAccount.js.map