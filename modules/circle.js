const _radius = new WeakMap; //we dont export this

//we only export the class:
export class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }
    draw(){
        console.log("Circle with radius: " + _radius.get(this));
    }
}