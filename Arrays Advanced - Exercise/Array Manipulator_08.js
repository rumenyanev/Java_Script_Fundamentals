function arrayManipulator(arrIntegers,arrCommands ) {
    let arrNumbers = arrIntegers.splice(0);
    let commandArr = arrCommands.splice(0);
   
    let command = commandArr.shift();

    function add(arr, element) {
        arr.splice(Number(element[0]), 0, Number(element[1]));
        return arr;
    }
    function addMany(arr, element) {
        let index = element.shift();
        arr.splice(index++, 0,...element);
        return arr;
    }
    function contains(arr, index) {
        return arr.indexOf(index);
    }
    function remove(arr, index) {
        arr.splice(index, 1);
        return arr;
    }
    function shift(arr, command) {
        let position = Number(command[0])
        while (position > 0) {
            let el = arr.shift();
            arr.push(el);
            position--;
        }
        return arr;
    }
    function sumPairs(arr) { 
        let result = []; 
        while (arr.length > 0) {
            let a = Number(arr.shift()||0); // if array with odd elements : return 0...[ 1, 8, 2, 4, 5, 6, 7 ] ... 7 + undefind ....7 + 0
            let b = Number(arr.shift()||0);
            result.push(Number(a + b));
        }
        return result; 
       
    }
    function print(arr){
        for(let el of arr){
            console.log(el);
            
        }
    }
    while (commandArr.length > 0) {
        let currentCommand = command.split(' ');
        switch (currentCommand.shift()) {
            case 'add':
                arrNumbers = add(arrNumbers, currentCommand);
                break;
            case 'addMany':
                arrNumbers = addMany(arrNumbers, currentCommand);
                break;
            case 'contains':
                console.log(contains(arrNumbers, Number(currentCommand[0])));
                break;
            case 'remove':
                arrNumbers = remove(arrNumbers, currentCommand);
                break;
            case 'shift':
                arrNumbers = shift(arrNumbers, currentCommand);
                break;
                case'sumPairs':
                arrNumbers = sumPairs(arrNumbers);
                break;
                case'print':
                arrNumbers = print(arrNumbers);
                break;
        }


        command = commandArr.shift();
    }

    console.log(
     `[ ${arrNumbers.join(', ')} ]`); 
 
}

arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]);

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3','print']); 

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

/*Array Manipulator
Write a function that receives an array of integers and array of string commands and executes them over the array.
The commands are as follows:
⦁	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
⦁	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
⦁	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
⦁	remove <index> – removes the element at the specified index.
⦁	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
⦁	        For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
⦁	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
⦁	       For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
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