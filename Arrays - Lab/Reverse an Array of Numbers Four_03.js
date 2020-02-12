function reverseAnArrayOfNumbersFour(index, inputArr) {

    let outputArr = [];
    for (let i = 0; i < index; i++) {

        outputArr[index - 1 - i] = inputArr[i]; // index 2 - 0 = 2;(last index),2 -1 = 1;(middle index); 2 - 2 = 0; (first index) 
                                                // index = 3; (3 - 1) = 2; -> (2 - i)/i = 0/ = 2;  first iteration
                                                //                            (2 - i)/i = 1/ = 1;  second iteration
                                                //                            (2 - i)/i = 2/ = 0;  third iteration
    }
    console.log(outputArr.join(' '));
}
reverseAnArrayOfNumbersFour(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbersFour(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbersFour(2, [66, 43, 75, 89, 47])
/*⦁	Reverse an Array of Numbers
Write a program which receives a number n and an array of elements.
Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.
Examples
Input
3, [10, 20, 30, 40, 50]

Output
30 20 10

Input
4, [-1, 20, 99, 5]

Output
5 99 20 -1

Input
2, [66, 43, 75, 89, 47]

Output
43 66
*/