function wrongResultTwo(...nums) {

    recursiveSign(nums);

    function recursiveSign(nums, sign = 'Positive') {

        if (nums.length === 0) {

            console.log(sign);

            return;

        }

        let num = nums.pop();

        if (num === 0) {

            console.log('Positive');

            return;

        }

        if ((sign === 'Positive' && num > 0) || (sign === 'Negative' && num < 0)) {

            recursiveSign(nums, 'Positive');

        } else {

            recursiveSign(nums, 'Negative');

        }

    }

}
wrongResultTwo(5, 12, -15);
wrongResultTwo(-6, -12, 14);
wrongResultTwo(-1, -2, -3);
wrongResultTwo(-1, 0, 1);
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