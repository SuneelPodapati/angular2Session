"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(accountNumber, holdersName, balance) {
        this._accountNumber = accountNumber;
        this._balance = balance;
        this._holdersName = holdersName;
    }
    get AccountNumber() { return this._accountNumber; }
    get HoldersName() { return this._holdersName; }
    set HoldersName(value) { this._holdersName = value; }
    get Balance() { return this._balance; }
    set PBalance(value) { this._balance = value; }
    display() {
        console.log(`Account Number: ${this._accountNumber}, Holders Name: ${this._holdersName} and balance: ${this._balance}`);
    }
    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        this._balance -= amount;
    }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map