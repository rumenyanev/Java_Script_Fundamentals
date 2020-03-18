function modifyAverage(num){
    
    let numToManipulate = num.toString();
    let average = getAverage(numToManipulate);

    while (average <= 5) {
        numToManipulate = addNine(numToManipulate);
        average = getAverage(numToManipulate);
    }

    console.log(numToManipulate);

    function getAverage(numToStr) {
        let result = 0;

        for (let i = 0; i < numToStr.length; i++) {
            result += Number(numToStr[i]);
        }

        return result / numToStr.length;
    }

    function addNine(numAsStr) {
        return numAsStr + '9';
    }
}

modifyAverage(101);
modifyAverage(5835);
/*
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
*/*/