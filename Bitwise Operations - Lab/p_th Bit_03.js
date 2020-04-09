function pthBit(number,position){

    let shiftedNumber = number >> position;
    let result = shiftedNumber & 1;

    console.log(result);
}
pthBit(2145,5);
pthBit(512,0);
pthBit(111,8);
pthBit(255,7);

/*3. p-th Bit
Write a program that prints the bit at position p of a number.

Examples

Input 
2145
5
Output
1


Input
512
0
Output
0


Input
111
8
Output
0


Input
255
7
Output
1

Hints
1. Declare three variables (n, p and bitAtPositionP).
2. Read the user input from the console.
3. Find the value of the bit at position p:
a. Shift the number p times to the right (where p is the position) by using the &gt;&gt; operator. In that way
the bit we want to check will be at position 0;
b. Find the bit at position 0. Use &amp; 1 operator expression to extract the value of a bit. By using the
following formula (bitAtPositionP &amp; 1) you check whether the bit at position 0 is equal to 1 or not. If
the bit is equal to 1 the result is 1 if the bit is not equal - the result is 0;
c. Save the result in bitAtPosition1;
4. Print the result on the console.*/