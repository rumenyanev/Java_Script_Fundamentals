function maxNumber(arr){
   
    let resultArr = [];
    while(arr.length !== 0) {
        let [currentNum, maxNum] = [arr.shift(), Math.max(...arr)]
        if(currentNum > maxNum) resultArr.push(currentNum);
   }
   console.log(resultArr.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
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
