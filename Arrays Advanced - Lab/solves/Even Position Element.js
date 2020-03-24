function evenPositionElement(array){
let newArray = [];
for(let i = 0; i < array.length; i++){
    if(i % 2 == 0){
        newArray.push(array[i]);
    }
}
console.log(newArray.join(' '));

}
evenPositionElement(['20', '30', '40']);
evenPositionElement(['5', '10']	)
/*Even Position Element
Write a JS function that finds the elements at even positions in an array.
The input comes as array of string elements.
The output is the return value of your function.
 Collect all elements in a string, separated by space.
Examples
Input	
['20', '30', '40']


Output
20 40	 	

Input
['5', '10']	

Output
5
*/