function carWash(array) {
    
    let percentageCleanedCar = 0;
    while (array.length > 0) {
        let command = array.shift();
        if (command === 'soap') {
            percentageCleanedCar += 10;
        }
        if (command == 'water') {
            percentageCleanedCar += (percentageCleanedCar * 0.20);
        }
        if (command == 'vacuum cleaner') {
            percentageCleanedCar += (percentageCleanedCar * 0.25);
        }
        if (command == 'mud') {
            percentageCleanedCar -= (percentageCleanedCar * 0.10);
        }


    }
    console.log(`The car is ${percentageCleanedCar.toFixed(2)}% clean.`);

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