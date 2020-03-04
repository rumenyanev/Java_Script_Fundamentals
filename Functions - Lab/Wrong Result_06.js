function wrongResult(numOne, numTwo, numThree) {
    
    let result = '';

    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Positive';

    } else if (numOne < 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Negative';

    } else if (numOne >= 0 && numTwo < 0 && numThree >= 0) {
        result = 'Negative';

    } else if (numOne > 0 && numTwo >= 0 && numThree < 0) {
        result = 'Negative';
    }
    else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';
    }

    else {
        result = 'Positive';
    } if (numOne === 0 || numTwo === 0 || numThree === 0) {
        result = 'Positive';
    }
    console.log(result);


}
wrongResult(5, 12, -15);
wrongResult(-6, -12, 14);
wrongResult(-1, -2, -3);
wrongResult(-1, 0, 1);
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