function carWash(array){

    //решение чрез предаване по стойност
    
    let value = 0; 
    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10; 
    for (let i = 0; i < array.length; i++){   
      if (array[i] === 'soap') {
        value = soap(value);
      } else if (array[i] === 'water') {
        value = water(value);
      } else if (array[i] === 'vacuum cleaner') {
        value = vacuum(value);
      } else {
        value = mud(value);
      } 
    } 
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

/*Car Wash
Write a JS function that receives some commands.
 Depending on the command add a percentage of how much the car is cleaned. Start from 0.
 The first command will always be 'soap':

soap – add 10 to the value
water – increase the value with 20%
vacuum cleaner – increase the value with 25%
mud – decrease the value with 10%
The input comes as an array strings. When finished cleaning the car, print the resulting value in the format:
"The car is {value}% clean.". The value should be rounded to the second decimal point.
Examples
Input
['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']

Output
The car is 39.00% clean.
*/