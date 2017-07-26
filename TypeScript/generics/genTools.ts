export class GenTool{
    AddNumbers(num1: number, num2: number,...numbs: number[]): number{
        let total: number = 0;
        if(numbs.length != 0){
            for(let i: number = 0; i < numbs.length; i++){
                total += numbs[i];
            }
        }
        return total + num1 + num2;
    }
}

export class Concatenator<T>{
    ConcatenateArray(inputArray: Array<T>): string{
        let str : string = "";
        for(let i : number = 0; i< inputArray.length; i++){
            if(i> 0){
                str += ", ";
            }
            str += inputArray[i].toString();
        }
        return str;
    }
}

export class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    toString(): string{
        return `Name: ${this.name} and Age: ${this.age}`;
    }
}