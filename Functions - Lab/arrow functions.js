/*let multiplay = function(a,b){
    return a * b;
}; // exprecions functions

*/

/*

let multiplay =  (a,b) => a * b;
 // arrow functions

let result = multiplay(2,5);

console.log(result);


*/

/*

function solve(num,operation){
let result = operation(num);
console.log(result);

}
    let multiplay = (a)=> a * a;
solve(5,multiplay);  */// --->

function solve(num,operation){
    let result = operation(num);
    console.log(result);
    }
    solve(5,(a)=> a * a);
    solve(5,x => ++x);
    