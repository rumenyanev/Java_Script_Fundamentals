function lastKNumbersSequance(num, k) {

    let sequence = [1];

    for (let i = 1; i < num; i++) {
        let start = Math.max(0, i - k);
        let end = i ;
        let sum = 0;

        for (let j = start; j < end; j++) {
            sum += sequence[j];
        }

        sequence[i] = sum;
    }

    console.log(sequence.join(' '));
}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);

/*⦁	Last K Numbers Sequence
You are given two integers n and k. Write a function that generates and prints the following sequence:
⦁	The first element is 1.
⦁	Every following element equals the sum of the previous k elements.
⦁	The length of the sequence is n elements.

The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.
Examples
Input
6, 3

Output
1 1 2 4 7 13

Input
8, 2

Output
1 1 2 3 5 8 13 21
*/