function magicMatricesTwo(matrix){
    let sumRow = matrix.map((col => col.reduce((a,b) => a + b)));

    let sumCol = matrix.reduce((r, a) => r.map((b, i) => a[i] + b));

    let allEqual = array => array.every( element => element === array[0]);

    console.log(allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString());
}
magicMatricesTwo([[4, 5, 6], 
                   [6, 5, 4], 
                   [5, 5, 5]]);
magicMatricesTwo([[11, 32, 45], 
                  [21, 0, 1],
                  [21, 1, 1]]);
magicMatricesTwo([[1, 0, 0], 
                   [0, 0, 1], 
                   [0, 1, 0]]);

/*Magic Matrices
Write a function that checks if a given matrix of numbers is magical. 
A matrix is magical if the sums of the cells of every row and every column are equal. 

Input
The input comes as an array of arrays, containing numbers (number 2D matrix). 
The input numbers will always be positive.

Output
The output is a Boolean result indicating whether the matrix is magical or not.
Examples
Input			
[[4, 5, 6], 
[6, 5, 4], 
[5, 5, 5]]	

Output
true		

Input
[[11, 32, 45], 
[21, 0, 1], 
[21, 1, 1]]	

Output
false	 	

Input
[[1, 0, 0], 
[0, 0, 1], 
[0, 1, 0]]	

Output
true

*/