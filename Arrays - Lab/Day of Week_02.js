function dayOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day >= 1 && day <= 7) {
        console.log(days[day - 1]);

    } else {
        console.log("Invalid day!");

    }

}
dayOfWeek([3]);
dayOfWeek([6]);
dayOfWeek([11]);
;/*⦁	Day of Week
Write a program which receives a number and prints the corresponding name of the day of week. 
If the number is NOT a valid day, print 'Invalid day!'.
Examples
Input	
3	

Output
Wednesday

Input
6	

Output
Saturday

Input
11	

Output
Invalid day!
*/