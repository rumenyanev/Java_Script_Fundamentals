function nextDay(year,month,day){
    year = Number(year);
    month = Number(month);
    day = Number(day);
 
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ) {
        if(month === 12) {
            if(day === 31) {
                month = 1;
                day = 1;
                year += 1;
            } else {
                day += 1;
            }
        } else {
            if (day === 31) {
                month += 1;
                day = 1;
            } else {
                day += 1;
            }
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if(day === 30) {
            month += 1;
            day = 1;
        } else {
            day += 1;
        }
    } else if(month === 2) {
        if (day === 29) {
            month += 1;
            day = 1;
        } else {
            day += 1;
        }
    }
    if(year<1900){
        year = 1901
    }
    //let thisDay = new Date(year, monthIndex, day);
    console.log(`${year}-${month}-${day}`);
}


nextDay(2016, 9, 30);

/*Next Day
Write a JS function that calculates the date of the next day by given year, month and day.
The input comes as three number parameters. 
The first element is the year, the second is the month and the third is the day.
The output should be returned as a result of your function.
Examples
Input	
2016, 9, 30	

Output
2016-10-1


Hints
Use Date()
*/