
 function register() {
   //TODO
   let usernameValue = document.querySelector('#username').value;
   let emailValue = document.querySelector('#email').value;
   let passwordValue = document.querySelector('#password').value;

   if (usernameValue &&
       passwordValue &&
       emailValue.match(/(.+)@(.+).(com|bg)/gm)) {
    let result = document.querySelector('#result');

    let header = document.createElement('h1');
    header.innerText = "Successful Registration!";
    let usernameTextNode = document.createTextNode(`Username: ${usernameValue}`);
    let emailTextNode = document.createTextNode(`Email: ${emailValue}`);
    let passwordTextNode = document
        .createTextNode(`Password: ${'*'.repeat(passwordValue.length)}`);

     result.appendChild(header);
     result.appendChild(usernameTextNode);
     result.appendChild(document.createElement('br'));
     result.appendChild(emailTextNode);
     result.appendChild(document.createElement('br'));
     result.appendChild(passwordTextNode);

    setTimeout(function(){
     while (result.firstChild){
      result.removeChild(result.firstChild)
     }
    }, 5000);
   }
 }
