import {Account } from "./account";

export class SavingsAccount extends Account{

    constructor(accountNumber: number, holdersName: string, balance: number){
        super(accountNumber,holdersName,balance);
    }

    withdraw(amount : number){
        if(this.Balance -amount < 500){
            console.log("Insufficient funds..");
            return;
        }
        console.log(`Withdrawing ${amount} from savings account`);
        this.PBalance -= amount;
    }
}