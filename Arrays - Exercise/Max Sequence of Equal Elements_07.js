function maxSequenceOfEqualElements(inputArray){
    
let maxCount = 0;
let maxIndex = 0;
for (let i = 0; i < inputArray.length; i++) {
let currentCount = 0;
for (let j = i; j < inputArray.length; j++) {
    if (inputArray[i] == inputArray[j]) {
        currentCount++;
        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxIndex = i;
        }
    } else {
        break;

    }
}
}let result = '';
for (let i = 0; i < maxCount; i++) {
    if(i === maxCount-1){
        result+=(inputArray[i + maxIndex]);
        break;
    }
     result+= (inputArray[i + maxIndex]+ " ");

}
console.log(result);

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3] );
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
/*Max Sequence of Equal Elements
Write a function that finds the longest sequence of equal elements in an array of numbers.
If several longest sequences exist, print the leftmost one.
Examples

Input 
[2, 1, 1, 2, 3, 3, 2, 2, 2, 1] 

Output
2 2 2

Input
[1, 1, 1, 2, 3, 1, 3, 3] 

Output
1 1 1

Input
[4, 4, 4, 4] 

Output
4 4 4 4

Input
[0, 1, 1, 5, 2, 2, 6, 3, 3] 
Output
1 1
            */