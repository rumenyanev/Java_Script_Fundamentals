function negativeOrPositiveNumbers(array) {
    let newArray = [];
    function createNewArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (array[i] < 0) {
                newArray.unshift(array[i]);
            } else  {
                newArray.push(array[i]);
            } 
        }
        return newArray;
    }
    createNewArray(array);
    function printArray(createNewArray) {
       
        for (let i = 0; i < newArray.length; i++) {
            console.log(newArray[i]);
        }
    } 
    printArray(createNewArray);
}
negativeOrPositiveNumbers([7, -2, 8, 9]);
negativeOrPositiveNumbers([3, -2, 0, -1]);

/*⦁	Negative / Positive Numbers
Write a function that processes the elements in an array one by one and produces a new array.
Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line.
Examples
Input
[7, -2, 8, 9]

Output
-2
7
8
9

Input
[3, -2, 0, -1]

Output
-1
-2
3
0


Hints
⦁	Use unshift() to add an element at the first position
⦁	Use push() to add an element at the last position
*/