function numberModification(number) {

    const getDigitsAverage = num => num.toString().split('').map(Number).reduce((a, b) => a + b, 0) / num.toString().length;

    while (getDigitsAverage(number) < 5) number += '9';

    console.log(number);

}

numberModification(101);
numberModification(5835);

/*Number Modification
Write a JS program that modifies a number until the average value of all its digits is higher than 5.
To modify the number, your program should append a 9 to the end of the number,
 when the average value of all its digits is higher than 5 the program should stop appending.
 If the number’s average value of all its digits is already higher than 5, no appending should be done.
The input is a single number.
The output should consist of a single number - the final modified number which has an average value of all its digits higher than 5.
The output should be printed on the console.

Constraints
The input number will consist of no more than 6 digits.
The input will be a valid number (there will be no leading zeroes).
Examples
Input
101

Output
1019999

Input
5835

Output
5835
*/