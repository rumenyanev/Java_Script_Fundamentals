function muOnline(array) {
    let rooms = array[0].split('|');
    let health = 100;
    let bitcoins = 0;
    let countRooms = 0;
    let allBitCoins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(' ');
        let command = currentRoom[0];
        let power = Number(currentRoom[1]);
        countRooms++;

        if (command === 'potion') {

            if (health + power > 100) {
                power = 100 - health;
                health = 100;
            }
            else {
                health += power;
            }
            console.log(`You healed for ${power} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        else if (command === 'chest') {
            bitcoins = Number(power);
            allBitCoins += Number(power);
            console.log(`You found ${bitcoins} bitcoins.`);

        }
        else {
            health -= Number(power);
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            }
            else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${countRooms}`);
                return;
            }

        }
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${allBitCoins}`);
    console.log(`Health: ${health}`);
}


muOnline(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
/*
muOnline(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

/*Problem 2. Mu Online
You have initial health 100 and initial bitcoins 0.
You will be given a string, representing the dungeons rooms.
Each room is separated with '|' (vertical bar): "room1|room2|room3…"
Each room contains a command and a number, separated by space. The command can be:

"potion"
You are healed with the number in the second part.
But your health cannot exceed your initial health (100).
First print: "You healed for {amount} hp.".
After that, print your current health: "Current health: {health} hp.".

"chest"
You've found some bitcoins, the number in the second part.
Print: "You found {amount} bitcoins."

In any other case you are facing a monster, you are going to fight.
The second part of the room, contains the attack of the monster.
 You should remove the monster's attack from your health.
If you are not dead (health <= 0) you've slain the monster, and you should print ("You slayed {monster}.")
If you've died, print "You died! Killed by {monster}." and your quest is over.
Print the best room you`ve manage to reach: "Best room: {room}".
If you managed to go through all the rooms in the dungeon, print on the next three lines:
"You've made it!", "Bitcoins: {bitcoins}", "Health: {health}".
Input / Constraints
You receive a string, representing the dungeons rooms, separated with '|' (vertical bar): "room1|room2|room3…".
Output
Print the corresponding messages, described above
Examples
Input
rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000


Output
You slayed rat.
You slayed bat.
You healed for 10 hp.
Current health: 80 hp.
You slayed rat.
You found 100 bitcoins.
You died! Killed by boss.
Best room: 6



Input
cat 10|potion 30|orc 10|chest 10|snake 25|chest 110


Output
You slayed cat.
You healed for 10 hp.
Current health: 100 hp.
You slayed orc.
You found 10 bitcoins.
You slayed snake.
You found 110 bitcoins.
You've made it!
Bitcoins: 120
Health: 65
*/