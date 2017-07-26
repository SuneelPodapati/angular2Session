console.log("Welcome to typeScript banking");
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
    set Balance(value) { this._balance = value; }
    display() {
        console.log(`Account Number: ${this._accountNumber}, Holders Name: ${this._holdersName} and balance: ${this._balance}`);
    }
}
let acc = new Account(101, "Tintin", 100);
acc.display();
//# sourceMappingURL=bankSelf.js.map