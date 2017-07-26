import { Bird, ICarry, IFly,IFlyCarry,Missile,Plane } from "./interfaces/interfaceDemo";

let bird : IFly = new Bird();
console.log(bird.fly);
console.log(bird.fly());

let plane : ICarry = new Plane();
console.log(plane.carry());

let missile : IFlyCarry = new Missile();
console.log(missile.carry() + " and " + missile.fly());

