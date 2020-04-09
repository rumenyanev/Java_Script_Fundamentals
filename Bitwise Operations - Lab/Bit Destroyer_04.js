function bitDestroyer(number,position){
let shiftedNumber = 1  << position;
let mask = ~shiftedNumber;
let result = number & mask;

console.log(result);

}
bitDestroyer(1313,5);
bitDestroyer(231,2);
bitDestroyer(111,6)

/*4. Bit Destroyer
Write a program that sets the bit at position p to 0. 
Print the resulting number.
Examples
Input 
1313
5
Output
1281

Input
231
2
Output
227


Input
111
6
Output
47

 Hints
1. Declare four variables (n, p, mask and newNumber).
2. Read the user input from the console.
3. Set the value of the bit at position p to 0:
a. Shift the number 1, p times to the left (where p is the position) by using the << operator. 
In that way the bit we want to delete will be at position p.
 Save the resulting value in mask;
b. Invert the mask (e.g. we move the number 1, 3 times and we get 00001000, after inverting we get
11110111).
c. Use & mask operator expression to set the value of a number to 0. By using the following formulae
(n & mask) you copy all the bits of the number and you set the bit at position p to 0;
d. Save the result in newNumber;
4. Print the result on the console.      */