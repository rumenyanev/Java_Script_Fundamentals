function wrongResultThree(...nums) {

    let numbers = [];
    let positiveNum = 0;
    let negativeNum = 0;
    let zeroNum = 0;
    let result = '';
    while (nums.length !== 0) {
        let num = nums.shift();
        numbers.push(num);
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNum++;

        }
        else if (numbers[i] < 0) {
            negativeNum++;

        } else {
            zeroNum++;

        }
    }
    if (negativeNum % 2 === 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    if (zeroNum > 0) {
        result = 'Positive';
    }


    // return result;

    console.log(result);

}

wrongResultThree(5, 12, -15);
wrongResultThree(-6, -12, 14);
wrongResultThree(-1, -2, -3);
wrongResultThree(-1, 0, 1);

/*6. Wrong Result

You are given a function, that calculate the result of numOne * numTwo * numThree (the product) is
negative or positive.
Try to do this WITHOUT multiplying the 3 numbers.
The input comes as parameters named numOne, numTwo, numThree.
Example

Input
5
12
-15

Output
Negative

Input
-6
-12
14


Output
Positive


Input
-1
-2
-3


Output
Negative


Input
-1
0
1


Output
Positive

              */