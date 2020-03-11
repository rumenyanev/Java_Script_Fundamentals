function addAndSubtract(firstNum, secondNum, thirdNum) {
    let sum = (firstNum, secondNum) => firstNum + secondNum;
    let result = sum(firstNum, secondNum);
    let subtract = (result, thirdNum) => result - thirdNum;
    let finalResult = subtract(result,thirdNum);

    //return finalResult
    console.log(finalResult);

}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

/*Add and Subtract
You will receive three integer numbers.
Write a function sum() to get the sum of the first two integers
and subtract() function that subtracts the third integer from the result.
Examples
Input
23,
6,
10

Output
19

Input
1,
17,
30

Output
-12

Input
42,
58,
100

Output
0
*/