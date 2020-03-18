function cookingByNumbers(array) {

    let [result, op1, op2, op3, op4, op5] =
    [Number(array[0]), array[1], array[2], array[3], array[4], array[5]];

    let chop = (num) => num / 2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => ++num;
    let bake = (num) => num * 3;
    let fillet = (num) => num * 0.8;

    for (let operation of [op1, op2, op3, op4, op5]) {
        switch (operation){
            case 'chop': result = chop(result); break;
            case 'dice': result = dice(result); break;
            case 'spice': result = spice(result); break;
            case 'bake': result = bake(result); break;
            case 'fillet': result = fillet(result); break;
        }

        console.log(result);
    }
}
cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
//cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
/*    4. Cooking by Numbers
Write a JS program that receives a number and a list of five operations. 
Perform the operations in sequence by starting with the input number and using the result 
of every operation as starting point for the next. Print the result of every operation in order. 
The operations can be one of the following:
    • chop – divide the number by two
    • dice – square root of number
    • spice – add 1 to number
    • bake – multiply number by 3
    • fillet – subtract 20% from number
The input comes as an array of 6 string elements. 
The first element is your starting point and must be parsed to a number. 
The remaining 5 elements are the names of operations to be performed.
The output should be printed on the console.
Examples
Input
[32, chop, chop, chop, chop, chop]

Output
16
8
4
2
1

Input
[9, dice, spice, chop, bake, fillet]

Output
3
4
2
6
4.8
     */