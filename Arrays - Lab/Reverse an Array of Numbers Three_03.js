function reverseAnArrayOfNumbersThree(index,inputArr){
    inputArr.reverse();
for(let i = inputArr.length-1; i>= index;i--){
inputArr.shift([i]);

}
console.log(inputArr.toString().replace(/[/,/]/g," "));

}
reverseAnArrayOfNumbersThree(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbersThree(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbersThree(2, [66, 43, 75, 89, 47])
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