function lowerOrUpperThree(char){
    let result = '';
if(char >= 'a' && char <= 'z'){
    result = 'lower-case';
}else{
    result = 'upper-case';
}
console.log(result);

}
lowerOrUpperThree('L');
lowerOrUpperThree('f');
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