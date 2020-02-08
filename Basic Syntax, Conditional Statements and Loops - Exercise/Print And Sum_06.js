function printAndSum(startNumber, endNumber) {

    let sum = 0;
    let result = '';
    for (let i = startNumber; i <= endNumber; i++) {
        result +=(i+' ');
        sum += i;

    }
    console.log(result);
    
    console.log(`Sum: ${sum}`);

}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
/*Print and Sum
Write a function to display numbers from given start to given end and their sum.
The input comes as two number parameters.

Examples
Input
5, 10

Output
5 6 7 8 9 10
Sum: 45

Input
0, 26

Output
0 1 2 … 26
Sum: 351

Input
50, 60

Output
50 51 52 53 54 55 56 57 58 59 60
Sum: 605
*/