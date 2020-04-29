function equalNeighbors(matrix){
    
    let counter = 0;

    for (let row = 0; row < matrix.length - 1; row++) {

        counter = getNeighborsInRow(row);

        counter = getNeighborsInLine(row);

        if (row === matrix.length - 2){
            counter = getNeighborsInLine(row + 1);
        }
    }

    console.log(counter);

    function getNeighborsInRow(row) {
        for (let col = 0; col < matrix[row].length; col++) {

            let currEl = matrix[row][col];
            let neighborEl = matrix[row + 1][col];

            if (currEl === neighborEl) {
                counter++;
            }
        }
        return counter;
    }

    function getNeighborsInLine(row) {
        for (let inRow = 0; inRow < matrix[row].length - 1; inRow++) {
            let currElInLine = matrix[row][inRow];
            let rightInLine = matrix[row][inRow + 1];

            if (currElInLine === rightInLine) {
                counter++;
            }
        }

        return counter;
    }

}
equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]);


equalNeighbors([['test', 'yes', 'yo', 'ho'],
               ['well', 'done', 'yo', '6'],
               ['not', 'done', 'yet', '5']]);

/*⦁	Equal Neighbors
Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
The input comes as array of arrays, containing string elements (2D matrix of strings).
The output is return value of you function. Save the number of equal pairs you find and return it.
Examples
Input			
[['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]	
 
 Output
 1	 	
 
 
 Input
 [['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]	
 
 Output
 2
*/