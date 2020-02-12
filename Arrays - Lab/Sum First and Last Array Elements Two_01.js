function sumFirstAndLastArrayElementsTwo(input) {
    console.log(Number(input[0]) + Number(input[input.length - 1]));
}
sumFirstAndLastArrayElementsTwo(['20', '30', '40']);
sumFirstAndLastArrayElementsTwo(['10', '17', '22', '33']);
sumFirstAndLastArrayElementsTwo(['11', '58', '69'])
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