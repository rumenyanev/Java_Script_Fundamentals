function printDNA(dnaLength){

    let sequence = 'ATCGTTAGGG';

    let star = [2, 1, 0 ,1];

    for (let i = 0; i < dnaLength * 2; i += 2) {

        let symbol1 = sequence[i % sequence.length];
        let symbol2 = sequence[i % sequence.length + 1];

        console.log('*'.repeat(star[0]) + `${symbol1}` + '-'.repeat(6 - 2 - star[0] * 2) + `${symbol2}` + '*'.repeat(star[0]));

        let temp = star[0];
        star.shift();
        star.push(temp);
    }
}


printDNA(4);
printDNA(10);
/*Print DNA
Write a JS program that prints a DNA helix with length, specified by the user. 
The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. 
See the examples for more information.
The input comes as a single number. It represents the length of the required helix.

The output is the completed structure, printed on the console.
Examples
Input			
4	

Output
**AT**
*C--G*
T----T
*A--G*	 	

Input
10	

Output
**AT**
*C--G*
T----T
*A--G*
**GG**
*A--T*
C----G
*T--T*
**AG**
*G--G*
*/
