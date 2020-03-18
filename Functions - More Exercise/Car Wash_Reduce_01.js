function carWashReduce(array){
    let funcs = {
        soap: x => x + 10,
        water: x => x + x * 0.2,
        'vacuum cleaner': x => x + x * 0.25,
        mud: x => x - x * 0.10
      };
      let value = array.reduce((acc, curr) => funcs[curr] && funcs[curr](acc) || acc, 0); 
       //тук се използва предпазване от undefine, задаване на дефаултна стойност и приоритет на операците. 
       
      console.log(`The car is ${value.toFixed(2)}% clean.`);

}

carWashReduce(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

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