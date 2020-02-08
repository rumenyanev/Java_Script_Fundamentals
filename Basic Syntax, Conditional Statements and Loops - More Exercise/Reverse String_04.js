function reverseString(word) {
    let string = word;
    let result = string.split('').reverse().join('');
console.log(result);
}
reverseString('Hello');
reverseString('SoftUni');
reverseString('1234')
/*Reverse String
Write a program which reverses a string and print it on the console.
Examples
Input
Hello

Output
olleH


Input
SoftUni

Output
inUtfoS


Input
1234

Output
4321
*/