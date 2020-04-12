function personInfo(firstName,lastName,age){
let person = {firstName,lastName,age};
let entries = Object.entries(person);
for(let[key,value] of entries){


console.log(`${key}: ${value}`);
}

}
personInfo("Peter", 
            "Pan",
            "20");


/*⦁	Person Info
Write a function that receives 3 parameters, sets them to an object and prints the object's entries.
The input comes as 3 separate strings in the following order: firstName, lastName, age.
Examples
Input	
"Peter", 
"Pan",
"20"	


Output
firstName: Peter
lastName: Pan
age: 20

*/