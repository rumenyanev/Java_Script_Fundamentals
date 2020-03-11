function passwordValidator(password) {
    
    function isValidPasswordLength(passwordLength) {
        let isValid = true;
        if (passwordLength < 6 || passwordLength > 10) {
            isValid = false;
        }
        return isValid;
    }
    let isValidPassLengthValue = isValidPasswordLength(password.length);
    if (!isValidPassLengthValue) {
        console.log('Password must be between 6 and 10 characters');
    }

    function isBetweenRange(ch,start,end) {
        return ch.charCodeAt(0) >= start.charCodeAt(0) && ch.charCodeAt(0) <= end.charCodeAt(0);
    }
    
    function containsOnlyLettersAndDigits(password) {
        let isValid = true;
        for (let ch of password) {
            if (!(
               isBetweenRange(ch, 'A', 'Z') ||
                isBetweenRange(ch, 'a', 'z') ||
                   isBetweenRange(ch, '0', '9'))
            ) {
                isValid = false;
                
            }
        }
        return isValid;
    }
    let containsOnlyLettersAndDigitsValue = containsOnlyLettersAndDigits(password);
    if (!containsOnlyLettersAndDigitsValue) {
        console.log('Password must consist only of letters and digits');
    }

    function leastTwoDigits(password) {
        let countDigit = 0;
        for (let ch of password) {
            if (isBetweenRange(ch, '0', '9')) {
                countDigit++;
                if(countDigit === 2){
                    break;
                }
            }
        }
        return countDigit === 2 ? true : false ;
    }
    let leastTwoDigitsValue = leastTwoDigits(password);
    if(!leastTwoDigitsValue){
        console.log('Password must have at least 2 digits');
        
    }
    if(isValidPassLengthValue && containsOnlyLettersAndDigitsValue && leastTwoDigitsValue){
    console.log('Password is valid');
    }

}
//"[^A-Za-z0–9]/g";
//“/[\W_]/g”

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');

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