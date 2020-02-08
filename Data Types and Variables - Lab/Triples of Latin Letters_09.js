function triplesOfLatinLetters(n){

    for(let i = 0; i < n; i++){
        let firstChar = String.fromCharCode(i + 97);
        for(let j = 0; j < n; j++){
            let secondChar = String.fromCharCode(j + 97);
            for(let k = 0; k < n; k++){
                let thirdChar = String.fromCharCode(k + 97);
                console.log(`${firstChar}${secondChar}${thirdChar}`);
            }
        }
    }
}
triplesOfLatinLetters(3);
/*⦁	Triples of Latin Letters
Write a program to receive a number n and print all triples of the first n small Latin letters, ordered alphabetically:
Examples
Input	
3	

Output
aaa
aab
aac
aba
abb
abc
aca
acb
acc
baa
bab
bac
bba
bbb
bbc
bca
bcb
bcc
caa
cab
cac
cba
cbb
cbc
cca
ccb
ccc



Hints
Perform 3 nested loops from 0 to n. For each number num print its corresponding Latin letter as follows:
 
The function String.fromCharCode() gets the value in decimal and transforms it to a character from the ASCII t*/