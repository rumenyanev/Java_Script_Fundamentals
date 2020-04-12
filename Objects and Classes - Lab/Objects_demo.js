const person = {}
person.name = "Pesho";
person['lastName'] = "Petrov";

person.sayHello = function(name){
    name = name || 'stranger';
    return `Hi, ${name}`
};
console.log(person.sayHello());
console.log(person.sayHello('Stamat'));
console.log(person.name,person.lastName);
console.log(person);

let transformedObject = Object.entries(person);
console.log(transformedObject);
console.log(Array.isArray(transformedObject));
//Object.entries() - returns array of all properties and their values of an object 

