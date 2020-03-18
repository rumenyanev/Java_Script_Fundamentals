
function pointsValidation(inputData) {

    let x1 = inputData[0];
    let y1 = inputData[1];
    let x2 = inputData[2];
    let y2 = inputData[3];

    let x = calculateLenght(x1, y1);
    let y = calculateLenght(x2, y2);
    let z = calculateLenght(x2 - x1, y2 - y1);

    printResult(x, x1, y1, 0, 0);
    printResult(y, x2, y2, 0, 0);
    printResult(z, x1, y1, x2, y2);

    function printResult(digit, x1, y1, x2, y2) {
        Number.isInteger(digit)
            ?
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
            :
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


    function calculateLenght(a, b) {

        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);



/*Points Validation
Write a JS program that receives two points in the format [x1, y1, x2, y2]
and checks if the distances between each point and the start of the cartesian coordinate system (0, 0)
and between the points themselves is valid. A distance between two points is considered valid, if it is an integer value.
In case a distance is valid write "{x1, y1} to {x2, y2} is valid",
in case the distance is invalid write "{x1, y1} to {x2, y2} is invalid".

The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
The input consists of two points given as an array of numbers.
For each comparison print on the output either "{x1, y1} to {x2, y2} is valid"
if the distance between them is valid, or "{x1, y1} to {x2, y2} is invalid"- if it’s invalid.
Examples
Input
[3, 0, 0, 4]


Output
{3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid


Input
[2, 1, 1, 1]

Output
{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid
*/