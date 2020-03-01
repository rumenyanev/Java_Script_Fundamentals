function nonDecreasingSubsequenceThree(array = []){
    let max = array[0];
    let result = array.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));
}

nonDecreasingSubsequenceThree([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequenceThree([1, 2, 3, 4]);
nonDecreasingSubsequenceThree([20, 3, 2, 15, 6, 1]);

/*Non-Decreasing Subsequence

Write a function that extracts only those numbers that form a non-decreasing subsequence. 
In other words, you start from the first element and continue to the end of the given array of numbers. 
Any number which is LESS THAN the current biggest one is ignored,
 alternatively if it’s equal or higher than the current biggest one you 
 set it as the current biggest one and you continue to the next number. 
Input
The input comes as array of numbers.
Output
The output is the processed array after the filtration, 
which should be a non-decreasing subsequence. 
The elements should be printed on one line, separated by a single space.
Examples
Input	
[ 1, 3, 8, 4, 10, 12, 3, 2, 24]	

Output
1 3 8 10 12 24


Input
[ 1, 2, 3, 4]	

Output
1 2 3 4

Input
[ 20, 3, 2, 15, 6, 1]	

Output
20


Hints
The Array.filter() built-in function might help you a lot with this problem.
*/
