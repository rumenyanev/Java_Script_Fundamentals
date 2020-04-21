function towns(table){

 
    for (let row of table) {
      const elements = row.split(' | ');

      const obj ={
          town: elements[0],
          latitude: Number(elements[1]).toFixed(2),
          longitude: Number(elements[2]).toFixed(2)
      }
     console.log(obj);
     

    
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);

/*Towns
You’re tasked to create and print objects from a text table. 
You will receive input as an array of strings, 
where each string represents a row of a table, 
with values on the row separated by pipes "|" and spaces.

The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
The latitude and longitude columns will always contain valid numbers. 
Check the examples to get a better understanding of your task.
The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

Examples
Input
['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']

Output
{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }
*/