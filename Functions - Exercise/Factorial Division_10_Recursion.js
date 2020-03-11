function factorialDivisionRecursion(numOne, numTwo) {
    function factorialRecursion(number) {
        if (number === 1) {
            return 1;
        }
        let result = number * factorialRecursion(number - 1);
        return result;
    }
    let factorialOne = factorialRecursion(numOne);
    let factorialTwo = factorialRecursion(numTwo);
    let result = factorialOne / factorialTwo;
    console.log(result.toFixed(2));

}
factorialDivisionTwo(5, 2);
factorialDivisionTwo(6, 3);


/*Factorial Division
Write a function that receives two integer numbers.
Calculate factorial of each number. Divide the first result by the
second and print the division formatted to the second decimal point.
Examples

Input
5
2

Output
60.00

Input
6
2

Output
360.00

Hints
Read more about factorial here: https://en.wikipedia.org/wiki/Factorial
You can use recursion
*/