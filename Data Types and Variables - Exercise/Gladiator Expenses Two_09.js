function gladiatorExpensesTwo(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;
    let brokenHelmet = Math.floor(lostFights / 2) * helmetPrice;
    let brokenSword = Math.floor(lostFights / 3) * swordPrice;
    let brokenShield = Math.floor(lostFights / 6) * shieldPrice;
    let brokenArmor = Math.floor(lostFights / 12) * armorPrice;
    totalPrice = brokenHelmet + brokenSword + brokenShield + brokenArmor;
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
    
}
gladiatorExpensesTwo(7, 2, 3, 4, 5);
gladiatorExpensesTwo(23, 12.50, 21.50, 40, 200);
/*Gladiator Expenses
As a gladiator, Peter has to repair his broken equipment when he loses a fight.
His equipment consists of helmet, sword, shield and armour. You will receive the Peter`s lost fights count.
Every second lost game, his helmet is broken.
Every third lost game, his sword is broken.
When both his sword and helmet are broken in the same lost fight, his shield also brakes.
Every second time, when his shield brakes, his armour also needs to be repaired.
You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment.

Input / Constraints

You will receive 5 parameters to your function:
First parameter – lost fights count – integer in the range [0, 1000].
Second parameter – helmet price - floating point number in range [0, 1000].
Third parameter – sword price - floating point number in range [0, 1000].
Fourth parameter – shield price - floating point number in range [0, 1000].
Fifth parameter – armor price - floating point number in range [0, 1000].
Output
As output you must print Peter`s total expenses for new equipment: "Gladiator expenses: {expenses} aureus"
Allowed working time / memory: 100ms / 16MB.
Examples
Input
7,
2,
3,
4,
5

Output
Gladiator expenses: 16.00 aureus

Comment
Trashed helmet -> 3 times
Trashed sword -> 2 times
Trashed shield -> 1 time
Total: 6 + 6 + 4 = 16.00 aureus;

Input
23,
12.50,
21.50,
40,
200

Comment
Gladiator expenses: 608.00 aureus
                                         */