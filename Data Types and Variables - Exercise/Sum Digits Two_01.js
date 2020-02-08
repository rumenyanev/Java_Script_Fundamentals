function sumDigitsTwo(number){

    let sum = 0;
    let num = number.toString();
    for(let i = 0; i <num.length ; i++){
        let currentNumber = Number(num[i]);
        sum += currentNumber;
    }
    console.log(sum);
    
}
sumDigitsTwo(245678);
sumDigitsTwo(97561);
sumDigitsTwo(543);
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