function maxNumberTwo(arr) {
    let resultArr = [];
    

    for (let i = 0; i < arr.length; i++) {
        let isTopInteger = true;
        let currentElement = arr[i];
        let rightElementsArray = arr.slice(i + 1);

        for (let j = 0; j < rightElementsArray.length; j++) {
            if (currentElement <= rightElementsArray[j]) {
                isTopInteger = false;
                    break;
            }
        }
        if (isTopInteger === true) {
            resultArr.push(currentElement);
        }
    }
    console.log(resultArr.join(' '));
    
}
maxNumberTwo([1, 4, 3, 2]);
maxNumberTwo([14, 24, 3, 19, 15, 17]);
maxNumberTwo([41, 41, 34, 20]);
maxNumberTwo([27, 19, 42, 2, 13, 45, 48]);
/*Max Number
Write a function to find all the top integers in an array.
A top integer is an integer which is bigger than all the elements to its right.
Output
Print all top integers on the console, separated by single space.
Examples

Input
[1, 4, 3, 2]

Output
4 3 2

Input
[14, 24, 3, 19, 15, 17]

Output
24 19 17

Input
[41, 41, 34, 20]

Output
41 34 20


Input
[27, 19, 42, 2, 13, 45, 48]

Output
48

             */
