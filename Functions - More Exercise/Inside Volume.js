function insideVolume(array){

    for(let i = 0; i<array.length;i+=3){
        let x = array[i];
        let y = array[i + 1];
        let z = array[i + 2];

        if (inRange(x, y, z)) {
            console.log('inside') ;
        } else {
            console.log('outside');
        }
       
       
    }
    function inRange(x,y,z){
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true;
                }
            }
        }

        return false;
    }
  
}


insideVolume([8, 20, 22]);
insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]);

/*    1. Inside Volume
Write a JS function that determines whether a point is inside the volume, 
defined by the box, shown on the right.
The input comes as an array of numbers. Each set of 3 elements are the x, y and z coordinates of a point.
The output should be printed to the console on a new line for each point. 
Print inside if the point lies inside the volume and outisde otherwise.
Examples
Input

[8, 20, 22]

Output
outside


Input
[13.1, 50, 31.5,
50, 80, 50,
-5, 18, 43]

Output
inside
inside
outside


Hints
This task is very similar to previous assignments where a point might lie inside an area in 2D space,
 with just an extra dimension added. 
If we look at a classic conditional statement, which checks whether a point is inside a rectangle:

It checks whether a coordinate is greater than the minimum and at the same time less
 than the maximum bounding value for both axes (x and y).
  All we have to do is to include an additional check for a coordinate to be 
  within the vertical limits of the volume (z-axis):

We can then wrap this whole statement in a function and as we process each set of coordinates,
 pass them to see if they are inside the volume and print the correct message to the console. 
 Since the volume is the same every time, we can hardcode the values, 
 but it’s generally good practice to pass them as function arguments, 
 so that the function may work with any arbitrary volume.
  Later in the course we’ll learn how to shorten this with the use of objects.

We can extract the sets of coordinates with a loop that skips 3 elements at a time and assigns them to temporary variables:

We know from the problem description that the input array will contain sets to three coordinates. 
Starting at 0, the current element (denoted by index i inside the loop) is the x-coordinate, 
the element after the current (i + 1) is the y-coordinate, and the element two indices after 
the current (i + 2) is the z-coordinate. At the end of the cycle, the index is increased by 3 
and we can obtain the coordinates of the next point, using the same arithmetic (instead of 0, 1 and 2 we will get 3, 4 and 5) 
and so on, until there are no more elements in the array. The three coordinates are 
passed into our function and we get a Boolean value as a result. If it’s true, 
we print inside for the current point and otherwise we print outside.
The solution may now be submitted to the judge system at https://judge.softuni.bg/Contests/310
    */