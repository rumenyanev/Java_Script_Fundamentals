function multiplicationTable(number){
    for(let i = 1; i <= 10;i++){
        console.log(`${number} X ${i} = ${number * i}`);
    }
}
multiplicationTable(5);
multiplicationTable(2);
/*Multiplication Table
You will receive a number as an input from the console. 
Print the 10 times table for this number. See the examples below for more information.
Output
Print every row of the table in the following format:
{number} X {times} = {product}
Constraints
The number will be an integer will be in the interval [1…100]
Examples
Input	
5	

Output
5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
5 X 8 = 40
5 X 9 = 45
5 X 10 = 50		

Input
2	

Output
2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
2 X 10 = 20
*/