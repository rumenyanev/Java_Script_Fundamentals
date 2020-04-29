function bonusScoringSystem(array){
let numOfStudents = Number(array.shift());
let countOfLectures =  Number(array.shift());
let additionalBonus = Number(array.shift());


let maxBonus = 0;
let numLectures = 0;
for(let i = 0; i < numOfStudents; i++){
    let studentAttendances = array[i];
   let bonus = ((studentAttendances/ countOfLectures) * (5 + additionalBonus));
    
    if(bonus > maxBonus){
        maxBonus = bonus;
        numLectures = array[i];
    }
}
console.log(`Max Bonus: ${Math.round( maxBonus)}.`);
console.log(`The student has attended ${numLectures} lectures.`)

}

bonusScoringSystem([5,25,30,12,19,24,16,20]);

bonusScoringSystem([10,30,14,8,23,27,28,15,17,25,26,5,18]);

/*Problem 1. Bonus Scoring System
Create a program that calculates bonus points for each student, for a certain course.
 On the first line, you are going to receive the count of the students for this course. 
 On the second line, you will receive the count of the lectures in the course. 
 Every course has an additional bonus. You are going to receive it on the third line.

 On the next lines, you will be receiving the count of attendances for each student. 

The bonus is calculated with the following formula:
{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
Find the student with the maximum bonus and print him/her, along with his attendances in the following format:
"Max Bonus: {maxBonusPoints}."
"The student has attended {studentAttendances} lectures."
Round the bonus points at the end to the nearest bigger number.
Input / Constrains
On the first line you are going to receive the count of the students – an integer number in the range [0…50]
On the second line you are going to receive the count of the lectures – an integer number in the range [0...50].
On the third line you are going to receive the initial bonus – an integer number in the range [0….100].
On the next lines, you will be receiving the attendances of each student.
There will never be students with equal bonuses.
Output
Print the maximum bonus points along with the attendances of the given student, 
rounded to the nearest bigger number, scored by a student in this course in the format described above.
Examples
Input	
5
25
30
12
19
24
16
20	

Output
Max Bonus: 34.
The student has attended 24 lectures.


Comments
First, we receive the number of students enrolled in the course – 5. 
The total count of the lectures is 25 and the initial bonus is 30. 
Then we calculate the bonus of the student with 12 attendances, which is 16.8.
 We continue calculating each of the student’s bonuses.
  The one with 24 attendances has the highest bonus – 33.6 (34 rounded), so we print the appropriate message on the console.


  Input
10
30
14
8
23
27
28
15
17
25
26
5
18	

Output
Max Bonus: 18.
The student has attended 28 lectures.
*/