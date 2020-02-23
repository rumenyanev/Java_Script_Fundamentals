function mergeArraysTwo(arr1 = [], arr2 = []) {
    let resultArr = [];

    arr1.map((element, index) => {
index % 2 === 0 ? resultArr.push(Number(element)+ Number(arr2[index])) :
                   resultArr.push(element + arr2[index]);
    });
    console.log(resultArr.join(' - '));
    

}
mergeArraysTwo(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArraysTwo(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);
/*Merge Arrays
Write a function which receives two string arrays and merges them into a third array.
 If the index of the element is even, add into the third array the sum of both elements at that index
 If the index of the element is odd, add the concatenation of both elements at that index
Input
As input you will receive two string arrays.


Output
As output you should print the resulting third array, each element separated by &quot; - &quot;.
Examples

Input

['5','15','23','56','35'],
['17','22','87','36','11']


Output
22 - 1522 - 110 - 5636 - 46


Input
['13','12312','5','77','4'],
['22','333','5','122','44']


Output
35 - 12312333 - 10 - 77122 - 48
                                   */