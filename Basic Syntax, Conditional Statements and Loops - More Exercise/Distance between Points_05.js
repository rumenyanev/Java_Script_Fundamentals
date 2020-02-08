function distanceBetweenPoints(x1, y1, x2, y2) {
    let x = (x1 - x2);
    let y = (y1 - y2);

    let z = Math.sqrt(x * x + y * y);
    console.log(z);


}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)
/*Distance Between Points
Write a JS function that calculates the distance between two points by given x and y coordinates.
The input comes as four number elements in the format x1, y1, x2, y2.
Each pair of elements are the coordinates of a point in 2D space.
The output should be returned as a result of your function.
Examples
Input
2, 4, 5, 0

Output
5

Input
2.34, 15.66, -13.55, -2.9985

Output
24.50778901186315

*/