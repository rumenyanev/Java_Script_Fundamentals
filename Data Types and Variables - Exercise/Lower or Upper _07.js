function lowerOrUpper(input) {

    let simbol = input.charCodeAt();
    if (simbol >= 65 && simbol <= 90) {
        console.log("upper-case");
    } else if (simbol >= 97 && simbol <= 122) {
        console.log("lower-case");

    }
}
lowerOrUpper('L');
lowerOrUpper('f');
/*Lower or Upper
Write a function that prints whether a given character is upper-case or lower-case.
Examples
Input
'L'

Output
upper-case

Input
'f'

Output
lower-case
*/