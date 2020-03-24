function biggestElementInMatrix(matrix){
    let biggestEl = Number.MIN_SAFE_INTEGER;
    matrix.forEach(row =>{
        row.forEach(col => biggestEl = Math.max(biggestEl, col))
    });

    console.log(biggestEl);
}
biggestElementInMatrix([[20, 50, 10],
                [8, 33, 145]]);

biggestElementInMatrix([[3, 5, 7, 12],
                [-1, 4, 33, 2],
                [8, 3, 0, 4]])    

/*Biggest Element
Write a JS function that finds the biggest element inside a matrix.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is the return value of your function. 

Find the biggest element and return it.
Examples
Input			
[[20, 50, 10],
 [8, 33, 145]]	
 
 Output
 145	 	
 
 
 Input
 [[3, 5, 7, 12],
 [-1, 4, 33, 2],
 [8, 3, 0, 4]]	
 
 Output
 33
*/