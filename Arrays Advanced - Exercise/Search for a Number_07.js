function searchForANumber(firstArr,secondArr){
    let numbersToTake = secondArr[0];
    let numbersToDelete = secondArr[1];
    let numberToSearch = secondArr[2];

    let resultArr = firstArr.splice(0,numbersToTake);    
    resultArr.splice(0,numbersToDelete);
    let counter = 0;
    for(let i = 0; i<resultArr.length;i++){
        if(resultArr[i]=== numberToSearch){
            counter++;
        }
    }
    console.log(`Number ${numberToSearch} occurs ${counter} times.`);
    


}
searchForANumber([5, 2, 3, 4, 1, 6],
                 [5, 2, 3]);


/*⦁	Search for a Number
You will receive two arrays of integers. The second array is contains exactly three numbers. 
First number represents the number of elements you have to take from the first array (starting from the first one).
Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
Third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."
Examples
Input		
[5, 2, 3, 4, 1, 6],
[5, 2, 3]	


Output
"Number 3 occurs 1 times."	


Comments
First we take 5 elements from the array. Delete the first 2 elements. 
Then we search for the number 3.

*/