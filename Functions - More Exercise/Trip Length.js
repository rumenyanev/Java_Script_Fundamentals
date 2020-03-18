function tripLength(coordinates){


    let distance1between2 = getDistance(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
    let distance1between3 = getDistance(coordinates[0], coordinates[1], coordinates[4], coordinates[5]);
    let distance2between3 = getDistance(coordinates[2], coordinates[3], coordinates[4], coordinates[5]);

    if ((distance1between2 <= distance1between3) && (distance1between3 => distance2between3)) {
        let a = distance1between2 + distance2between3;
        console.log('1->2->3: ' + a);
    }
    else if ((distance1between2 <= distance2between3) && (distance1between3 < distance2between3)) {
        let b = distance1between3 + distance1between2;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance2between3 + distance1between3;
        console.log('1->3->2: ' + c);
    }

    function getDistance(x1, y1, x2, y2) {

        let dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return dist;
    }
}
tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);

/*    8. Trip Length
You will be given the coordinates of 3 points on a 2D plane. Write a program that finds
 the two shortest segments that connect them (without going back to the starting point). 
 When determining the listing order, use the order with the lowest numerical value 
 (see the figure in the hints for more information).
The input comes as an array of 6 numbers. The order is [x1, y1, x2, y2, x3, y3].
The output is the return value of your program as a string, representing the order 
in which the three points must be visited and the final distance between them. 
See the examples for more info.
Examples
Input
[0, 0, 2, 0, 4, 0]

Output
1->2->3: 4

Input
[5, 1, 1, 1, 5, 4]

Output
2->1->3: 7

Input
[-1, -2, 3.5, 0, 0, 2]

Output
1->3->2: 8.154234499766936
Hints
You can find the horizontal and vertical offset between two points by calculating the difference between their coordinates. Use Pythagoras’ theorem to find the distance.
If more than one shortest paths exist, choose the one with lowest numerical value. For instance, in the figure on the right, 123 is the same distance as 321, but we chose to start at 1, since it’s lower than 3. When choosing the second point, we encounter the same issue – 132 would be the same as 123, but we chose to visit 2 first, because it’s lower than 3.
    */