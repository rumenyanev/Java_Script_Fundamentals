function palindromeIntegers(array) {
    function isPalindrome(text) {
        isPalindromeValue = true;
        for (let i = 0; i < Math.floor(text.length / 2); i++) {
            if (text[i] !== text[text.length - 1 - i]) {
                isPalindromeValue = false;
                break;
            }
        }
     return isPalindromeValue;
    }
   for(let num of array){
       console.log(isPalindrome(num.toString()));
       
   }
}
palindromeIntegers([123, 323, 421, 121]);
//palindromeIntegers([32, 2, 232, 1010]);

/*Palindrome Integers
A palindrome is a number which reads the same backward as forward, such as 323 or 1001.
Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.
Examples
Input
[123,323,421,121]



Output

false
true
false
true

Input
[32,2,232,1010]


Output

false
true
true
false






Hints
Read more about palindromes: https://en.wikipedia.org/wiki/Palindrome*/