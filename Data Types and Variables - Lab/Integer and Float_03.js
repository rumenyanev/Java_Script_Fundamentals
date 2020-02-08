function integerAndFloat(firstNum,secondNum,thirdNum){
let sum = firstNum + secondNum + thirdNum;
sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
console.log(sum);

}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
/*You will receive 3 numbers. 
Your task is to find their sum and print it to the console with the addition 
" - {type of the number (Integer or Float)}":
Examples
Input	
9, 100, 1.1	

Output
110.1 - Float

Input
100, 200, 303	

Output
603 - Integer
*/