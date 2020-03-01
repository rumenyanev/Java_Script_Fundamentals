function rotateArray(array){
    let rotations = Number(array[array.length - 1]);
    array.pop();
  
    for(let i = 0; i < rotations % array.length; i++) {
        array.unshift(array.pop());
       
        
    }
    console.log(array.join(' '));
} 


rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']	);


/*Rotate Array
Write a function that rotates an array. 
The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
The input comes as array of strings. 
The last element of the array is the amount of rotation you need to perform.
The output is the resulted array after the rotations. 
The elements should be printed on one line, separated by a single space.
Examples
Input	
['1', '2', '3', '4', '2']

Output
3 4 1 2

Input
['Banana', 'Orange', 'Coconut', 'Apple', '15']	

Output
Orange Coconut Apple Banana




Hints
Check if there is a built-in function for inserting elements at the start of the array.
*/