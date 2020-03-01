function printN_thElement(array = []){
    let result = [];
let step = Number(array.slice(-1)[0]);
for(let i = 0; i < array.length-1;i+=step){
   result.push(array[i]) ;
}
console.log(result.join(' '));
}


printN_thElement(['5', '20', '31', '4', '20', '2']);
printN_thElement(['dsa', 'asd', 'test', 'test', '2']);
printN_thElement(['1', '2', '3', '4', '5', '6']);
/*Print N-th Element
Write a function that collect each element of an array, on a given step.
The input comes as array of strings. The last element is N - the step.
The collections are every element on the N-th step starting from the first one. 
If the step is "3", you need to print the 1-st, the 4-th, the 7-th … and so on, 
until you reach the end of the array. 

Then, print elements in a row, separated by single space.

Examples
Input	
['5', '20', '31', '4', '20', '2']	

Output
5 31 20

Input
['dsa', 'asd', 'test', 'test', '2']	

Output
dsa test

Input
['1', '2', '3', '4', '5', '6']	

Output
1
*/