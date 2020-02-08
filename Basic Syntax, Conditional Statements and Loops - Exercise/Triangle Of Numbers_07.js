function triangleOfNumbers(number){
for(let i = 1; i<= number; i++){
    console.log(`${i} `.repeat(i));
    
}
}
triangleOfNumbers(3);
triangleOfNumbers(5);
/*7.	Triangle of Numbers
Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
Constraints
n will be in the interval [1...20].
Examples
Input			
3	

Output
1
2 2 
3 3 3	 	

Input
5	

Output
1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5	 	


Input
6	

Output
1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6
*/