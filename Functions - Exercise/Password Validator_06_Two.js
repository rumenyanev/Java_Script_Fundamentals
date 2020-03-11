function passwordValidatorTwo(password){
    function containsOnlyLettersAndDigits(password) {
        let isValid = false;
        for (let ch of password) {
            if (ch>='A'&& ch <= 'Z'||
                ch>= 'a'&& ch <='z' ||
                ch>= '0'&& ch <= '9') {
                isValid = true;
                
            }
        }
        return isValid;
    }
    
    function leastTwoDigits(password) {
        let countDigit = 0;
        for (let ch of password) {
            if (ch>= 0 && ch<= 9) {
                countDigit++;
                if(countDigit == 2){
                    break;
                }
            }
        }
        return countDigit === 2 ? true : false ;
    }
    let leastTwoDigitsValue = leastTwoDigits(password);
    let containsOnlyLettersAndDigitsValue = containsOnlyLettersAndDigits(password);
    if ( password.length >= 6 && password.length <= 10 && containsOnlyLettersAndDigitsValue && leastTwoDigitsValue){
        console.log("Password is valid");
    }
    else {
        if (!(password.length >= 6 && password.length <= 10)){
            console.log("Password must be between 6 and 10 characters");
        }
      
        if (!containsOnlyLettersAndDigits){
            console.log("Password must consist only of letters and digits");
        }
        
        if (!leastTwoDigits){
            console.log("Password must have at least 2 digits");
        }
    }
}
passwordValidatorTwo('logIn');
//passwordValidatorTwo('MyPass123');
//passwordValidatorTwo('Pa$s$s');

/*Password Validator
Write a function that checks if a given password is valid. Password validations are:

The length should be 6 - 10 characters (inclusive)
It should consists only of letters and digits
It should have at least 2 digits
If a password is valid print "Password is valid".

If it is NOT valid, for every unfulfilled rule print a message:
"Password must be between 6 and 10 characters"
"Password must consist only of letters and digits"
"Password must have at least 2 digits"
Examples

Input
'logIn'

Output
Password must be between 6 and 10 characters
Password must have at least 2 digits

Input
'MyPass123'

Output
Password is valid


Input
'Pa$s$s'

Output
Password must consist only of letters and digits
Password must have at least 2 digits
*/