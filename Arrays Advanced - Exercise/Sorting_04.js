function sorting(arr){
    let newArr = arr.sort((a, b) => a - b);
    let result = [] ;
    while (newArr.length > 0) {
        result.push(newArr.pop());
        result.push(newArr.shift());
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);


/*⦁	Sorting
Write a function that sorts an array of numbers so that the first element is the biggest one,
 the second is the smallest one, the third is the second biggest one,
  the fourth is the second smallest one and so on. 
Print the elements on one row, separated by single space.
Examples
Input	
[1, 21, 3, 52, 69, 63, 31, 2, 18, 94]	


Output
94 1 69 2 63 3 52 18 31 21
*/