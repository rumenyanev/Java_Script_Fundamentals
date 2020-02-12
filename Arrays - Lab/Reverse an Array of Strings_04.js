function reverseAnArrayOfStrings(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result.join(" ", result));

   
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
/*⦁	Reverse an Array of Strings
Write a program which receives an array of strings (space separated values).
Your task is to reverse it and print its elements. Swap elements.
Examples
Input
['a', 'b', 'c', 'd', 'e']

Output
e d c b a

Comments
The first element should be last, and the last element should be first.

Input
['abc', 'def', 'hig', 'klm', 'nop']

Output
nop klm hig def abc


Input
['33', '123', '0', 'dd']


dd 0 123 33
                 */