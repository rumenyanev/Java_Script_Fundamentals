function classLaptop(){
class Laptop{
    constructor(info){ this.info = {producer,age,brand,isOn}
function turnOn(){}

}
   
}

}
classLaptop();
/*Class Laptop
Create a class Laptop that has the following properties:
info – object that contains:
producer – string
age – number
brand – string
isOn – boolean (false by default)
turnOn – function that sets the isOn variable to true
turnOff – function that sets the isOn variable to false
showInfo – function that returns the producer, age and brand as json
quality – number (every time the laptop is turned on/off the quality decreases by 1)
getter price – number (800 – {age * 2} + (quality * 0.5)) 
The constructor should receive the info as an object and the quality

Examples
Test your class

Input	
let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)



Output
{"producer":"Dell","age":2,"brand":"XPS"}
8
true
799.5


*/ 