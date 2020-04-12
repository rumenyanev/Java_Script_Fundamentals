   
function cats(arr) {
    class Cat {
        constructor(name,age) {
            this.name = name;
            this.age = age;
        }
     
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];
        let cat = new Cat(name, age);
 
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);
/*⦁	Cats
Write a function that receives array of strings in the following format '{cat name} {age}'.
Create a Cat class that receives in the constructor the name and the age parsed from the input.
It should also have a function named "meow" that will print "{cat name}, age {age} says Meow" on the console.
For each of the strings provided you must create a cat object.
Examples
Input
['Mellow 2', 'Tom 5']

Output
Mellow, age 2 says Meow
Tom, age 5 says Meow


Hints
⦁	Create a Cat class with properties and methods described above
⦁	Parse the input data
⦁	Create all objects using class constructor and the parsed input data, store them in an array
⦁	Loop through the array using for…of cycle and invoke .meow() method

*/