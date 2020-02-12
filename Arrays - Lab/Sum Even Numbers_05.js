function sumEvenNumbers(input) {

    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }
        for (let num of input) {
            if (num % 2 === 0) {
                sum += num;
            }
        }

    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5','6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);
/*⦁	Sum Even Numbers
Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.
Examples
Input
['1','2','3','4','5','6']

Output
12

Input
['3','5','7','9']

Output
0

Input
['2','4','6','8','10']

Output
30
*/