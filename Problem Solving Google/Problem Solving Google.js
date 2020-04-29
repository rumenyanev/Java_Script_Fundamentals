

/*let firstArr = [12,4,6,85,10,1,2,8];
let secondArr = [45,2,3,52,26,19];
 let target = 29;
 */

function solve(firstArr, secondArr, target) {
    firstArr.sort((a, b) => a - b);
    secondArr.sort((a, b) => a - b);

    let x = firstArr.length - 1;
    let y = 0;
    let minDifference = Number.MAX_SAFE_INTEGER;
     let result = [];

    while(x > 0 && secondArr.length){
        let sum = Math.abs(firstArr[x] + secondArr[y]);
        let difference = Math.abs(sum - target);

        if(difference < minDifference){
            result = [firstArr [x], secondArr[y]];
            minDifference = difference;
        }
        if(sum >= target){
            x--;
        }
        else{
            y++;
        }

    }
console.log(result);

}
solve([1,2,3,9],[15,6,7,8], 12); 
//solve([12, 4, 6, 85, 10, 1, 2, 8], [45, 2, 3, 52, 26, 18], 29);


/* Да се намери сумата от кои две числа (от първия и втория масив) е най-близка до target */