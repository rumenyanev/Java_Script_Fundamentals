function sequences(input){

    input = input.map(el => JSON.parse(el));
    input.forEach(el => el.sort((a, b) => b - a));
    let outputArr = [];
    for (let i = 0; i < input.length; i++) {
        let currentArray = input[i];
        let isUnique = true;
        for (let j = 0; j < outputArr.length; j++) {
            let nextArray = outputArr[j];
            if (nextArray.toString() === currentArray.toString()) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            outputArr.push(currentArray);
        }
    }
    outputArr.sort((a, b) => a.length - b.length);
    outputArr.forEach(el => console.log(`[${el.join(', ')}]`));

}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);

/*2. Sequences
You are tasked with storing sequences of numbers. 
You will receive an array of strings; each of them will contain unknown amount of arrays containing numbers, 
from which you must store only the unique arrays (duplicate arrays should be discarded). 
An array is considered the same (NOT unique) if it contains the same numbers as another array, regardless of their order. 
After storing all arrays, your program should print them back in ascending order based on their length, 
if two arrays have the same length they should be printed in order of being received from the input. 
Each individual array should be printed in descending order in the format "[a1, a2, a3,… an]". Check the examples bellow.
The input comes as an array of strings where each entry is a JSON representing an array of numbers.
The output should be printed on the console - each array printed on a new line in the format "[a1, a2, a3,… an]" ,
 following the above mentioned ordering.
Examples
Input
["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]



Output
[13, 10, 2, 1, 0, -17]
[4, 3, 2, 1, 0, -1, -2, -3]


Input
["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]


Output
[80.099, 7.339, 7.18, 7.14]*/