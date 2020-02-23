function dungeonestDark(data) {
    let bestRoom = 0;
    let health = 100;
    let coins = 0;

    let dungeon = data[0].split('|');
    for (let room of dungeon) {
        let tokens = room.split(' ');
        let monster = tokens[0];
        let value = Number(tokens[1]);

        if (monster === 'potion') {
            
            if (health + value > 100) {
                 console.log(`You healed for ${100 - health} hp.`);
                 health = 100;
            }
            else{
                console.log(`You healed for ${value} hp.`);
                health += value;
            }
            console.log(`Current health: ${health} hp.`);
            bestRoom++;
        }
        else if(monster === 'chest'){
            coins += value;
            console.log(`You found ${value} coins.`);
            bestRoom++;
        }else{
             health -= value;
             if(health <= 0){
                 console.log(`You died! Killed by ${monster}.`);
                 bestRoom++;
                 console.log(`Best room: ${bestRoom}`);
                 return;
             }
             else{
                 console.log(`You slayed ${monster}.`);
                 bestRoom++;
             }
        }
    }
    if(bestRoom === dungeon.length){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}


//dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);

/*Dungeonest Dark
As a young adventurer, you seek gold and glory in the darkest dungeons there are.
You have initial health 100 and initial coins 0.
You will be given a string, representing the dungeons rooms.

Each room is separated with '|' (vertical bar): "room1|room2|room3…"
Each room contains item or a monster and a number, separated by space. ("item/monster number")

If the first part is "potion": you are healed with the number in the second part.
But your health cannot exceed your initial health (100). Print: "You healed for {0} hp."
After that, print your current health: "Current health: {0} hp."

If the first part is "chest": You've found some coins, the number in the second part. Print: "You found {0} coins."
In any other case you are facing a monster, you are going to fight.

The second part of the room, contains the attack of the monster. You should remove the monster's attack from your health.
If you are not dead (health <= 0) you've slain the monster, and you should print ("You slayed {monster}.")

If you've died, print "You died! Killed by {monster}." and your quest is over.
Print the best room you`ve manage to reach: "Best room: {room}".

If you managed to go through all the rooms in the dungeon, print on the next three lines:
"You've made it!", "Coins: {coins}", "Health: {health}".

Input
You receive a string, representing the dungeons rooms, separated with '|' (vertical bar): "room1|room2|room3…".

Output
Print the corresponding messages, described above.





Examples

Input
rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000

Output
You slayed rat.
You slayed bat.
You healed for 10 hp.
Current health: 80 hp.
You slayed rat.
You found 100 coins.
You died! Killed by boss.
Best room: 6



Input
cat 10|potion 30|orc 10|chest 10|snake 25|chest 110

Output
You slayed cat.
You healed for 10 hp.
Current health: 100 hp.
You slayed orc.
You found 10 coins.
You slayed snake.
You found 110 coins.
You've made it!
Coins: 120
Health: 65





...! a game where every hero wins the day with shiny armor and a smile...
*/