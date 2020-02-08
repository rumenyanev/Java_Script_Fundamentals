function calculator(firstNumber,operator,secondNumber){
    let result = 0;
    switch (operator){
        case'+':
        result = firstNumber + secondNumber;
        break;
        case'-':
        result = firstNumber - secondNumber;
        break;
        case'*':
        result = firstNumber * secondNumber;
        break;
        case'/':
        result = firstNumber / secondNumber;
        break;

    }
console.log(result.toFixed(2));

}
calculator(5,'+',10);
calculator(25.5,'-',3);
/*Calculator
Write a function that receives 3 parameters: a number, an operator (string) and another number. 
Print the result of the calculation on the console formatted to the second decimal point 
Examples
Input	
5,
'+',
10	

Output
15.00

Input
25.5,
'-',
3

Output
22.50
            */