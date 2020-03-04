function mathPower(num,power){
   let result = 1;
    for(let i = 0; i< power; i++){
        result *= num;
    }
    console.log(result);

}
mathPower(2,8);
mathPower(3,4);
/*3. Math Power
Write a function that calculates and returns the value of a number raised to a given power:
Examples
Input 
2
8


Output
256



Input
3
4


Output
81

     */