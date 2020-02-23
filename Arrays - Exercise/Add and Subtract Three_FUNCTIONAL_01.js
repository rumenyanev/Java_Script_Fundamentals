function addAndSubtractThree(data = []) {
    let arrayResult = [];
 

    data.map((element, index) => {
        element % 2 === 0 ? element += index : element -= index;
        arrayResult.push(element);
    })
    console.log(arrayResult);
    console.log(originalSum = data.reduce((acc, curr) => acc + curr, 0));// acc = accumulator; curr = current element
    console.log(resultSum = arrayResult.reduce((acc, curr) => acc + curr, 0));

}


addAndSubtractThree([5, 15, 23, 56, 35]);
addAndSubtractThree([-5, 11, 3, 0, 2]);
/*Add or Subtract
Write a function, which changes the value of odd and even numbers in an array of numbers.
 If the number is even - add to its value its index position
 If the number is odd - subtract to its value its index position
Output
On the first line print the newly modified array,
on the second line print the sum of numbers from the original
array, on the third line print the sum of numbers from the modified array.
Examples

Input

[5, 15, 23, 56, 35]


Output
[ 5, 14, 21, 59, 31 ]
134
130


Input
[-5, 11, 3, 0, 2]


Output
[ -5, 10, 1, 3, 6 ]
11
15
         */