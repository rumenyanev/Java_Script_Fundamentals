function solveTwo() {
    let newText = document.getElementById('input').innerText;
    let sentances = [];
    sentances = newText.match(/[^\.!\?]+[\.!\?]+/g);
    let par = [];
    let cycle = sentances.length;
    for (let i = 0; i < cycle; i++) {     // Gets every three sentences
        par[i] = sentances.splice(0, 3).join('');
    }
    par = par.filter(item => item);//Removes the empty spaces
 
    //Bellow selects the output div and appends each element of the array in a new <p>
    let paragraph = document.getElementById('output');
    for (let i = 0; i < par.length; i++) {
        let parHTML = document.createElement('p');
        parHTML.textContent = par[i];
        paragraph.appendChild(parHTML);
    }
}