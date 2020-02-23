function arrayRotationThree(arr = [], numOfRotations) {
    let resultArr = arr.slice();
       for(let i = 0; i< numOfRotations % arr.length; i++) {

                resultArr.shift();
                resultArr.push(arr[i]);
            }
        
    
console.log(resultArr.join(' '));
}
arrayRotationThree([51, 47, 32, 61, 21], 2);
arrayRotationThree([32, 21, 61, 1], 4);
arrayRotationThree([2, 4, 15, 31], 5);
/*Array Rotation
Write a function that receives an array and number of rotations you have to perform (first element goes at the
end).
Output
Print the resulting array elements separated my single space.
Examples

Input
[51, 47, 32, 61, 21], 2

Output
32 61 21 51 47

Input
[32, 21, 61, 1], 4

Output
32 21 61 1


Input
[2, 4, 15, 31], 5

Output
4 15 31 2
              */
