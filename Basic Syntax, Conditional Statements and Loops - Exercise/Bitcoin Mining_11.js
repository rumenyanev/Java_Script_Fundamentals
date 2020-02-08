function bitcoinMining(input) {

    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    let bitcoinCount = 0;
    let firstDay;
    let totalMoney = 0;

    for (let i = 1; i <= input.length; i++) {
        let goldMined = input[i - 1];
        if (i % 3 === 0) {
            goldMined *= 0.7;
            totalMoney += goldMined * goldPrice;
        }
        else {
            totalMoney += goldMined * goldPrice;
        }
        if (totalMoney >= bitcoinPrice) {
            if (firstDay === undefined) {
                firstDay = i;
            }
            bitcoinCount += parseInt(totalMoney / bitcoinPrice);
            totalMoney -= parseInt(totalMoney / bitcoinPrice) * bitcoinPrice;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstDay !== undefined) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}
bitcoinMining([100, 200, 300]);
//bitcoinMining([50, 100]);
//bitcoinMining([3124.15, 504.212, 2511.124]);
/*Bitcoin "Mining"
Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine.
Your shift consists of a certain number of days where you mine an amount of gold in grams.
 Your program will receive an array with the amount of gold you mined each day,
 where the first day of your shift is the first index of the array.
 Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day.
 For the different exchanges use these prices:

1 Bitcoin	11949.16 lv.
1 g of gold	67.51 lv.

Input
You will receive an array of numbers, representing your shift at the mine.
Output
Print on the console these lines in the following formats:
First line prints the total amount of bought bitcoins:
 "Bought bitcoins: {count}"
Second line prints which day you bought your first bitcoin:
 "Day of the first purchased bitcoin: {day}"
In case you did not purchased any bitcoins, do not print the second line.
Third line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point:
 "Left money: {money} lv."

Constraints
The input array may contain up to 1,000 elements
The numbers in the array are in range [0.01..5,000.00] inclusive
Allowed time/memory: 100ms/16MB
Examples

Input
[100,200,300]

Output
Bought bitcoins: 2
Day of the first purchased bitcoin: 2
Left money: 10531.78 lv.

Scroll down to see the explanation for the first example and more examples.
Explanation
Day 1 – you dig up 100 g of gold then exchange it for 6751.00 lv.

Day 2 – you dig up 200 g of gold then exchange it for 13,502.00 lv. and the total amount of money is 20,253.00 lv.
 Then you buy 1 Bitcoin which leaves you with 8,303.84 lv. Also this purchase is the first day you bought bitcoin.

Day 3 – you dig up 300 g of gold but then 30% of it is stolen and your gold drops to 210 g which you exchange for 14,177.10 lv.
making your total amount of money 22,480.94 lv. Then you buy 1 Bitcoin making the final
 amount of money that you are left with 10,531.78 lv. with 2 bought Bitcoins.


Input
[50, 100]

Output
Bought bitcoins: 0
Money left: 10126.50 lv.


Input
[3124.15, 504.212, 2511.124]

Output
Bought bitcoins: 30
Day of the first purchased bitcoin: 1
Money left: 5144.11 lv.
*/