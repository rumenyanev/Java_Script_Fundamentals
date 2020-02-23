function addAndSubtract(numbers){

   let sumOriginalArr = 0;
   let sumModfiedArr = 0;
   let modifiedArr = [];
   for(let i = 0; i< numbers.length ; i++){
       sumOriginalArr += numbers[i];
       if(numbers[i] % 2 === 0){
           numbers[i]+= i;
           sumModfiedArr += numbers[i];
           modifiedArr.push(numbers[i]);
       }else{
           numbers[i]-= i;
           sumModfiedArr += numbers[i];
           modifiedArr.push(numbers[i]);
       }
   }
console.log(modifiedArr);
console.log(sumOriginalArr);
console.log(sumModfiedArr);

}
addAndSubtract([5,15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
/*Add or Subtract
Write a function, which changes the value of odd and even numbers in an array of numbers.
 If the number is even - add to its value its index position
 If the number is odd - subtract to its value its index position
Output
On the first line print the newly modified array, 
on the second line print the sum of numbers from the original
array, on the third line print the sum of numbers from the modified array.
Examples

Input 

[5, 15, 23, 56, 35]


Output
[ 5, 14, 21, 59, 31 ]
134
130


Input
[-5, 11, 3, 0, 2]


Output
[ -5, 10, 1, 3, 6 ]
11
15  
         */