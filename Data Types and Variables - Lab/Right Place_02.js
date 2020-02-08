function rightPlace(string,char,otherString){
let result = string.replace('_', char);
let output = result === otherString ? 'Matched' : 'Not Matched';
console.log(output);


}
rightPlace('Str_ng', 'I', 'Strong'	);
rightPlace('Str_ng', 'i', 'String'	);
/*⦁	Right Place
You will receive 3 parameters (string, char, string).
First string will be a word with a missing char replaced with a underscore '_'
You have to replace the character with the missing part (underscore) from the first string and compare the result with the second string.
If they are equals you should print "Matched", otherwise print "Not Matched".
Examples
Input	
'Str_ng', 'I', 'Strong'	

Output
Not Matched


Input
'Str_ng', 'i', 'String'	

Output
Matched
                     */