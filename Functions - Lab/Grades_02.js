function grades(grade) {
    let result = '';
    if (grade >= 2.00 && grade < 3.00) {
        result = 'Fail';
    } else if (grade >= 3.00 && grade < 3.50) {
        result = 'Poor';

    } else if (grade >= 3.50 && grade < 4.50) {
        result = 'Good';

    } else if (grade >= 4.50 && grade < 5.50) {
        result = 'Very good';

    } else if (grade >= 5.50 && grade <= 6.00) {
        result = 'Excellent';

    }
    console.log(result);

}
grades(3.33);
grades(4.50);
grades(2.99);

/*2. Grades
Write a function that receives a grade between 2.00 and 6.00 and prints the corresponding grade in words
 2.00 - 2.99 - "Fail"
 3.00 - 3.49 - "Poor"
 3.50 - 4.49 - "Good"
 4.50 - 5.49 - "Very good"
 5.50 - 6.00 - "Excellent"
Examples
Input
3.33

Output
Poor


Input
4.50

Output
Very good


Input
2.99

Output
Fail

              */