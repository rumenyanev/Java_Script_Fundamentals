function simpleCalculator(firstOperand, secondOperand, operationName) {
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  let operation;
  switch (operationName) {
    case 'multiply':
      return multiply(firstOperand, secondOperand);
      break;
    case 'divide':
      return divide(firstOperand, secondOperand);
      break;
    case 'add':
      return add(firstOperand, secondOperand);
      break;
    case 'subtract':
      return subtract(firstOperand, secondOperand)
      break;
  }
}
  let result = simpleCalculator(12,19,'add');
  console.log(result);
  
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract')
/*5. Simple Calculator
Write a function that receives three parameters and write an arrow function that calculate result depending of
operator. Operator can be 'multiply', 'divide', 'add', 'subtract'.
Input
The input comes as parameters named numOne, numTwo, operator.
Examples
Input
5
5
'multiply'


Output
25


Input
40
8
'divide'

Output
5


Input
12
19
'add'


Output
31


Input
50
13
'subtract'


Output
37

*/