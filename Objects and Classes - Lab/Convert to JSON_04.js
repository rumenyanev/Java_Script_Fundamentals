function convertToJSON(name,lastName,hairColor){
let person = {name,lastName,hairColor};

console.log(JSON.stringify(person));

}


convertToJSON('George',
                'Jones',
                'Brown');
/*⦁	Convert to JSON
Write a function that receives name, lastName, hairColor and sets them to an object.
Convert the object to JSON string and print it.
Input is provided as 3 single strings in the order stated above.
Examples
Input	
'George',
'Jones',
'Brown'	

Output
{"name":"George", 
"lastName":"Jones",
 "hairColor":"Brown"}


Hints
⦁	Use JSON.stringify() to parse the object to JSON string
 
*/