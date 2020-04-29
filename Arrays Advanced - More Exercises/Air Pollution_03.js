function AirPollution(mapSofia, forcesAffecting) {
  let matrix = [];
  for (let i = 0; i < mapSofia.length; i++) {
      matrix[i] = mapSofia[i].split(' ').map(Number);//////solution by "willystyle"
  }
  for (let k = 0; k < forcesAffecting.length; k++) {
      let token = forcesAffecting[k].split(' ');
      let force = token[0];
      let index = Number(token[1]);
      switch (force) {
          case 'breeze':
              let row = index;
              for (let j = 0; j < matrix[row].length; j++) {
                  matrix[row][j] -= 15;
                  if (matrix[row][j] < 0) matrix[row][j] = 0;
              }
              break;
          case 'gale':
              let column = index;
              for (let i = 0; i < matrix.length; i++) {
                  matrix[i][column] -= 20;
                  if (matrix[i][column] < 0) matrix[i][column] = 0;
              }
              break;
          case 'smog':
              let value = index;
              for (let i = 0; i < matrix.length; i++) {
                  for (let j = 0; j < matrix[i].length; j++) {
                      matrix[i][j] += value;
                  }
              }
              break;
      }
  }
  let polutedBlocks = [];
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] >= 50) {
              polutedBlocks.push(`[${i}-${j}]`);
          }
      }
  }
  if (polutedBlocks.length > 0) {
      console.log('Polluted areas: ' + polutedBlocks.join(', '));
  } else {
      console.log('No polluted areas');
  }
};

AirPollution([
  "5 7 72 14 4",
  "41 35 37 27 33",
  "23 16 27 42 12",
  "2 20 28 39 14",
  "16 34 31 10 24",
], ["breeze 1", "gale 2", "smog 25"]);
console.log();
AirPollution([
  "5 7 3 28 32",
  "41 12 49 30 33",
  "3 16 20 42 12",
  "2 20 10 39 14",
  "7 34 4 27 24",
], [
  "smog 11", "gale 3",
  "breeze 1", "smog 2"
]);
console.log();
AirPollution([
  "5 7 2 14 4",
  "21 14 2 5 3",
  "3 16 7 42 12",
  "2 20 8 39 14",
  "7 34 1 10 24",
], ["breeze 1", "gale 2", "smog 35"]);
/*⦁	Air Pollution
Write a program that tracks the pollution in the air above Sofia. You will receive two arguments – 
the first is the map of Sofia represented by a matrix of numbers and the second is an array of strings 
representing the forces affecting the air quality. The map will always be with 5 rows and 5 columns in total of 25 elements - blocks. 
Each block’s particle pollution (PM) is affected by 3 forces received in the following formats:
⦁	"breeze {index}" – index is the row where all column’s value drops by 15 PM
⦁	"gale {index}" – index is the column in all rows where value drops by 20 PM
⦁	"smog {value}" – all blocks in the map increase equally by the given value’s PM
The threshold in each block is 50 PM. If it is below that number, 
the block’s air is considered normal but if it reaches or goes over it, that block’s air is considered polluted. 
Also note that the polluted particles in a block cannot go below zero.
Finally, your program needs to find if there are any polluted blocks and print them in the format given below.
Input
You will receive two arguments: 
⦁	The first argument is an array with five strings – rows of the matrix with columns separated by space that must be parsed as numbers,
 representing the map of Sofia. 
⦁	The second argument is an array of strings – each string consists of one of the words (breeze/gale/smog) and 
a number separated by space, representing the different forces.
Output
Print on the console a single line:
⦁	If there are polluted blocks in the map, use their coordinates in the following format:
⦁	"[{rowIndex}-{columnIndex}]"
Note that you must start from the top left corner of the map moving to the bottom right corner horizontally. 
Then separate each formatted block’s coordinates with comma and space and print them in a single line in the following format:
⦁	"Polluted areas: {block1}, {block2}, {block3}, …"
⦁	If there are no polluted blocks in the map print:
⦁	"No polluted areas"
Constraints
⦁	The number of rows and columns for the matrix will always be 5
⦁	The number in each block will be an integer in range [0..1000] inclusive
⦁	The number of elements in the second input argument will be in range [0..100] inclusive 
⦁	Given smog’s value will be an integer in range [0..100] inclusive
⦁	Given indexes will always be valid
Examples
Input	
["5 7 72 14 4",
  "41 35 37 27 33",
  "23 16 27 42 12",
  "2 20 28 39 14",
  "16 34 31 10 24"],
["breeze 1", "gale 2", "smog 25"]	

Output
Polluted areas: [0-2], [1-0], [2-3], [3-3], [4-1]

Explanation
Graphic diagram explaining the first example’s program flow:
 				


Input	
["5 7 3 28 32",
  "41 12 49 30 33",
  "3 16 20 42 12",
  "2 20 10 39 14",
  "7 34 4 27 24"],
[ "smog 11", "gale 3", "breeze 1", "smog 2"]	


Output
No polluted areas

Input	
["5 7 2 14 4",
  "21 14 2 5 3",
  "3 16 7 42 12",
  "2 20 8 39 14",
  "7 34 1 10 24"],
["breeze 1", "gale 2", "smog 35"]	


Output
Polluted areas: [2-1], [2-3], [3-1], [3-3], [4-1], [4-4]
*/