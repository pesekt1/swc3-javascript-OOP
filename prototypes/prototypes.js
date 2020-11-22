//prototypes---------------------------------------------------------
console.log("prototypes ------------------");
let x = {}; // let x = new Object();
//look in the console in order to inspect the object
//we can see that it has a link to Object prototype
console.log(x.toString());

let y = {};

//prove that x and y have a reference to the same prototype
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));



//multi-level inheritance------------------------------------------------
console.log("multi-level inheritance ------------------");

let myArray = []; //let myArray = new Array();
//inspect in the console that it inherits from Array and Object

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("drawing");
    }
}

const circle = new Circle(1);



//property descriptors---------------------------------------------
console.log("property descriptors ------------------");

let person = {name: "Martin"};
//it contains toString method ... test in the console
console.log(person.toString());

for (let key in person) console.log(key);
//we will only see "person" property...
//we will NOT see all the inherited properties, why?
console.log(Object.keys(person));

//each property has attributes
let personBase = Object.getPrototypeOf(person); 
//property descriptor:
let descriptor = Object.getOwnPropertyDescriptor(personBase, "toString");
console.log(descriptor);

//we can change the attributes of a property:
Object.defineProperty(person, 'name', {
    configurable: false,    // cannot be deleted
    writable: false,
    enumerable: false
});

//try:
//delete person.name;
//person.name = "Peter";
//console.log(Object.keys(person));



//constructor prototype ------------------------------------------
console.log("constructor prototype -----------------");

let obj = {}; //let obj = new Object();
console.log(obj);
//all these are the same - Object prototype:
console.log(Object.getPrototypeOf(obj)); // __proto__
console.log(Object.prototype);
console.log(obj.__proto__); //parent of obj

let array = []; // let array = new Array()
//these are the same - Array prototype:
console.log(array.__proto__);
console.log(Array.prototype);
console.log(Object.getPrototypeOf(array));

//these are the same - Circle prototype:
console.log(circle.__proto__);
console.log(Circle.prototype);
console.log(Object.getPrototypeOf(circle));



//prototype vs instance-------------------------------------------
console.log("prototype vs instance ------------------");
const circle1 = new Circle(1);
const circle2 = new Circle(1);
console.log(circle1);
console.log(circle2);
//each instance contains the copy of the draw method... in the memory
//if we have a thousand instances then there will be a thousand draw methods in the memory

//solution:
function Circle2(radius){
    this.radius = radius;
}

Circle2.prototype.draw = function(){
    console.log("drawing");
};

c = new Circle2(1);

console.log(c);
//now the draw method is not part of the instance but only a part of the prototype
console.log(c.draw());


//we can also override methods from the prototypes
console.log(c.toString());
Circle2.prototype.toString = function(){
    console.log("circle with radius " + this.radius);
}

console.log(c.toString());

//we can also reference the instance method in the prototype:
Circle3.prototype.render = function(){
    console.log("render");
};

function Circle3(radius){
    this.print = function(){
        this.render(); //calling a prototype function - it is not a part of the instance
        console.log("print");
    }
}

Circle3.prototype.draw = function(){
    this.print();
};

let c3 = new Circle3(1);
c3.draw();



//iterating instance and prototype members ---------------------------------
console.log("iterating instance and prototype members ------------------");

console.log(Object.keys(c3));
for (let key in c3) console.log(key);
console.log(c3.hasOwnProperty("print"));
console.log(c3.hasOwnProperty("render"));



//avoid extending the built-in objects --------------------------------------
console.log("avoid extending the built-in objects ------------------");

Array.prototype.sort = function(){
    console.log("sorting :-)");
};

let numbers = [5,4,1,2,8];
numbers.sort();
console.log(numbers);