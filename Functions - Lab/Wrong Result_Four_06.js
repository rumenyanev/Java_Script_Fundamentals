function solve(a, b, c) {
    if (a >= 0 && b >= 0 && c >= 0 ||
        a < 0 && b < 0 && c >= 0 ||
        a < 0 && b >= 0 && c < 0 ||
        a >= 0 && b < 0 && c < 0 ||
        a < 0 && b == 0 && c >= 0 )
        {

        console.log('Positive')
    }
    else {
        console.log('Negative');
    }
}
solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
solve(-1, 0, 1);

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