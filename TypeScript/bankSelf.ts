console.log("Welcome to typeScript banking");

class Account{
    private _accountNumber: number;
    private _holdersName : string;
    private _balance: number;
    
    constructor(accountNumber, holdersName, balance){
        this._accountNumber = accountNumber;
        this._balance = balance;
        this._holdersName = holdersName;
    }

    public get AccountNumber(){ return this._accountNumber;}

    public get HoldersName(){ return this._holdersName;}
    public set HoldersName(value){this._holdersName = value;}

    public get Balance(){ return this._balance;}
    public set Balance(value){this._balance = value;}

    display(){
        console.log(`Account Number: ${this._accountNumber}, Holders Name: ${this._holdersName} and balance: ${this._balance}`);
    }
}

let acc: Account = new Account(101,"Tintin", 100);
acc.display();