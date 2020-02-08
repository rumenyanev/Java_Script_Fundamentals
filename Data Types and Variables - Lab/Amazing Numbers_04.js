function amazingNumbers(number){
    number = number.toString();
    let sum = 0;
    for(let i = 0; i< number.length; i++){
        sum += Number(number[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result
         ?`${number} Amazing? True`
         :`${number} Amazing? False`);
    

}
amazingNumbers(1233);
amazingNumbers(999);
/*⦁	Amazing Numbers
Write a function which as input will receive  a number.
 Check and print if it is amazing or not into the following format: 
	"{number} Amazing? {result}"
An amazing number is one that includes the digit 9 the sum of its digits. 
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
Examples
Input	
1233	

Output
1233 Amazing? True

Input
999	

Output
999 Amazing? False
*/