function oddTimes(array) {

    let result = 0;
    
    for (let i = 0; i < array.length; i++) {
   result ^= array[i];
    }

console.log(result);



}
oddTimes([1, 2, 3, 2, 3, 1, 3]);
oddTimes([5, 7, 2, 7, 5, 2, 5]);

/*5. * Odd Times
Given an array of positive integers in a single line joined by space (' ').
All numbers occur even number of times except one number which occurs odd number of times.
 Find the number.
Examples
Input
1 2 3 2 3 1 3
Output
3

Input
5 7 2 7 5 2 5
Output
5


Hints
1. Read an array of integers.
2. Initialize a variable result with value 0.
3. Iterate through all number in the array.
4. Use XOR (^) of result and all numbers in the array.
a. XOR of two elements is 0 if both elements are same and XOR of a number x with 0 is x
5. Print the result.*/