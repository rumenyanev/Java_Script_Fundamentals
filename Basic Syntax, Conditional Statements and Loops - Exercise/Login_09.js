function login(input) {
    let username = input.shift();
    let password = username.split('').reverse().join('');

    let count = 0;
    for (let i = 0; i < input.length; i++) {

        let currentPassword = input[i];
        if (currentPassword !== password) {
            count++;
            if (count > 3) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');

        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
/*Login
You will be given a string representing a username.
The password will be that username reversed. Until you receive the correct password
print on the console "Incorrect password. Try again.".
When you receive the correct password print "User {username} logged in."
However on the fourth try if the password is still not correct print "User {username} blocked!"
and end the program. The input comes as an array of strings.
Examples
Input
['Acer','login','go','let me in','recA']

Output
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User Acer logged in.

Input
['momo','omom']

Output
User momo logged in.


Input
['sunny','rainy','cloudy','sunny','not sunny']

Output
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User sunny blocked!
*/