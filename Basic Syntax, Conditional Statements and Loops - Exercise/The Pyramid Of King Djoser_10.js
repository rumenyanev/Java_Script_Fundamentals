function thePyramidOfKingDjoser(base, increment) {
    let allStone = 0;
    let allMarble = 0;
    let allLapis = 0;
    let allGold = 0;
    let currentBase = base;
    let rows = 0;

    while (currentBase > 2) {
        let marble = currentBase * 4 - 4;
        let stone = currentBase * currentBase - marble;
        allStone += stone;

        rows++;
        if (rows % 5 === 0) {
            allLapis += marble;
        } else {
            allMarble += marble;
        }
        currentBase -= 2;
    }
    rows++;
    let gold = currentBase * currentBase;

    stone = Math.ceil(allStone * increment);
    marble = Math.ceil(allMarble * increment);
    lapis = Math.ceil(allLapis * increment);
    allGold = Math.ceil(gold * increment);
    totalHeight = Math.floor(rows * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${allGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);

}

thePyramidOfKingDjoser(11,1);
//thePyramidOfKingDjoser(11,0.75);
//thePyramidOfKingDjoser(12,1);
/*The Pyramid of King Djoser
Write a JS program that calculates how much resources will be required for the construction of a pyramid.
It is made out of stone, marble, lapis lazuli and gold.
 Your program will receive an integer that will be the base width and length of the pyramid and an increment,
  that is the height of each step. The bulk is made out of stone, while the outer layer is made out of marble.
  Every fifth step’s outer layer is made out of lapis lazuli instead of marble. The final step is made out of gold.
The pyramid is built with 1x1 blocks with height equal to the given increment.
The first step of the pyramid has width and length equal to the given base and every next step
is reduced by 2 blocks (1 from each side). The height of every step equals the given increment.
See the drawing for an example. White steps are covered in marble,
blue steps are covered in lapis lazuli (every fifth layer from the bottom),
and yellow steps are made entirely out of gold (top-most step).

Since the outer layer of each step is made of a decorative material,
to calculate the required stone for one step,
reduce the width and length by 2 blocks (one from each side),
find it’s area and multiply it by the increment.
The rest of the step is made out of lapis lazuli for every fifth step from the bottom
and marble for all other steps. To find the amount needed, you may, for example,
find its perimeter and reduce it by 4 (to compensate for the overlapping corners)
and multiply the result by the increment. See the drawing for details (grey is stone, white is decoration).

5x5 step
Stone required – 9 x increment
Marble required – 16 x increment	7x7 step
Stone required – 25 x increment
Marble required – 24 x increment	8x8 step
Stone required – 36 x increment
Marble required – 28 x increment

Note the top-most layer is made entirely out of gold, with height equal to the given increment.
See the examples for complete calculations.
Input
You will receive two number parameters base and increment.
Output
Print on the console on separate lines the total required amounts of each material rounded up
and the final height of the pyramid rounded down, as shown in the examples.
Constraints
The base will always be an integer greater than zero
The increment will always be a number greater than zero
Number.MAX_SAFE_INTEGER will never be exceeded for any of the calculations

Examples
Input
11,
1

Output
Stone required: 165
Marble required: 112
Lapis Lazuli required: 8
Gold required: 1
Final pyramid height: 6

Explanation
Step	Size	  Stone	  Marble	Lapis	Gold
 1st	11x11	   81	  40	    -	     -
 2nd	9x9	       49	  32	    -	     -
 3rd	7x7	       25	  24	    -	     -
 4th	5x5        9	  16	    -	     -
 5th	3x3        1	  -	        8	     -
 6th	1x1 	   -	  -       	-	     1
 total	Height=6  165	 112	    8	     1

Input
11,
0.75

Output
Stone required: 124
Marble required: 84
Lapis Lazuli required: 6
Gold required: 1
Final pyramid height: 4


Explanation
Total stone is 81*0.75+49*0.75+25*0.75+9*0.75+1*0.75 = 123.75, we round up to 124.
Total marble is 40*0.75+32*0.75+24*0.75+16*0.75 = 84.
Total lapis lazuli is 8*0.75 = 6.
Total gold is 1*0.75 = 0.75, we round up to 1.
Total height is 4.5 (6 steps times 0.75), we round down to 4.


Input
12,
1

Output
Stone required: 220
Marble required: 128
Lapis Lazuli required: 12
Gold required: 4
Final pyramid height: 6


Input
23,
0.5

Output
Stone required: 886
Marble required: 228
Lapis Lazuli required: 36
Gold required: 1
Final pyramid height: 6

*/