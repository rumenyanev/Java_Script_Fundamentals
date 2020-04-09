function convertDecimalToBinary(number){
   let result = ''; 
while(number > 0){
result = (number % 2) + result;  // this reverse result ...(result += number%2;)
number = Math.trunc(number/2);
}

console.log(result);

}
convertDecimalToBinary(2);
convertDecimalToBinary(22);
convertDecimalToBinary(222);
convertDecimalToBinary(2222);