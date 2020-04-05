function arrayManipulatorTwo(arr, commands) {
    let newArr = [];
    for (let el of commands) {
        let [command, index, element] = el.split(' ');
        switch (command) {
            case 'add':
                arr.splice(index, 0, +element);
                break;
            case 'addMany':
                let currentEl = 0;
                let removeFirst = el.split(' ');
                for (let i = removeFirst.length - 1; i >= 2; i--) {
                    currentEl = removeFirst[i];
                    arr.splice(index, 0, +currentEl);
                }
                break;
            case 'contains':
                console.log(arr.indexOf(+index));
                break;
            case 'remove':
                arr.splice(index, 1);
                break;
            case 'shift':
                let position = +index;
                for (let i = 0; i < position; i++) {
                    let firstEl = arr.shift();
                    arr.push(firstEl);
                }
                break;
            case 'sumPairs':
                    let sum = arr.reduce(function(total,el, index) {
                        if (index % 2 === 0) {
                            total.push(+arr[index] + (+arr[index + 1] || 0));
                        }
                        return total;
                    }, []);
                    arr = sum;
                break;
            case 'print':
                for (let el of arr) {
                    newArr.push(el);
                }
                break;
        }
    }
 
    console.log('[ ' + newArr.join(', ') + ' ]');
}
console.log(arrayManipulatorTwo([2, 2, 4, 2, 4],
    ["contains 4","add 1 4", "sumPairs", "print"]));

console.log(arrayManipulatorTwo([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', "shift 2", 'print'])); 
    
arrayManipulatorTwo([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
/*Array Manipulator
Write a function that receives an array of integers and array of string commands and executes them over the array.
The commands are as follows:
⦁	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
⦁	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
⦁	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
⦁	remove <index> – removes the element at the specified index.
⦁	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
⦁	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
⦁	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
⦁	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
⦁	print – stop receiving more commands and print the last state of the array.

Examples
Input
[1, 2, 4, 5, 6, 7],
['add 1 8', 'contains 1', 'contains 3', 'print']

Output
0
-1
[ 1, 8, 2, 4, 5, 6, 7 ]


Input
[1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']

Output
-1
[ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]


Input
[2, 2, 4, 2, 4],
["add 1 4", "sumPairs", "print"]


Output
[ 6, 6, 6 ]

*/