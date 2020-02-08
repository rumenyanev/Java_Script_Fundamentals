function concatenateNames(firstName, secondName, delimiter) {
    console.log(`${firstName}${delimiter}${secondName}`);
}
concatenateNames('John', 'Smith', '->');
concatenateNames('Jan', 'White', '<->');
concatenateNames('Linda', 'Terry', '=>');
/*⦁	Concatenate Names
Write a function which receives two names as string parameters and a delimiter.
 Print the names joined by the delimiter.
Examples
Input
'John',
'Smith',
'->'

Output
John->Smith


Input
'Jan',
'White',
'<->'

Output
Jan<->White


Input
'Linda',
'Terry',
'=>'

Output
Linda=>Terry


Hints
Use string interpolation.
 	*/