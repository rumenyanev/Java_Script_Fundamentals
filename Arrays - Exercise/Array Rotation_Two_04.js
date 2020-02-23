function arrayRotationTwo(arr,numOfRotations){

let copyArr = arr.slice();  // slice() = copy arr
                            // splice() =  delete or add element of copyArr
for(let i = 0; i< numOfRotations;i++){
    let element = copyArr.shift();
    copyArr.push(element);
}
console.log(copyArr.join(' '));

}
arrayRotationTwo([51, 47, 32, 61, 21], 2);
arrayRotationTwo([32, 21, 61, 1], 4);
arrayRotationTwo([2, 4, 15, 31], 5);
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
