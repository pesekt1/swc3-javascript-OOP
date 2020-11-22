console.log("modules -------------");

_radius = new WeakMap;

class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }
    draw(){
        console.log("Circle with radius: " + _radius.get(this));
    }
}

const circle = new Circle(2);
//we can access the private property
//if we have the access to the WeakMap object...
console.log(_radius.get(circle)); 


import {Circle} from "./modules/circle.js"

let c = new Circle(2);
console.log(c);