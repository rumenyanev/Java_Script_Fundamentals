function diagonalAttack(matrixRows){
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
 
    let sumFirstDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal +=  matrix[i][i];
    }
    let sumSecondDiagonal = 0;
    for (let j = 0; j < matrix.length; j++) {
        sumSecondDiagonal +=  matrix[j][matrix.length-1-j];
    }
 
    if (sumFirstDiagonal == sumSecondDiagonal){
        for (let a = 0; a < matrix.length; a++) {
            for (let b = 0; b < matrix.length; b++) {
                if( a != b && a != matrix.length-1-b)  {
                    matrix[a][b] = sumFirstDiagonal;
                }
            }
        }
        printMatrix(matrix);
    }
    else
    {
        printMatrix(matrix);
    }
 
    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }

}
diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']	);
diagonalAttack(['1 1 1',
                '1 1 1',
                '1 1 0']	
                );

/*Diagonal Attack
Write a function that reads a given matrix of numbers, and checks if both main diagonals have equal sum. 
If they do, set every element that is NOT part of the main diagonals to that sum, 
alternatively just print the matrix unchanged.
Input
The input comes as array of strings. 
Each element represents a string of numbers, with spaces between them. 
Parse it into a matrix of numbers, so you can work with it.

Output
The output is either the new matrix, 
with all cells not belonging to a main diagonal changed to the diagonal sum or the original matrix, 
if the two diagonals have different sums. You need to print every row on a new line, with cells separated by a space. 
Check the examples below. 
Examples
Input			
['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']	

Output
5 15 15 15 1
15 4 15 2 15
15 15 3 15 15
15 4 15 2 15
5 15 15 15 1		


Input
['1 1 1',
'1 1 1',
'1 1 0']	


Output
1 1 1
1 1 1
1 1 0


*/