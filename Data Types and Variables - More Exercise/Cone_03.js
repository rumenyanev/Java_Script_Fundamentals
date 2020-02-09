function cone(radius,height){
    let volume = (1/3)*Math.PI*radius*radius*height;
   
    let area = Math.PI * radius * (radius + Math.sqrt((Math.pow(radius,2) + Math.pow(height,2))));
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${area.toFixed(4)}`);
//V = (1/3)πr2h
//A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))
}
cone(3,5);
//cone(3.3,7.8);
/*Cone
Write a function to calculate a cone’s volume and total surface area by given height and radius at the base.
The input comes as two number arguments.
 The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result. 
The result should be formatted to the fourth decimal point
Examples
Input				
3,
5	

Output
volume = 47.1239
area = 83.2298		

Input
3.3,
7.8	

Output
volume = 88.9511
area = 122.0159


Hints
You can use this online tool to check your results: http://www.calculatorsoup.com/calculators/geometry-solids/cone.php
*/