"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genTools_1 = require("./generics/genTools");
let gTool = new genTools_1.GenTool();
console.log("The sum of 10 & 20 is: " + gTool.AddNumbers(10, 20));
console.log("10+20+30+40+50+60=" + gTool.AddNumbers(10, 20, 30, 40, 50, 60));
let strArray = ["Mickey", 'Miney', 'Pluto', 'Goofy', 'Donald Duck'];
let concatenator = new genTools_1.Concatenator();
console.log(concatenator.ConcatenateArray(strArray));
let numCar = new genTools_1.Concatenator();
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(numCar.ConcatenateArray(numArray));
let persons = [new genTools_1.Person("Suneel", 22), new genTools_1.Person("Sushmi", 21), new genTools_1.Person("Bharathi", 21)];
let personCat = new genTools_1.Concatenator();
console.log(personCat.ConcatenateArray(persons));
//# sourceMappingURL=gen.js.map