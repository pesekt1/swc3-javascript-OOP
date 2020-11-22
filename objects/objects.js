
//objects -------------------------------------
console.log("objects --------------------");

//private properties
console.log("private properties --------------------");

//public properties and methods:
function Circle(radius){
    this.radius = radius;
    this.defaultLocation = {x: 0, y: 0};
    this.computeOptimalLocation = function(){
        console.log("Computing optimal location.");
    };
    this.draw = function(){
            console.log("drawing");
    }
}

let circle = new Circle(1);
circle.draw();
circle.computeOptimalLocation();
console.log(circle.defaultLocation);


//private properties and methods:
function CirclePrivate(radius){
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};
    let computeOptimalLocation = function(){
        console.log("Computing optimal location.")
    };
    this.draw = function(){
        console.log(defaultLocation);
        computeOptimalLocation();
    }
}

let circlePrivate = new CirclePrivate(1);
circlePrivate.draw();
//we dont have access to defaultLocation and computeOptimalLocation
//they are kind of private members of circlePrivate object...

//getters and setters
console.log("getters and setters --------------")
//we can use getter methods
function CirclePrivate2(radius){
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};
    this.getDefaultLocation = function(){
        return defaultLocation;
    }
}

circlePrivate = new CirclePrivate2(1);
console.log(circlePrivate.getDefaultLocation());

//getters and setters:
function CirclePrivate3(radius){
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};
    Object.defineProperty(this, 'defaultLocation',{
        get: function(){return defaultLocation;},
        set: function(value){
            if (!value.x || !value.y) throw new Error("Invalid location.")
            defaultLocation = value}
    })
}

circlePrivate3 = new CirclePrivate3(1);
console.log(circlePrivate3.defaultLocation);
circlePrivate3.defaultLocation = {x:2,y:2};
console.log(circlePrivate3.defaultLocation);