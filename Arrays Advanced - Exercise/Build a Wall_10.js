function buildWall(array) {
let arr = array.splice(0);
let arrCopy = arr.slice(0);
    function sortArr(arr) {
        arr = arr.sort((a, b) => b - a);
        return (arr);
    }
    function build(arr) {
        arr = sortArr(arr);
        let result = [];
        
        while (arr.length > 0) {
            let iterForDay = (arr.length * 195);
            let element = Number(arr.shift());

            for (let i = element; i < 30; i++) {

                arr = arr.map((el) => Number(el) + 1);
                result.push(iterForDay)
            }
        
        }
        console.log(result.join(', '));
    }

    function sum(arr) {
        let allSum = [];

        while (arr.length > 0) {

            let element = arr.shift();
            let res = 0;
            for (let i = element; i <= 30; i++) {
                res = (i - element);
            }
            allSum.push(res);

        }
        allSum = allSum.reduce((a, b) => (a + b) );
        let totalSum = allSum * 195 * 1900;
        console.log(`${totalSum} pesos`);
    }
   
    
  //  let allSum = sum(array);
 //  console.log(`${allSum} pesos`);

  //  let result = build(array);
 //  console.log(result); 

   build(arrCopy);
   sum(arr);

}


buildWall(['17']);

buildWall(['17', '22', '17', '19', '17']);
/*Build a Wall
Write a program that keeps track of the construction of a 30-foot wall.
You will be given an array of strings that must be parsed as numbers,
representing the initial height of mile-long sections of the wall, in feet.
 Each section has its own construction crew that can add 1 foot of height per day by using 195 cubic yards of concrete.
  All crews work simultaneously (see examples), meaning all sections that aren't completed (are less than 30 feet high)
   grow by 1 foot every day. When a section of the wall is complete, its crew is relieved.
Your program needs to keep track of how much concrete is used daily until the completion of the entire wall.
At the end, print on a single line, separated by comma and space, the amount of concrete used each day,
and on a second line, the final cost of the wall. One cubic yard of concrete costs 1900 pesos.
Input
Your program will receive an array of strings representing numbers as a parameter.
Output
Print on the console on one line the amount of concrete used each day separated by comma and space, and on a second line, the final cost of the wall.
Constraints
⦁	The wall may contain up to 2000 sections (2000 elements in the initial array)
⦁	Starting height for each section is within range [0…30]
Examples
Input
[21, 25, 28]


Output
585, 585, 390, 390, 390, 195, 195, 195, 195
5928000 pesos
Explanation
On the first day, all three crews work, each adding 1 foot to their section,
585 cubic yards total (3 x 195). On the second day,
it's the same with the last section reaching 30 feet and its crew being relieved
(marked in red while they don't work). On the third day, only two crews work, using up 390 cubic yards total.
This continues for 2 more days, with the second section reaching 30 feet.
In the remaining 4 days, only 1 crew works, using 195 cubic yards every day.
Over the entire period, 3120 cubic yards of concrete were used, costing 5'928'000 pesos.
 And that was for just 3 miles, imagine 2000!
Starting 	[21, 25, 28]
Day 1 	[22, 26, 29]
Day 2 	[23, 27, 30]
Day 3 	[24, 28, 30]
Day 4	[25, 25, 30]
Day 5	[26, 30, 30]
Day 6	[27, 30, 30]
Day 7	[28, 30, 30]
Day 8	[29, 30, 30]
Day 9	[30, 30, 30]

Input
[17]

Output
195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195
4816500 pesos

Input
[17, 22, 17, 19, 17]

Output
975, 975, 975, 975, 975, 975, 975, 975, 780, 780, 780, 585, 585
21489000 pesos
*/