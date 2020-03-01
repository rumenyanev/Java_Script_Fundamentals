function spiralMatrix(matrix) {
    let finalMatrix = matrix * matrix;
    let result = [];

    for (let i = 0; i < matrix; i++) {
        let tempMatrix = [];
        for (let j = 0; j < matrix; j++) {
            tempMatrix.push(0);
        }
        result.push(tempMatrix);
    }

    let row = 0;
    let col = 0;
    let step = 0;
    for (let i = 0; i < finalMatrix;) {
        while (matrix > col + step) {
            i++;
            result[row][col] = i;
            col++;

        }
        col--;
        row++;

        while (matrix > row + step) {
            i++;
            result[row][col] = i;
            row++;
        }
        row--;
        col--;

        while (col >= step) {
            i++;
            result[row][col] = i;
            col--;
        }
        col++;
        row--;
        step++;

        while (row >= step) {
            i++;
            result[row][col] = i;
            row--;
        }
        row++;
        col++;
    }


    result.forEach(row => console.log(row.join(' ')));
}



spiralMatrix(5, 5);
spiralMatrix(3, 3);

/*Spiral Matrix
Write a function that generates a Spirally filled matrix with numbers, with given dimensions.
Input
The input comes as 2 numbers that represent the dimension of the matrix.
Output
The output is the matrix filled spirally starting from 1.
You need to print every row on a new line, with the cells separated by a space.
Check the examples below.
Examples
Input
5, 5

Output
1  2  3  4  5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9

Input
3, 3

Output
1 2 3
8 9 4
7 6 5
*/