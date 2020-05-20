function schoolGrades(input) {

    let names = new Map();
    for (let string of input) {
        let data = string.split(' ');
        let name = data[0];
        let grades = data.splice(1,data.length).map(Number);

        if (!names.has(name)) {
            names.set(name, []);
            names.set(name, names.get(name).concat(grades))
        } else {
            names.set(name, names.get(name).concat(grades));
        }
    }

    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;
        return aAverage - bAverage;
    }

    let sortedByGrades = Array.from(names).sort((a, b) => average(a, b));

    for (let keys of sortedByGrades) {
        console.log(`${keys[0]}: ${keys[1].join(", ")}`);

    }
}


schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);


/*⦁	School Grades
Write a function to store students with all of their grades.
If a student appears more than once, add the new grades.
At the end print the students sorted by average grade.
The input comes as array of strings.
Example
Input
['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']


Output
Tammy: 2, 4, 3
Lilly: 4, 6, 6, 5
Tim: 5, 6, 6, 6
*/