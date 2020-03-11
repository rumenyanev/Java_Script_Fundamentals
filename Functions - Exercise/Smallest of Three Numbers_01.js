function smallestOfThreeNumbers(a, b, c) {
    let result = 0;
    if (a < b && a < c) {
        result = a;
    } else if (b < c && b < c) {
        result = b;
    }
    else {
        result = c;
    }
 
    //return result;
    console.log(result);


}
smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);

/*Smallest of Three Numbers
Write a function which receives three integer numbers to print the smallest.
 Use appropriate name for the function.
Examples
Input
2,
5,
3

Output
2


Input
600,
342,
123

Output
123

Input
25,
21,
4


Output
4
*/