function roadRadar(array) {

    let speed = array[0];
    let road = array[1];

    let limit = inRangeLimit(road);
    let infraction = overLimit(speed, limit);

    if (infraction) {
        console.log(infraction);
    }

    function inRangeLimit(road) {
        switch (road){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    function overLimit(speed, limit) {
        let overSpeed = speed - limit;

        if (overSpeed <= 0){
            return false;
        }else {
            if (overSpeed <= 20){
                return 'speeding';
            }else if (overSpeed <= 40){
                return 'excessive speeding';
            }else {
                return 'reckless driving';
            }
        }
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
/*    2. Road Radar
Write a JS function that determines whether a driver is within the speed limit. 
You will receive his speed and the area where he’s driving. 
Each area has a different limit: on the motorway the limit is 130 km/h, on the interstate the limit is 90, 
inside a city the limit is 50 and within a residential area the limit is 20 km/h. 
If the driver is within the limits, your function prints nothing. 
If he’s over the limit however, your function prints the severity of the infraction. 
For speeds up to 20 km/h over the limit, he’s speeding; for speeds up to 40 over the limit, 
the infraction is excessive speeding and for anything else, reckless driving.
The input comes as an array of elements. The first element is the current speed (as number),
 the second element is the area where the vehicle is driving.
The output should be printed to the console. Note in certain cases there will be no output.
Examples

Input
[40, city]

Output


Input
[21, residential]


Output
speeding


Input
[120, interstate]

Output
excessive speeding

Input
[200, motorway]

Output
reckless driving


Hints
We can divide the task in two functions – one that determines what the current speed limit is,
 depending on zone, and another which tells us if an infraction is being made, 
 depending on current speed and current limit. Determining the limit is achieved with a switch statement on the input:

This function takes a string as an argument and returns a number, depending on what that string is. 
We can take this directly from the input, pass it to this function and save the return value in a variable. 
In our second function, we pass the current speed and the limit, which we just saved.

We calculate the difference between the current speed and the limit – if it’s negative or zero, 
this means the driver is within the rules and we return false, and in any other case, return the infraction 
as a string and store the result of the operation in a variable.
e can use the fact that JavaScript functions can return different data types and directly 
use the result we stored in a conditional statement – if it’s false (no infraction),       
do nothing, if it’s truthy (non-empty string in this case), print the value store in the variable.
       */