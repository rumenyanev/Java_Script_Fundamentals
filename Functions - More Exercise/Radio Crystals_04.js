function radioCrystals(array){

    array = array.map(Number);
    let targetLength = array[0];

    for(let i = 1; i < array.length; i++){
        let size = array[i];
        console.log(`Processing chunk ${size} microns`)
        workingCristal(targetLength, size);
    }
 
    function workingCristal(targetLength, size){
        if(size - targetLength > 1) {
            let process = 0;
            //CUT
            let cutLength = cut(size);
            while (cutLength >= targetLength || targetLength - parseInt(targetLength) === 1) {
                size = cutLength;
                cutLength = cut(size);
                process++;
            }
            if (process > 0) {
                console.log(`Cut x${process}`);
                size = wash(size);
                process = 0;
            }
            //LAP
            let lapLength = lap(size);
            while (lapLength >= targetLength || targetLength - parseInt(lapLength) === 1) {
                size = lapLength;
                lapLength = lap(size);
                process++;
            }
            if (process > 0) {
                console.log(`Lap x${process}`);
                size = wash(size);
                process = 0;
            }
            //GRIND
            let grindLength = grind(size);
            while (grindLength >= targetLength || targetLength - parseInt(grindLength) === 1) {
                size = grindLength;
                grindLength = grind(size);
                process++;
            }
            if (process > 0) {
                console.log(`Grind x${process}`);
                size = wash(size);
                process = 0;
            }
            //ETCH
            let etchLength = etch(size);
            while (etchLength >= targetLength || targetLength - parseInt(etchLength) === 1) {
                size = etchLength;
                etchLength = etch(size);
                process++;
            }
            if (process > 0) {
                console.log(`Etch x${process}`);
                size = wash(size);
            }
            //X-RAY
            if (targetLength - size === 1) {
                console.log(`X-ray x1`);
            }
        }else{
            wash(size);
        }
 
        console.log(`Finished crystal ${targetLength} microns`);
 
        function cut(size){
            return size/4;
        }
        function lap(size){
            return size * 0.8;
        }
        function grind(size){
            return size - 20;
        }
        function etch(size){
            return size - 2;
        }
        function wash(size){
            console.log("Transporting and washing");
            return Math.round(size);
        }
    }
}
radioCrystals([100,101.9])
/*
radioCrystals([1375, 50000]);

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