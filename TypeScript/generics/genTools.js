"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenTool {
    AddNumbers(num1, num2, ...numbs) {
        let total = 0;
        if (numbs.length != 0) {
            for (let i = 0; i < numbs.length; i++) {
                total += numbs[i];
            }
        }
        return total + num1 + num2;
    }
}
exports.GenTool = GenTool;
class Concatenator {
    ConcatenateArray(inputArray) {
        let str = "";
        for (let i = 0; i < inputArray.length; i++) {
            if (i > 0) {
                str += ", ";
            }
            str += inputArray[i].toString();
        }
        return str;
    }
}
exports.Concatenator = Concatenator;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `Name: ${this.name} and Age: ${this.age}`;
    }
}
exports.Person = Person;
//# sourceMappingURL=genTools.js.map