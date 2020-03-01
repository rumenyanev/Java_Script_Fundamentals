
function addAndRemove(input = []) {
    let inputResult = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'remove') {
            inputResult.pop();
        } else if (input[i] === 'add') {
            inputResult.push(i + 1);
        }
    }
    if (inputResult.length === 0) {

        console.log('Empty');
    } else {
        console.log(inputResult.join(' '));
    }

}


addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
/*Add and Remove
Write a function that adds and removes numbers to/from an array.
You will receive a command which can either be "add" or "remove".
The initial number is 1.
Each input command should increase that number, regardless of what it is.
Upon receiving an "add" command you should add the current number to your array.
 Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
Input
The input comes as array of strings. Each element holds a command.
Output
Print elements in a row, separated by single space. In case of an empty array, just print "Empty".
Examples

Input
['add', 'add', 'add', 'add']

Output
1 2 3 4

Input
['add', 'add', 'remove', 'add', 'add']

Output
1 4 5


Input
['remove', 'remove', 'remove']

Output
Empty
*/