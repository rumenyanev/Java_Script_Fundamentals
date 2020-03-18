function treasureLocator(coords){

    for (let i = 0; i < coords.length; i += 2) {

        let x = coords[i];
        let y = coords[i + 1];

        let area = getArea(x, y);

        console.log(area);
    }

    function getArea(x, y) {
        if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            return 'Tokelau';
        } else if (x >= 1 && x <= 3 && y >= 1 && y <= 3) {
            return 'Tuvalu';
        } else if (x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            return 'Samoa';
        } else if (x >= 0 && x <= 2 && y >= 6 && y <= 8) {
            return 'Tonga';
        } else if (x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            return 'Cook';
        } else {
            return 'On the bottom of the ocean';
        }
    }
}
treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);
/*You will be given a series of coordinates, leading to a buried treasure. 
Use the map to the right to write a program that locates on which island it is. 
After you find where all the treasure chests are, compose a list and print it on the console. 
If a chest is not on any of the islands, print “On the bottom of the ocean” to inform your
 treasure-hunting team to bring diving gear. 
 If the location is on the shore (border) of the island, it’s still considered to lie inside.
The input comes as an array with a variable number of elements that are numbers.
 Each pair is the coordinates to a buried treasure chest.
The output is a list of the locations of every treasure chest, either the name of an 
island or “On the bottom of the ocean”, printed on the console.

Examples
Input
[4, 2, 1.5, 6.5, 1, 3]

Output
On the bottom of the ocean
Tonga
Tuvalu

Input
[6, 4]

Output
Samoa
     */