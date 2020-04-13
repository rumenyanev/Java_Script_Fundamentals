function convertToObject(jsonString){
    let person = JSON.parse(jsonString);
    let entries = Object.entries(person);
for(let[key,value] of entries){
    console.log(`${key}: ${value}`);
    
}

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

/*⦁	Convert to Object
Write a function that receives a string in JSON format and converts it to object.
Loop through all the keys and print them with their values in format: "{key}: {value}"
Examples
Input	
'{"name": "George", "age": 40, "town": "Sofia"}'	



Output
name: George
age: 40
town: Sofia

Hints
⦁	Use JSON.parse() method to parse JSON string to an object
 
*/