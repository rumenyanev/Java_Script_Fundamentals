function magicMatricesThree(matrix){
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCTwo += matrix[i + 1][j];
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            return false;
        }
    }

    return true;
}

magicMatricesThree([[4, 5, 6], 
    [6, 5, 4], 
    [5, 5, 5]]);
magicMatricesThree([[11, 32, 45], 
   [21, 0, 1],
   [21, 1, 1]]);
magicMatricesThree([[1, 0, 0], 
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