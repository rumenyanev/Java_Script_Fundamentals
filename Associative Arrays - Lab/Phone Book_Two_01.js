function solve(input) {

    let phoneBook = {};

    for (let i = 0; i < input.length; i++) {
        let[name,number] = input[i].split(' ');
        phoneBook[name] = number;
    }

    Object.keys(phoneBook).forEach(n => console.log(`${n} -> ${phoneBook[n]}`) )

}

solve(['Tim 0834212554',
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