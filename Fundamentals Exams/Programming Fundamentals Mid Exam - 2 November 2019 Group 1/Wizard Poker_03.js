function wizardPoker(input = []) {

    let cards = input.shift().split(':');
    let output = [];
    const addCard = (cardName) => {
        if (cards.includes(cardName)) {
            output.push(cardName);
        } else {
            console.log('Card not found.');
        }
    }
    const insertCard = (cardName, index) => {
        if (cards.includes(cardName) && index >= 0 && index < output.length) {
            output.splice(index, 0, cardName);
        } else {
            console.log('Error!');
        }
    }
    const removeCard = (cardName) => {
        let index = output.indexOf(cardName);
        if (index === -1) {
            console.log('Card not found.');
        } else {
            output.splice(index, 1);
        }
    }
    const swapCard = (firstCard, secondCard) => {
        let firstIndex = output.indexOf(firstCard);
        let secondIndex = output.indexOf(secondCard);
        let temp = output[firstIndex];
        output[firstIndex] = output[secondIndex];
       output[secondIndex] = temp;
    }
    const shuffleDeck = () => {
        output.reverse();
    }
   
    
    for(const line of input){
        
        if(line.includes('deck')){
            shuffleDeck();
        }
        else{
            let [command,cardName,token]=line.split(' ');
            if(command == 'Add'){
                addCard(cardName);
            }else if(command === 'Insert'){
                token = Number(token);
                insertCard(cardName,token);
            }
            else if(command === 'Remove'){
                removeCard(cardName);
            }
            else if(command === 'Swap'){
                swapCard(cardName,token);
            }
        }
    }
console.log(output.join(' '));

}


wizardPoker([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'
]

);
/*
wizardPoker(['Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready']);

/*Problem 3. Wizard Poker
The world is threatened by an enemy never seen before.
Your hero's weapon seems to be useless against the enemy.
But your hero has a super strong arsenal full of powerful magic cards
 and will challenge the enemy to a card duel to the death and he needs your help to create a deck.
Create a program that adds, inserts, removes and swaps cards in a new deck.
On the first line, you will receive all cards in the form of strings separated by ":".
Until you receive the "Ready" command, you will get commands in the format:
Add {card name}
Adds the card to the end of the deck.
If the card doesn't exist in print "Card not found."
Insert {card name} {index}
Insert the card at the given index of the deck.
If the card doesn't exist or the index is invalid print "Error!"
Remove {card name}
Remove the card from the deck.
If the card doesn't exist in print "Card not found."
Swap {card name 1} {card name 2}
Swap the positions of the cards.
Input will always be valid
Shuffle deck
Reverse the deck
When you receive the "Ready" command print the cards in the deck separated by space.
Input
On the 1st line, you will receive the arsenal of all cards available separated by ":".
On the next lines, until you receive the "Ready" command you will receive commands to arrange your deck.
Output
Print the cards in your deck on a single line, separated by a single space.
Examples

Input
Innervate:Moonfire:Pounce:Claw:Wrath:Bite
Add Moonfire
Add Pounce
Add Bite
Add Wrath
Insert Claw 0
Swap Claw Moonfire
Remove Bite
Shuffle deck
Ready

Output
Wrath Pounce Claw Moonfire


Comments
First command is Add Moofire and now our deck has one card in it.
1. Moonfire Pounce
2. Moonfire Pounce Bite
3. Moonfire Pounce Bite Wrath
4. Claw Moonfire Pounce Bite Wrath
5. Moonfire Claw Pounce Bite Wrath
6. Moonfire Claw Pounce Wrath
7. Wrath Pounce Claw Moonfire

Input
Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop
Add Pop
Add Exodia
Add Aso
Remove Wrath
Add SineokBqlDrakon
Shuffle deck
Insert Pesho 0
Ready


Output
Card not found.
Card not found.
Error!
Aso Exodia Pop
*/