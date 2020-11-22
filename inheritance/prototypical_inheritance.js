//creating prototypical inheritance---------------------------------------------------------
console.log("creating prototypical inheritance ------------------");

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function(){
    console.log("draw");
}

let s = new Shape();
let c = new Circle(1);

console.log(s);
console.log(c);



//resetting the constructor---------------------------------------------------------
console.log("resetting the constructor ------------------");

//try this and inspect the result - what object did we get?
c = new Circle.prototype.constructor(1);
console.log(c);

//we need to reset the constructor back to Circle
Circle.prototype.constructor = Circle; //reseting the constructor
c = new Circle.prototype.constructor(1);
console.log(c);

//these 2 expressions are identical:
let circle2 = new Circle(1);
let circle3 = new Circle.prototype.constructor(1);
//sometimes we need to create an object dynamically via the prototype.constructor



//calling the super constructor---------------------------------------------------------
console.log("calling the super constructor ------------------");

function Shape2(color){
    this.color = color;
}

function Circle2(radius, color){
    Shape2.call(this, color);
    this.radius = radius;
}

Circle2.prototype = Object.create(Shape2.prototype);
Circle2.prototype.constructor = Circle2;

c = new Circle2(1, "blue");
console.log(c);



//intermediate function inheritance---------------------------------------------------------
console.log("intermediate function inheritance ------------------");

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Square(size){
    this.size = size;
}
extend(Square, Shape);

let square = new Square(5);
console.log(square);



//method overriding---------------------------------------------------------
console.log("method overriding ------------------");

square.duplicate();

Square.prototype.duplicate = function(){
    console.log("duplicate square");
}

square = new Square(5);
square.duplicate();

Square.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this);
    console.log("duplicate square");
}

square.duplicate();



//polymorphism---------------------------------------------------------
console.log("polymorphism ------------------");

extend(Square, Shape);
extend(Circle, Shape);

Square.prototype.duplicate = function(){
    console.log("duplicate square");
}

Circle.prototype.duplicate = function(){
    console.log("duplicate circle");
}

let shapes = [
    new Shape(),
    new Circle(),
    new Square
];

for (const shape of shapes) {
    shape.duplicate();
}



//when to use inheritance---------------------------------------------------------
console.log("when to use inheritance ------------------");

//keep it simple
//favor 1-level inheritance
//favor copmosition over hierarchy ... use mixins



//mixins---------------------------------------------------------
console.log("mixins ------------------");

const canEat = {
    eat: function(){
        this.hunger--;
        console.log("eating");
    }
};

const canWalk = {
    walk: function(){
        console.log("walking");
    }
};

const canSwim = {
    swim: function(){
        console.log("swimming");
    }
}

let person = Object.assign({}, canEat, canWalk);
console.log(person);

function Person(hunger){
    this.hunger = hunger;
}

Object.assign(Person.prototype, canEat, canWalk);
person = new Person(5);
person.eat();
console.log(person);

function Fish(hunger){
    this.hunger = hunger;
}

Object.assign(Fish.prototype, canEat, canSwim);
let fish = new Fish(5);
fish.eat();
console.log(fish);


//general solution
function mixin(target, ...sources){ //rest operator
    Object.assign(target, ...sources); //spread operator
}

mixin(Person.prototype, canEat,canWalk);
mixin(Fish.prototype, canEat,canSwim);


