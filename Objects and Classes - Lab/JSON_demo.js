let data = '{"name": "Pesho", "age":20}'; // JSON format
console.log(data.name);

data = JSON.parse(data); // convert JSON format to Java Script
console.log(data.name);


let text = JSON.stringify(data); // convert Java Script to JSON format
console.log(text);
console.log(data);

