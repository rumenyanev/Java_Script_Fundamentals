function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }


}
leapYear(1984);
leapYear(2003);
leapYear(4);
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