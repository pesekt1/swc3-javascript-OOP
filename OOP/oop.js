//4 pillars of Object oriented programming
console.log("4 pillars of OOP --------------------");

//1. Encapsulation:
//procedural programming:
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime *rate);
}

console.log(getWage(baseSalary,overtime,rate));

//object oriented programming:
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log(employee.getWage());



//2.abstraction:
//hide the properties and functions that are the inner implementation



//3. Inheritance:
//objects can inherit features from other objects... reusing the code



//polymorphism
//we can have multiple objects inheriting from a common parent object which has a render() method.
//now we can override this method for each child object.
//HTMLElement.render() ... depending on which object is the HTMLElement 
//we get a different render() method ... different behavior

//better than:
//switch(){
//  case "select": renderSelect();
//  case "text": renderTextBox();
//}