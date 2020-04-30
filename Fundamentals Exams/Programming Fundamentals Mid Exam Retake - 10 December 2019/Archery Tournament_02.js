function archeryTournament(input = []) {
    let numbers = input.shift().split('|').map(Number);


    let points = 0;
    let index = 0;
    let length = 0;

    let command = input.shift();
    let temp;
    let indexes;

    while (command !== "Game over") {

        if (command === "Reverse") {
            numbers = numbers.reverse();
            command = input.shift();
            continue;

        }

        temp = command.split(' ');
        indexes = temp[1].split('@');

        if (indexes[0] === "Left") {

            index = Number(indexes[1]);
            length = Number(indexes[2]);

            if (index >= 0 && index <= numbers.length - 1) {
                while (length != 0) {
                    if (index > 0) {
                        index--;
                        length--;
                    }
                    else if (index === 0) {
                        index = numbers.length - 1;
                        length--;
                    }
                }

                if (numbers[index] >= 5) {
                    numbers[index] -= 5;
                    points += 5;
                }
                else {

                    points += numbers[index];
                    numbers[index] = 0;
                }
            }
        }
        else if (indexes[0] === "Right") {

            index = Number(indexes[1]);
            length = Number(indexes[2]);
            if (index >= 0 && index <= numbers.length - 1) {

                while (length != 0) {
                    if (index < numbers.length - 1) {
                        index++;
                        length--;
                    } else if (index == numbers.length - 1) {
                        index = 0;
                        length--;
                    }
                }

                if (numbers[index] >= 5) {
                    numbers[index] -= 5;
                    points += 5;
                }
                else {
                    points += numbers[index];
                    numbers[index] = 0;
                }
            }
        }
        command = input.shift();
    }
    let result = '';
    for (let i = 0; i < numbers.length; i++) {

        if (i === numbers.length - 1) {
            result += numbers[i] + " ";
        } else { result += (numbers[i] + ' - '); }
    }
    console.log(result);


    console.log(`Iskren finished the archery tournament with ${points} points!`);
}




archeryTournament([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
]
);
/*
archeryTournament(['20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over'])

/*Archery Tournament
Our hero Iskren is going to take part in an archery tournament. Your task is to help him calculate his points.
On the first line you will receive integers separated by "|", representing the targets in the archery field.
On the next lines until you receive "Game over" command, you will receive commands by the Judge of the tournament:
"Shoot Left@{start index}@{length}":
Iskren starts traversing the archery field to the left from {start index} with given {length}.
If he goes out of the field, he will continue from the end of the field.
"Shoot Right@{start index}@{length}":
Iskren starts traversing the archery field to the right from {start index} with given {length}.
If he goes out of the field, he will continue from the start of the field.
"Reverse":
Reverse the archery field.
"Game Over"
Print the archery field and collected points.
When he arrives at the target, he will shoot at it and increase his points by 5 and decrease the target by 5 points,
if the target points are less than 5, he takes all of them and decreases it to 0.
If the start index is out of range of the field Iskren will have to ignore the command.
Input
On the first line, you will receive integers separated by "|" representing the targets in the archery field.
On the next lines, until the "Game over" command you will receive commands in the format described above.
Output
Print the field in following format: "{target} - {target} - {target} ….. - {target}".
"Iskren finished the archery tournament with {points}!"




Examples
Input
10|10|10|10|10
Shoot Left@0@2
Shoot Right@4@5
Shoot Right@6@5
Reverse
Game over


Output
5 - 5 - 10 - 10 - 10
Iskren finished the archery tournament with 10 points!


Comments
First, Iskren receives the "Shoot Left@0@2" command,
so he starts traversing the archery field from index 0 with length 2 and he stops at index 3.
He shoots and the archery filed looks like this: 10 - 10 - 10 - 5 – 10 ,
and his points are 5.
Then he receives "Shoot Right@4@5" -> "10 - 10 - 10 - 5 – 5"
"Shoot Right@6@5" -> Index 6 is out of range of the field , so Iskren ignores the command.
“Reverse”-> After that command the field looks like this: 5 - 5 - 10 - 10 - 10


Input
20|30|40|50|60
Shoot Left@0@12
Shoot Right@4@15
Shoot Left@6@5
Reverse
Game over


Output
55 - 45 - 40 - 30 - 20
Iskren finished the archery tournament with 10 points!

*/