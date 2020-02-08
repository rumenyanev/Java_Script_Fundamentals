function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum = parseInt(sum + num % 10);
        num = num / 10;
    
    }
console.log(sum);

}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
/*Sum Digits
Write a function which will be given a single number.
 Your task is to find the sum of its digits.
Examples
Input	
245678
	
Output
32

Input
97561	

Output
28


Input
543

Output
12
*/