function reverseAnArrayOfNumbers(index, inputArr) {

    let outputArr = [];
    for (let i = 0; i < index; i++) {

        outputArr.push(inputArr[i]);
    }
    let result = outputArr.reverse().toString().replace(/[/,/]/g," ");
    console.log(result);

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
/*⦁	Reverse an Array of Numbers
Write a program which receives a number n and an array of elements.
Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.
Examples
Input
3, [10, 20, 30, 40, 50]

Output
30 20 10

Input
4, [-1, 20, 99, 5]

Output
5 99 20 -1

Input
2, [66, 43, 75, 89, 47]

Output
43 66
*/