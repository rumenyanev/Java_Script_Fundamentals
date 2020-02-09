
function binaryToDecimal(binary) {
    let decimal = 0;
    let binaryLenth = parseInt(binary.length - 1);
    for (let i = 0; i < binary.length; i++) {
      decimal += parseInt(binary[i]) * Math.pow(2, binaryLenth);
      binaryLenth--;
      if (binaryLenth < 0) 
      break;
    }
    console.log(decimal);
  }
  binaryToDecimal('00001001');
  binaryToDecimal('11110000');
/*Binary to Decimal
Write a function that reads an 8-bit binary number and converts it to a decimal.
The input comes as one string element, representing a binary number.
The output should be printed to the console.
Examples
Input			
00010001

Output
9		

Input
11110000	

Output
240
*/