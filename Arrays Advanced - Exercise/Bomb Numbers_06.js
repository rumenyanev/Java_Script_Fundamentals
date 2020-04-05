function bombNumbers(arr,bomb){
let resultArr = arr.slice(0);

while(resultArr.includes(bomb[0])){
    let bombIndex = resultArr.indexOf(bomb[0]);
    let startIndex = Math.max(bombIndex - bomb[1],0);
    resultArr.splice(bombIndex,bomb[1]+1);
    resultArr.splice(startIndex,bomb[1]);
}

return resultArr.reduce((acc,curr)=>{
acc += curr;
return acc;

},0);

}
console.log(

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
            [4, 2]));

            console.log(
            
bombNumbers([1, 4, 4, 2, 8, 9, 1],
                [9, 3]));
           console.log(
           
bombNumbers([1, 7, 7, 1, 2, 3],
             [7, 1]));     


             console.log(
             
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
          [2, 1]));
/*⦁	Bomb Numbers
Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according to its power
 his neighbors from left and right. 
 Detonations are performed from left to right and all detonated numbers disappear. 
The input contains two arrays of numbers. 
The first contains the initial sequence and the second contains the special bomb number and it's power.
The output is the sum of the remaining elements in the sequence.
Examples
Input		
[1, 2, 2, 4, 2, 2, 2, 9],
[4, 2]	

Output
12	


Comments
Special number is 4 with power 2. After detontaion we are left with the sequence [1, 2, 9] with sum 12.

Input
[1, 4, 4, 2, 8, 9, 1],
[9, 3]

Output
5	


Comments
Special number is 9 with power 3. 
After detontaion we are left with the sequence [1, 4] with sum 5. 
Since the 9 has only 1 neighbour to the right we remove just it (one number instead of 3).


Input
[1, 7, 7, 1, 2, 3],
[7, 1]	

Output
6	


Comments
Detonations are performed from left to right. 
We could not detonate the second occurance of 7 because its already destroyed by the first occurance. 
The numbers [1, 2, 3] survive. Their sum is 6.

Input
[1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
[2, 1]	


Output
4	


Comments
The red and yellow numbers disappear in two sequential detonations. The result is the sequence [1, 1, 1, 1]. Sum = 4.
*/