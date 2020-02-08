function studentInformation(Name,Age,Grade){
    console.log(`Name: ${Name}, Age: ${Age}, Grade: ${Grade.toFixed(2)}`);
    

}
studentInformation('John', 15, 5.54678 );
studentInformation('Steve',16,2.1426);

/*6. Student Information
You will be given 3 parameters – student name (string), age (number) and average grade (number). 
Your task is to print all the info about the student in the following format. 
The grade should be formatted to the second decimal point:
'Name: {student name}, Age: {student age}, Grade: {student grade}'.
Examples

Input 
'John', 15, 5.54678 

Output
Name: John, Age: 15, Grade: 5.55

Input
'Steve',16,2.1426

Output
Name: Steve, Age: 16, Grade: 2.14

Input
'Marry', 12, 6.00 

Output
Name: Marry, Age: 12, Grade: 6.00


Hint
Use toFixed() method to format the grade.
*/