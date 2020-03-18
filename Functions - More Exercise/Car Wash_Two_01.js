function carWash(array) {

    //варианта при който подаваш референции

    let obj = { value: 0 };
    let soap = x => x.value += 10;
    let water = x => x.value *= 1.2;
    let vacuum = x => x.value *= 1.25;
    let mud = x => x.value *= 0.90;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'soap') {
            soap(obj);
        } else if (array[i] === 'water') {
            water(obj);
        } else if (array[i] === 'vacuum cleaner') {
            vacuum(obj);
        } else {
            mud(obj);
        }
    }
    console.log(`The car is ${obj.value.toFixed(2)}% clean.`);
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