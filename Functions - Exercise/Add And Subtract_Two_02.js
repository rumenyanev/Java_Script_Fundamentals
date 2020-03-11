function addAndSubtractTwo(a, b, c) {
    function sum(a,b) {
        return a + b;
    }
    function subtract(a,b) {
        return a - b;
    }
    let sumResult = sum(a,b);
    let result = subtract(sumResult, c);

    //return result;
    console.log(result);

}

addAndSubtractTwo(23, 6, 10);
addAndSubtractTwo(1, 17, 30);
addAndSubtractTwo(42, 58, 100);

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