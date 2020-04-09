function triBitSwitch(number,position){
    let mask = 7 << position;
 
    let result = number ^mask;
    console.log(result);
    


}
triBitSwitch(1234,7);
triBitSwitch(44444,4);
/*6. * Tri-bit Switch
Write a program that inverts the 3 bits from position p to the left with their opposites (e.g. 111 -> 000, 101 -> 010)
in 32-bit number. Print the resulting number on the console.



Examples
Input  
1234
7
Output
1874


Details
00000000000000000000010011010010
00000000000000000000011101010010

Input
44444
4

Output
44524

Details
00000000000000001010110110011100
00000000000000001010110111101100

Hints
1. Shift the number 7 (the number 7 has the bits 111 which we use to get 3 consecutive values), p times to the
left (where p is the position) by using the << operator. In that way the 3 bits we want to invert will be at
position p. Save the resulting value in mask;
2. Use ^ mask operator expression to invert the values of the three bits starting from position p. By using the
following formulae (n ^ mask) you copy all the bits of the number and you invert the bits at position p, p+1
and p+2;
3. Save the result in result;*/