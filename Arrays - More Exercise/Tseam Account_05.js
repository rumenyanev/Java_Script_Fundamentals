function tseamAccount(inputArray){
    let games = inputArray[0].split(' ');
 
    for (let i = 1; i < inputArray.length; i++) {
        let currentEl = inputArray[i].split(' ');
        let command = currentEl[0];
        let newGame = currentEl[1];
 
        if (command === 'Play') {
            break;
        } else if (command === "Install" && games.includes(newGame) === false) {
            games.push(newGame);
        } else if (command === 'Uninstall' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
        } else if (command === 'Update' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
            games.push(newGame);
        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];
 
            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expandedGame);
            }
        }
    }
 
    console.log(games.join(' '));

}
tseamAccount(['CS WoW Diablo',
               'Install LoL',
               'Uninstall WoW',
               'Update Diablo',
               'Expansion CS-Go',
               'Play!']);

tseamAccount(['CS WoW Diablo',
              'Uninstall XCOM',
              'Update PeshoGame',
              'Update WoW',
              'Expansion Civ-V',
              'Play!']);


/*Tseam Account
As a gamer, Peter has Tseam Account. He loves to buy new games. 
You are given Peter's account with all of his games-> strings, separated by space. 
Until you receive "Play!" you will be receiving commands which Peter does with his account.
`
You may receive the following commands:
Install {game}
Uninstall {game}
Update {game}
Expansion {game}-{expansion}

If you receive Install command, you should add the game at last position in the account, 
but only if it isn't installed already.

If you receive Uninstall command, delete the game if it exists.

If you receive Update command, you should update the game if it exists and place it on last position.

If you receive Expansion command, you should check if the game exists and 
insert after it the expansion in the following format: "{game}:{expansion}";

Input
On the first input line you will receive Peter`s account - sequence of game names, separated by space.
Until you receive "Play!" you will be receiving commands. 

Output
As output you must print Peter`s Tseam account. 
Constraints
The command will always be valid.
The game and expansion will be strings and will contain any character, except '-'.
Allowed working time / memory: 100ms / 16MB.
Examples
Input		
['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']	

Output
CS CS:Go LoL Diablo	


Comments
We receive the account => CS, WoW, Diablo
We Install LoL => CS, WoW, Diablo, LoL
Uninstall WoW => CS, Diablo, LoL
Update Diablo => CS, LoL, Diablo
We add expansion => CS, CS:Go, LoL, Diablo
We print the account.


Input
['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']	


Output
CS Diablo WoW	
                           */