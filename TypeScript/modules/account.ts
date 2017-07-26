export class Account {


    private _accountNumber: number;
    private _balance: number;
    private _holdersName: string;


    constructor(accountNumber, holdersName, balance) {
        this._accountNumber = accountNumber;
        this._balance = balance;
        this._holdersName = holdersName;
    }
    public get AccountNumber(){ return this._accountNumber;}

    public get HoldersName(){ return this._holdersName;}
    public set HoldersName(value){this._holdersName = value;}

    public get Balance(){ return this._balance;}
    protected set PBalance(value){this._balance = value;}

    display() {
        console.log(`Account Number: ${this._accountNumber}, Holders Name: ${this._holdersName} and balance: ${this._balance}`);
    }

    deposit(amount: number){
        this._balance += amount;
    }

     withdraw(amount : number){
        this._balance -= amount;
    }
}