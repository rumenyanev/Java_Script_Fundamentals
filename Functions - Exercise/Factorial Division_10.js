function factorialDivision(firstNumber, secondNumber) {
    function factorial(number) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result*= i;
        }
       return result;
    }
    let factorialOne = factorial(firstNumber);
    let factorialTwo = factorial(secondNumber);
    let result = factorialOne/factorialTwo;
    console.log(result.toFixed(2));
    

}
factorialDivision(5, 2);
factorialDivision(6, 3);


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