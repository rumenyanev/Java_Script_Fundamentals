function houseParty(strArr) {
    let guestArray = [];
    strArr.forEach(elementArr => {
        let arr = elementArr.split(" ");
        let name = arr[0];
        if (elementArr.includes(`not`)) {
            if (guestArray.includes(name)) {
                guestArray.splice(guestArray.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestArray.push(name);
            }
        }
    });
    for (let element of guestArray) {
        console.log(element);

    }

}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);


houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);

/*⦁	House Party
Write a function that keeps track of guests that are going to a house party.
You will be given an array of strings. Each string will be one of the following:
⦁	"{name} is going!"
⦁	"{name} is not going!"
If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!").
At the end print all the guests each on a separate line.
Examples
Input
['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']

Output
John is not in the list!
Allie


Input
['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']


Output
Tom is already in the list!
Tom
Annie
Garry
Jerry
*/