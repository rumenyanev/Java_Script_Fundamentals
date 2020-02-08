function rounding(number,precision){
    if(precision > 15){
        precision = 15;
    }
    console.log(parseFloat(number.toFixed(precision))); // parseFloat cut zero in value
    

}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);
/*2.	Rounding
Write a JS function that rounds numbers to specific precision.
The input comes as two numbers. 
The first value is the number to be rounded and the second is the precision (significant decimal places). 
If a precision is passed, that is more than 15 it should automatically be reduced to 15.
Remove trailing zeroes, if any (you can use parseFloat())
The output should be printed to the console. Do not print insignificant decimals.

Examples
Input	
3.1415926535897932384626433832795,2	

Output
3.14		

Input
10.5,3	

Output
10.5
*/