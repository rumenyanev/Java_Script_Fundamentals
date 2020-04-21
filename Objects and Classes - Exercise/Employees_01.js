function employees(input) {

    let employeesArr = [];
    for (let personName of input) {
        let personObject = {
            name: personName,
            personalNumber: personName.length
        };
        employeesArr.push(personObject);
    }
    for (let employee of employeesArr) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);

    }

}


employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

/*Employees
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings.
Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included).
Try to use an object.
At the end print all the list employees in the following format:
 "Name: {employeeName} -- Personal Number: {personalNum}"
Examples
Input
[
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]


Output
Name: Silas Butler -- Personal Number: 12
Name: Adnaan Buckley -- Personal Number: 14
Name: Juan Peterson -- Personal Number: 13
Name: Brendan Villarreal -- Personal Number: 18
*/