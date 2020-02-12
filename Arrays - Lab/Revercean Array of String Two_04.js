function reverseAnArrayOfStringsTwo(stringArr){
stringArr.reverse();
let result = '';
for(let element of stringArr){
  result += element + ' ' ;
    
}
console.log(result);

}
reverseAnArrayOfStringsTwo(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStringsTwo(['abc', 'def', 'hig', 'klm', 'nop']);
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