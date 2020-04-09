function convertFromBinaryToDecimal(binaryNumber) {

    let sum = 0;
    let position = 0;
    for (let i = binaryNumber.length -1; i >= 0; i--) {
        let currentNumber = Number(binaryNumber[i]);
        sum += currentNumber * (2 ** position);        //Math.pow(2,position);

        position++;
    }
    console.log(sum);
    
}

convertFromBinaryToDecimal('1010');