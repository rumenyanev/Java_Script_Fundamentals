function binaryDigitsCount(number,digit){
let result = number.toString(2);
let count = 0;
for(let i = 0;i<result.length; i++){
if(result[i]== digit){
    count++;
}
}

console.log(count);

}
binaryDigitsCount(20,0);
binaryDigitsCount(15,1);
binaryDigitsCount(10,0)

/*1. Binary Digits Count
You are given a positive integer number and one binary digit B (0 or 1). 
Your task is to write a program that finds the
number of binary digits (B) in a number.
Examples
Input  
20
0

Output
3 

Comments
20 -> 10100

Input
15
1

Output
4 


Comments
15 -> 1111


Input
10
0

Output
2 

Comments
10 -> 1010

Hints
1. Declare two variables (n and b).
2. Read the user input from the console.
3. Convert the n into binary representation (you can use built-in method).
4. Count the b digit in the binary number.
5. Print the result on the console.*/