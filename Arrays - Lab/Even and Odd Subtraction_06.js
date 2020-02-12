function evenAndOddSubtraction(input) {
    let sumEven = 0;
    let sumOdd = 0;
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }
    for (let num of input) {
        if (num % 2 === 0) {
            sumEven += num;
        }else{
            sumOdd += num;
        }
    }result = sumEven - sumOdd;

    console.log(result);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10])
/*⦁	Even and Odd Subtraction
Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
Examples
Input
[1,2,3,4,5,6]

Output
3

Comments
2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3


Input
[3,5,7,9]


Output
-24

Input
[2,4,6,8,10]


Output
30
           */