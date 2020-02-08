function englishNameOfTheLastDigit(number){
 
    let lastNum = number % 10;
    let output = '';

   
    switch (lastNum) {
        case 0:
            output = 'zero';
            break;
        case 1:
            output = 'one';
            break;
        case 2:
            output = 'two';
            break;
        case 3:
            output = 'three';
            break;
        case 4:
            output = 'four';
            break;
        case 5:
            output = 'five';
            break;
        case 6:
            output = 'six';
            break;
        case 7:
            output ='seven';
            break;
        case 8:
            output = 'eight';
            break;
        case 9:
            output = 'nine';
            break;

        default:
            output = null;
            break;  
    }
    
console.log(output);

    }

englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643)
/*English Name of the Last Digit	
Write a function that returns the English name of the last digit of a given number. 
Write a program that receives a number and prints the returned value from this function.
Examples
Input	
512	

Output
two

Input
1

Output
one

Input
1643

Output
three
*/