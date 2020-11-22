//'use strict';

//ES6 - ECMA SCRIP 2015, modern version of JavaScript

//classes are just a syntactic sugar over prototypical inheritance.
//it is not the same as in Java or C#

console.log("ES6 classes-----------------");

class Circle{
    constructor(radius){
        this.radius = radius;
        this.move = function(){}
    }

    draw(){
        console.log("draw");
    }
}

let c = new Circle(1);
console.log(c);

//it is a function...
console.log(typeof Circle);

//alternative:
//class expression:
const Square = class {
    //...
}



console.log("hoisting-----------------");

//class expressions and function expressions are not hoisted
//we have to declare them before we use them in the code



console.log("Static methods-----------------");

class Circle2{
    constructor(radius){
        this.radius = radius;
    }

    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

let str = `{"radius": 2}`;
let circle2 = Circle2.parse(str);
console.log(circle2);

//another example
console.log(Math.max(2,4,1));

class Math2{
    static max(...values){
        return values.reduce(function(accumulator, currentValue){
            return accumulator += currentValue;
        });
    }
}

console.log(Math2.max(2,4,1));



console.log(`"This" keyword-----------------`);

const CircleFunction = function(){
    this.draw = function(){
        console.log(this);
    }
}

c = new CircleFunction();
//method call - on the object
c.draw();
//console.log(c.draw);


//function call
let draw = c.draw;
draw();

class Circle3{
    draw(){
        console.log(this)
    }
}

draw = new Circle3().draw;
draw();



console.log("Private members using Symbol-----------------");

//Symbol = unique identifier, it is a primitive type in JS
let _radius = Symbol(); //we do not use "new" keyword
let _draw = Symbol();

class Circle4{
    constructor(radius){
        //this.radius = radius;
        //this["radius"] = radius;
        this[_radius] = radius; //private property
    }
    [_draw](){ //private method
        console.log("drawing");
    }

}

circle4 = new Circle4(3);
console.log(circle4);

//we cannot directly access private properties and methods
//because we dont know their names

//there is still a way to access the property...
let keyRadius = Object.getOwnPropertySymbols(circle4)[0];
circle4[keyRadius] = 2;
console.log(circle4[keyRadius]);



console.log("private members using WeakMaps-----------------");

_radius = new WeakMap();
_move = new WeakMap();

//in the arrow function, "this" references the Circle object
//if we used function(){... this} it would not work
class Circle5{
    constructor(radius){
        _radius.set(this, radius);
        _move.set(this, () => {console.log("moving", this);});
    }

    printRadius(){
        _move.get(this)(); //accessing the private method
        console.log("radius: ", _radius.get(this)); //accessing the private property
    }
}

let circle5 = new Circle5(1);
console.log(circle5);
circle5.printRadius();



console.log("getters and setters-----------------");

_radius = new WeakMap;

class Circle6{
    constructor(radius){
        _radius.set(this, radius);
    }
    get radius(){
        return _radius.get(this);
    }

    set radius(value){
        if(value <= 0) throw new Error("Invalid radius value");
        _radius.set(this, value);
    }
}

let circle6 = new Circle6(4);
console.log(circle6);
circle6.radius = 2;
console.log(circle6.radius);



console.log("classical inheritance-----------------");

class Shape{
    constructor(color){
        this.color = color;
    }
    move(){
        console.log("move");
    }
}

class Circle7 extends Shape{
    constructor(radius, color){
        super(color); //executing the parents constructor
        this.radius = radius;
    }

    draw(){
        console.log("draw");
    }
}

let circle7 = new Circle7(2, "blue");
console.log(circle7);



console.log("method overriding-----------------");

class Square2 extends Shape{
    move(){
        super.move(); //accessing the parent method
        console.log("square move");
    }
}

let square = new Square2();
square.move();