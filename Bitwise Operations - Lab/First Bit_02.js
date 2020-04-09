function firstBit(number) {
    let shiftedNumber = number >> 1;
    let result = shiftedNumber & 1;

    console.log(result);


}
firstBit(2);
firstBit(51);
firstBit(13);
firstBit(24);

/*2. First Bit
Write a program that prints the bit at position 1 of a number.
Examples
Input
2


Output
1

Input
51


Output
1


Input
13

Output
0

Input
24

Output
0
Hints
1. Declare two variables (n and bitAtPosition1).
2. Read the user input from the console.
3. Find the value of the bit at position 1 (position 1 is the second bit from right to left: [7, 6, 5, 4, 3, 2, 1, 0]):
a. Shift the number n times to the right (where n is the position, in this case it is 1) by using the >> operator.
In that way the bit we want to check will be at position 0;
b. Find the bit at position 0. Use &amp; 1 operator expression to extract the value of a bit. By using the
following formulae () you check whether the bit at position 0 is equal to 1 or not. If the bit is equal
to 1 the result is 1 if the bit is not equal - the result is 0;
c. Save the result in bitAtPosition1;
4. Print the result on the console.
 */