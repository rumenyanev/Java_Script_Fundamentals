function diagonalSumsInMatrix(matrix){

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix[i].length - i - 1];
    }

    console.log(`${firstDiagonal} ${secondDiagonal}`);
}
diagonalSumsInMatrix([[20, 40],
                    [10, 60]]);

diagonalSumsInMatrix( [[3, 5, 17],
                      [-1, 7, 14],
                      [1, -8, 89]]);
/*Diagonal Sums
A square matrix of numbers comes as an array of strings, each string holding numbers (space separated).
 Write a JS function that finds the sum at the main and at the secondary diagonals.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is printed on the console, on a single line separated by space.
 First print the sum at the main diagonal, then the sum at the secondary diagonal.
Examples
Input			
[[20, 40],
 [10, 60]]	
 
 Output
 80 50	 	
 
 Input
 [[3, 5, 17],
 [-1, 7, 14],
 [1, -8, 89]]	
 
 Output
 99 25
*/