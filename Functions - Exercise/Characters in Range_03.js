function charactersInRange(startChar, endChar) {
  let startValue = startChar.charCodeAt(0);
  let endValue = endChar.charCodeAt(0);

  if (startValue > endValue) {
    let temp = startValue;
    startValue = endValue;
    endValue = temp;
  }
  let result = '';
  for (let i = startValue + 1; i < endValue; i++) {
    result += String.fromCharCode(i) + ' ';

  }
  console.log(result);

}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
/*Characters in Range
Write a function that receives two characters and prints on a single line all
 the characters in between them according to the ASCII code.
  Keep in mind that the second character code might be before the first one inside the ASCII table.
Examples
Input
'a',
'd'
Output
b c

Input
'#',
':'

Output
$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9


Input
'C',
'#'

Output
$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
*/