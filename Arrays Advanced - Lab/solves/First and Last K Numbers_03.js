function firstAndLastKNumbers(array){

    let k = array.shift(); 
    console.log(array.slice(0,k).join(' '));
    console.log(array.slice(array.length-k,array.length).join(' '));
    

}
firstAndLastKNumbers([2, 
    7, 8, 9]);


firstAndLastKNumbers([3,
 6, 7, 8, 9]);

/*⦁	First and Last K Numbers
Write a function that prints the first k and the last k elements from an array of numbers.
The input comes as array of number elements. The first element represents the number k, 
all other elements are from the array that needs to be processed.
The output is printed on the console on two lines. 
On the first line print the first k elements, separated by space. 
On the second line print the last k elements, separated by space.
Examples
Input			
[2, 
7, 8, 9]	

Output
7 8
8 9	 	

Input
[3,
 6, 7, 8, 9]	
 
 
 Output
6 7 8
7 8 9


Hints
⦁	Use slice() to split the array into two parts
*/