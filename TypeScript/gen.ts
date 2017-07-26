import {Person, Concatenator,GenTool} from "./generics/genTools";

let gTool : GenTool = new GenTool();
console.log("The sum of 10 & 20 is: " + gTool.AddNumbers(10,20));

console.log("10+20+30+40+50+60="+ gTool.AddNumbers(10,20,30,40,50,60));


let strArray : string[] = ["Mickey", 'Miney', 'Pluto', 'Goofy', 'Donald Duck'];
let concatenator : Concatenator<string> = new Concatenator<string>();
console.log(concatenator.ConcatenateArray(strArray));

let numCar : Concatenator<number> = new Concatenator<number>();
let numArray : number[] = [1,2,3,4,5,6,7,8,9,0];
console.log(numCar.ConcatenateArray(numArray));

let persons: Person[] = [new Person("Suneel", 22), new Person("Sushmi", 21), new Person("Bharathi", 21)];
let personCat : Concatenator<Person> = new Concatenator<Person>();
console.log(personCat.ConcatenateArray(persons));