function radioCrystals(array){
    
    let cut = (crystal) => crystal / 4;
    let lap = (crystal) => crystal * 0.8;
    let grind = (crystal) => crystal - 20;
    let etch = (crystal) => crystal - 2;

    let targetSize = array[0];

    for (let i = 1; i < array.length; i++) {

        let micrones = array[i];
        console.log(`Processing chunk ${micrones} microns`);

        micrones = executeOperation(micrones, 'Cut', cut);
        micrones = executeOperation(micrones, 'Lap', lap);
        micrones = executeOperation(micrones, 'Grind', grind);
        micrones = executeOperation(micrones, 'Etch', etch);

        if (micrones + 1 === targetSize){
          micrones = xRay(micrones);
        }
        console.log(`Finished crystal ${micrones} microns`);
    }
    function xRay(crystal) {
        console.log('X-ray x1');
        return crystal += 1;
    }

    function transportAndWash(crystal) {
        console.log('Transporting and washing');
        return Math.floor(crystal);
    }

    function executeOperation(micrones, opStr, op) {

        let newSize = op(micrones);

        let counter = 0;

        while (newSize >= targetSize
        || Math.floor(targetSize - newSize) === 1) {
            micrones = newSize;
            newSize = op(micrones);
            counter++;
        }

        if (counter > 0) {
            console.log(`${opStr} x${counter}`);
            micrones = transportAndWash(micrones);
        }

        return micrones;
    }
}
radioCrystals([100,101.9])
//radioCrystals([1375, 50000]);

/*Radio Crystals 
You need to write a JS program that monitors the current thickness of the crystal and recommends 
the next procedure that will bring it closer to the desired frequency. 
To reduce waste and the time it takes to make each crystal your program needs to complete 
the process with the least number of operations. Each operation takes the same amount of time, 
but since they are done at different parts of the factory, 
the crystals have to be transported and thoroughly washed every time an operation different from the previous must be performed,
 so this must also be taken into account. When determining the order, 
 always attempt to start from the operation that removes the largest amount of material.

The different operations you can perform are the following:

Cut – cuts the crystal in 4
Lap – removes 20% of the crystal’s thickness
Grind – removes 20 microns of thickness
Etch – removes 2 microns of thickness
X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); do this after every batch of operations that remove material


At the beginning of your program, you will receive a number representing the desired final 
thickness and a series of numbers, representing the thickness of crystal ore in microns. 
Process each chunk and print to the console the order of operations and number of times 
they need to be repeated to bring them to the desired thickness.
The input comes as a numeric array with a variable number of elements. 
The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.
The output is the order of operation and how many times they are repeated, every operation on a new line. 
See the examples for more information.
Examples
Input	
[1375, 50000]	


Output
Processing chunk 50000 microns
Cut x2
Transporting and washing
Lap x3
Transporting and washing
Grind x11
Transporting and washing
Etch x3
Transporting and washing
X-ray x1
Finished crystal 1375 microns

*/