"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaceDemo_1 = require("./interfaces/interfaceDemo");
let bird = new interfaceDemo_1.Bird();
console.log(bird.fly);
console.log(bird.fly());
let plane = new interfaceDemo_1.Plane();
console.log(plane.carry());
let missile = new interfaceDemo_1.Missile();
console.log(missile.carry() + " and " + missile.fly());
//# sourceMappingURL=interDemo.js.map