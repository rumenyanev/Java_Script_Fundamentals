function repeatString(string, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    console.log(result);
    //return result;

}
repeatString('abc', 3);
repeatString('String', 2);
/*1. Repeat String
Write a function that receives a string and a repeat count n.
The function should return a new string (the old one
repeated n times).
Examples

Input
abc
3

Output
abcabcabc


Input
String
2


Output
StringString

*/