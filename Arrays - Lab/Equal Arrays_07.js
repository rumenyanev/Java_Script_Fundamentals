function equalArrays(arr1, arr2) {
    let sum = 0;
    for (let index in arr1) {
        let firstElement = arr1[index];
        let secondElement = arr2[index];
        if (firstElement !== secondElement) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;
        }
        sum += Number(firstElement);
    }
 
    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10'])

/*⦁	Equal Arrays
Write a program which receives two string arrays and print on the console whether they are identical or NOT.
Arrays are identical if their elements are equal. If the arrays are identical find the sum of the first one and print on the console following message:
'Arrays are identical. Sum: {sum}'
 If the arrays are NOT identical find the first index where the arrays differ and print on the console following message:
 'Arrays are not identical. Found difference at {index} index'.
Examples
Input
['10','20','30'], ['10','20','30']

Output
Arrays are identical. Sum: 60


Input
['1','2','3','4','5'], ['1','2','4','4','5']

Output
Arrays are not identical. Found difference at 2 index


Input
['1'], ['10']

Output
Arrays are not identical. Found difference at 0 index
*/