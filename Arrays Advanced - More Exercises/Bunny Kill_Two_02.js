function bunnyKillTwo(arr){

    let matrix = [];
    let snowBallDamage = 0;
    let killedBunnies = 0;
    let matrixRow = arr.length - 1;
    let matrixCol = arr[0].split(/\s+/).length;
    let coor = arr[arr.length - 1]
        .split(' ')
        .filter(a => a !== '');
    for (let i = 0; i < arr.length - 1; i++) {
        matrix.push(arr[i].split(/\s+/).map(Number));
    }
    for (let i = 0; i < coor.length; i++) {
        let innerArr = coor[i].split(/[,]/).filter(a => a !== '').map(Number);
        let bombRow = Number(innerArr[0]);
        let bombCol = Number(innerArr[1]);
        let bombValue = matrix[bombRow][bombCol];
        if (bombValue > 0) {
            for (let row = bombRow - 1; row <= bombRow + 1; row++) {
                for (let col = bombCol - 1; col <= bombCol + 1; col++) {
                    if ((row >= 0) && (col >= 0) && (row < matrixRow) && (col < matrixCol)) {
                        matrix[row][col] -= bombValue;
                    }
                }
            }
            killedBunnies++;
            snowBallDamage += bombValue;
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                snowBallDamage += matrix[row][col];
                killedBunnies++;
            }
        }
    }
    console.log(snowBallDamage);
    console.log(killedBunnies);
}

bunnyKillTwo(['10 10 10',
           '10 10 10', 
           '10 10 10',
           '0,0']);

bunnyKillTwo(['5 10 15 20',
           '10 10 10 10',
           '10 15 10 10',
           '10 10 10 10',
           '2,2 0,1']);

/*⦁	Bunny Kill
In the underground world of bunnies, mafia and corruption have taken over. 
Snowball is on a mission to infiltrate a certain deserted military hanger, supposedly filled with convict bunnies. 
You will be given a matrix of integers, each integer separated by a single space, 
and each row on a new line, which will represent the current situation in the hangar. 
Then on the last line of input you will receive indexes - coordinates to several cells in the hangar separated by a single space,
 in the following format: row1,column1  row2,column2  row3,column3… 

On those cells there are bunnies with bombs. Snowball is smart and knows that the bombs 
are an easy way to neutralize enemies, especially when they are the enemy’s own bombs.
Snowball will proceed to eliminate every bunny with a bomb, one by one in the order they were given.
 When a bunny with a bomb is killed, it explodes and deals damage equal to its own integer value,
  to all the cells around it (in every direction and in all diagonals). 
  If a bomb bunny is caught in the explosion and killed, that bomb is no longer valid and will not explode.
   When a bunny is damaged, it reduces its integer value by the damage value. When a bunny’s value reaches 0, it dies. 
   When a bunny explodes, it dies.
When Snowball is done with all the bomb bunnies, he will proceed to kill any other convict bunny which has remained alive.
 You must count all the damage Snowball did in the hangar.
 Note that bomb explosion damage does not count as Snowballs damage, but the killing of bomb bunnies and other bunnies DOES. 
 Snowball’s damage for every bunny is equal to the bunny at that cell’s integer value.
Input
⦁	The input data is passed to the first function found in your code as an array of strings.
⦁	Each entry in the array represents a row of the matrix, in the form of integers separated by a space.
⦁	On the last line you will receive the coordinates of the cells with the bomb bunnies.
Output
⦁	On the first line you need to print Snowball’s damage.
⦁	On the second line you need to print the amount of bunnies HE killed.
Constraints
⦁	The size of the matrix will be between [0…1000].
⦁	 The coordinates to the bomb bunnies will always be in the matrix.
⦁	The integers of the matrix will be in range [0…10000].
⦁	Allowed time/memory: 250ms/16MB
Examples
Input		
['10 10 10',
'10 10 10', 
'10 10 10',
'0,0']	

Output
60
6	

Comments
The blue number represents a bunny which is a bomb. 
The red numbers are bunnies which have been hit by the exploding bunny.
 Since the exploding bunny has a value of 10, all the damaged bunnies suffer 10 damage. 
 Since their values are also 10, the explosion kills them and they are no longer valid targets for Snowball. 
 So in total Snowball deals 60 dmg (the 5 untargeted bunnies + the exploding one) and kills 6 units.
Input		
['5 10 15 20',
'10 10 10 10',
'10 15 10 10',
'10 10 10 10',
'2,2 0,1']	


Output
70
7	

Comments
Here the purple bunnies are caught in the explosion,
 but since their values are bigger than the exploding bunny’s value – they don’t die and are left for Snowball to kill.
The damage Snowball deals here is 10 + 10 + 5 + 20 + 10 + 5 + 10 = 70. 
The values for the bunnies who survived the explosion are 5 because the explosion reduced their initial values
15 (initial) – 10 (exploding bunny) = 5
*/