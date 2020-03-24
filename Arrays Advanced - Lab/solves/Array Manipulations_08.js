function arrayManipulations(commands) {
    let arrNums = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum]
            = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                arrNums.push(firstNum);
                break;
                case "Remove":
                arrNums.splice(firstNum,1);
                break;
                case "RemoveAt":
                    
                arrNums.splice(firstNum, 1);
                break;
                case "Insert":
                arrNums.splice(secondNum, 0, firstNum)
                
                break;
        }
    }

    console.log(arrNums.join(' '));

}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);

/*⦁	Array Manipulations
Write a function that manipulates an array of numbers.
⦁	Add {number}: add a number to the end of the array
⦁	Remove {number}: remove number from the array
⦁	RemoveAt {index}: removes number at a given index
⦁	Insert {number} {index}: inserts a number at a given index
Note: All the indices will be valid!
Print the final state of the array (separated by single space).
The input comes as array of strings. First element will be a string containing the array to manipulate.
Every other command you receive will also be a string.
The output is the manipulated array printed on the console on a single line, separated by space.

Example
Input
['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']

Output
4 53 6 8 43 3


Hints
First we receive the whole input:

⦁	After that we take the first element from the commands and convert it to an array of numbers:

⦁	Then we loop through the commands array and obtain each element from the command and cast both numbers. This event is called ⦁	destr⦁	u⦁	cturing:

⦁	We check if the command is equal to one of the given: "Add", "Remove", etc.

⦁	To add element at the end, use push()

⦁	To remove all occurrences of a particular element from the array, you can use filter()

⦁	To remove or insert at an index, you can use splice()

Note: Removing elements with splice() receives two parameters:
⦁	Start Index
⦁	Count of elements you want to remove
Note: Inserting elements with splice() receives three parameters:
⦁	Start Index
⦁	Count of elements to remove – if none enter 0
⦁	Elements to insert at that position*/