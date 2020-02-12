function sumFirstAndLastArrayElements(input){
let firstElement = Number(input.shift());
let lastElement = Number(input.pop());
let result = firstElement + lastElement;
console.log(result);

}
sumFirstAndLastArrayElements(['20', '30', '40']);
sumFirstAndLastArrayElements(['10', '17', '22', '33']);
sumFirstAndLastArrayElements(['11', '58', '69'])
;/*⦁	Sum First and Last Array Elements
Write a function that receives an array of strings and prints the sum of first and last element in that array.
Examples
Input	
['20', '30', '40']	

Output
60

Input
['10', '17', '22', '33']	


Output
43


Input
['11', '58', '69']	

Output
80
             */