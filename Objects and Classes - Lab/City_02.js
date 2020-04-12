function city(name,area,population,country,postCode){
    let city = {name,area,population,country,postCode}
let entries = Object.entries(city);
for(let[key,value] of entries){
    console.log(`${key} -> ${value}`);
    
}

}
city("Sofia"," 492", "1238438", "Bulgaria", "1000");
/*⦁	City
Receive five single strings. 
Create a city object which will hold the city name, area, population, country and postcode. 
Loop through all the keys and print them with their values in format: "{key} -> {value}"
The input will be in the following order: name, area, population, country and postCode.
See the examples below.
Examples
Input	
"Sofia"," 492", "1238438", "Bulgaria", "1000"	

Output
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000
*/