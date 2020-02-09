function triangleArea(a,b,c){
let s = (a + b + c)/2;
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(area);

}
triangleArea(2,3.5,4);

/*Triangle Area
Write a function that calculates a triangle’s area by its 3 sides.
The input comes as three number arguments, representing one side of a triangle.
The output should be printed to the console.
Examples
Input	
2,
3.5,
4	

Output
3.4994419198



Hints
Use Heron’s formula to obtain the result.
*/