function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a-b);
    let result = arr.slice(0, 2);

    console.log(result.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

/*⦁	Smallest Two Numbers
Write a function that prints the two smallest elements from an array of numbers.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
Examples
Input
[30, 15, 50, 5]

Output
5 15

Input
[3, 0, 10, 4, 7, 3]

Output
0 3





Hints
⦁	You can use the following function to sort the numbers in the array:

⦁	Afterwards the first two elements in the array are the smallest
⦁	You can use slice() to take the first two numbers
*/