function phoneBook(input){

    let personsPhone = {};
    
    for (const person of input) {
        let phoneList = person.split(' ');
        let name = phoneList[0];
        let phoneNumber = phoneList[1];
        personsPhone[name] = phoneNumber;
    }
    for (const key in personsPhone) {
        console.log(`${key} -> ${personsPhone[key]}`);
        
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);


/*⦁	Phone Book
Write a function that stores information about a person’s name and his phone number.
 The input comes as an array of strings. Each string contains the name and the number. 
 If you receive the same name twice just replace the number. At the end print the result without sorting it.
  Try using an associative array.

Example
Input	
['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']	


Output
Tim -> 0876566344
Peter -> 0877547887
Bill -> 0896543112
*/