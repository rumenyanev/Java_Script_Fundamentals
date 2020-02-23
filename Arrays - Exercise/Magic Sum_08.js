function magicSum(array, number) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] + array[j] === number && i != j) {
                console.log(`${array[i]} ${array[j]}`);

            }
        }
    }

}
magicSum([1, 7, 6, 2, 19, 23], 8);
//magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6], 6);
/*Magic Sum
Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.
Examples

Input
[1, 7, 6, 2, 19, 23],8


Output
1 7
6 2


Input
[14, 20, 60, 13, 7, 19, 8],27


Output
14 13
20 7
19 8


Input
[1, 2, 3, 4, 5, 6],6


Output
1 5
2 4

                    */