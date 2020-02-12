function condenseArrayToNumber(arrNumbers) {
    let numbers = arrNumbers;

    while (numbers.length > 1) {
        let condenseArr = [];
        for (let i = 0; i < numbers.length - 1; i++) {
            condenseArr.push(numbers[i] + numbers[i + 1]);
        }
        numbers = condenseArr;
    }
    console.log(numbers[0]);

}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1])
/*⦁	Condense Array to Number
Write a program which receives an array of numbers and condense them
by summing adjacent couples of elements until a single number is obtained.
Examples
For example, if we have 3 elements [2, 10, 3],
we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.
Input
[2,10,3]

Output
25

Comments
2 10 3  2+10 10+3  12 13  12 + 13  25

Input
[5,0,4,1,2]

Output
35

Comments
5 0 4 1 2  5+0 0+4 4+1 1+2  5 4 5 3  5+4 4+5 5+3  9 9 8  9+9 9+8  18 17  18+17 = 35

Input
[1]

Output
1

Comments
1 is already condensed to number
Hints
While we have more than one element in the array nums[], repeat the following:
⦁	Allocate a new array condensed[] of size nums.Length-1.
⦁	Sum the numbers from nums[] to condensed[]:
⦁	condensed[i] = nums[i] + nums[i+1]
⦁	nums[] = condensed[]
The process is illustrated below:
 	 */