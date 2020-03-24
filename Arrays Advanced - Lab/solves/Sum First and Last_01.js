function sumFirstAndLast(array) {

    let firstElement = +array[0];
    let lastElement = +array[array.length - 1];
    let result = firstElement + lastElement;
    
    return result;

}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);

/*⦁	Sum First Last
Write a function that calculates and prints the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.
Examples
Input
['20', '30', '40']

Output
60

Input
['5', '10']

Output
15
*/