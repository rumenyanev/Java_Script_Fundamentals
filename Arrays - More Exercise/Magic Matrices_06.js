function magicMatrices(matrix){
    let sumRow = row => matrix[row].reduce((a, b) => a + b);
    let sumCol = col => matrix.map(row => row[col])
        .reduce((a, b) => a + b);
 
    if (matrix.length > 0) {
        let targetSum = sumRow(0);
 
        for (let i = 1; i < matrix.length; i++) {
            let rowSum = sumRow(i);
            if (rowSum !== targetSum) {
                return false;
            }
        }
 
        for (let j = 0; j < matrix[0].length; j++) {
            let colSum = sumCol(j);
            if (colSum !== targetSum) {
                return false;
            }
        }
    }
 
    return true;

}
magicMatrices([[4, 5, 6], 
               [6, 5, 4], 
               [5, 5, 5]]);
magicMatrices([[11, 32, 45], 
               [21, 0, 1],
               [21, 1, 1]]);
magicMatrices([[1, 0, 0], 
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