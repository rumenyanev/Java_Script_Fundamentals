function leapYearTwo(year){

console.log(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 'yes':'no');

}

leapYearTwo(1984);
leapYearTwo(2003);
leapYearTwo(4);
/*Leap Year
Write a JS function to check whether a year is leap.
Leap years are either divisible by 4 but not by 100 or are divisible by 400.
Return the result like examples below:
Examples
Input
1984

Output
yes

Input
2003

Output
no

Input
4
Output
yes

*/