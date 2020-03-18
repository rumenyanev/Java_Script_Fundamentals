function numberModification(number) {
    let sum = 0;
    let numToString = number.toString();
    let modifiedNumber = number;
    let averageSum = 0;

   function getSum(number){
    for (let i = 0; i <= numToString.length; i++) {
        let num = number % 10;
        number = number/10;
        sum += (Math.round(num)); 
    } 
    return Number(sum); 
}
let sumAvg = getSum(number);
function getAverage(sumAvg){
   
    for (let i = 0; i <= numToString.length; i++) {
        let avg = (sum/numToString.length);
         averageSum += avg;
         if(averageSum <= 5){
            modifiedNumber +='9';
            }
        }
        return modifiedNumber;
        }

console.log(getAverage(sumAvg));

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