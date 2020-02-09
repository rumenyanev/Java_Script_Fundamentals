function primeNumberChecker(number){
    
 let divider = 2;
    let maxDivider = Math.sqrt(numer);
    let prime = true;
    while (prime && (divider <= maxDivider)) {
        if (number % divider == 0) {
            prime = false;

        }
        divider++;
    }
    console.log("Prime ? " + prime);
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);
/*Prime Number Checker
Write a function to check if a number is prime (only wholly divisible by itself and one).
The input comes as a single number argument.
The output should be the return value of your function. Return true for prime number and false otherwise.
Examples
Input			
7	

Output
true
 
Input
8

Output
false	 	

Input
81

Output
false


Hints
You can find more information about prime numbers: https://en.wikipedia.org/wiki/Prime_number
*/