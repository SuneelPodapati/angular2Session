import{Account} from "./account";

export class CurrentAccount extends Account{

    private _currentLimit: number;
    constructor(accountNumber: number, holdersName:string, balance: number, currentLimit:number = 0){
        super(accountNumber, holdersName, balance);
        this._currentLimit = currentLimit;
    }

    withdraw(amount: number){
        if(this.Balance + this._currentLimit  - amount < 0){
            console.log("Insufficient funds..");
            return;
        }
        console.log(`Withdrawing ${amount} from savings account`);
        this.PBalance -= amount;
    }
}