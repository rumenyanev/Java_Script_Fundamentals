function biscuitsFactoryTwo(input = []) {
    const [biscuits, workers, otherFactory] = input.map(Number);
    let totalBiscuits = 0;
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            totalBiscuits += Math.floor((biscuits * workers) * 0.75);
        } else {
            totalBiscuits += biscuits * workers;
        }
    }
    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);
    let percent = Math.abs((totalBiscuits - otherFactory) / otherFactory) * 100;
    if(totalBiscuits > otherFactory){
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
    }else {
        console.log(
         `You produce ${percent.toFixed(2)} percent less biscuits.` );
        }

}

biscuitsFactoryTwo(['78', '8', '16000']);

biscuitsFactoryTwo(['65', '12', '26000']);

/*Create a program that calculates how many biscuits your factory can make for a month (30 days)
and the percentage of production compared to another factory production.
First, you will receive the biscuits produced per day (per worker).
 After that, you will receive the count of the workers in your factory.
 Last, you will receive the number of biscuits that the competing factory produces for 30 days.
You need to calculate the production of your factory for 30 days.
Then you have to calculate how much more or fewer biscuits you produce compared to the other factory (in percentage).
 There will be no case where the factories will produce the same amount of biscuits.
Every third day the workers produce only 75% of the usual production.
Keep in mind that there can be only a whole biscuit after making calculations for each day – format them to the lower number.
In the end, print the amount of biscuits produced for 30 days in the following format:
"You have produced {countBiscuits} biscuits for the past month."
Then print the percentage of the difference, formatted to the 2nd decimal place, in the following format:
If your production is bigger than the other factory:
"You produce {percentage} percent more biscuits."
If not:
 "You produce {percentage} percent less biscuits."
Input
On the first line you will receive the amount of biscuits a worker produce a day – an integer number in the range [1…200]
On the second line you will receive the count of the workers in your factory – an integer number in the range [1…1000]
On the third line you will receive the amount of biscuits that the competing factory produces for 30 days – an integer number in the range[1…2000]

NOTE: The input will always be in the right format.
Output
In the end print the amount of biscuits produced for 30 days and the percentage of
the difference formatted to the 2nd decimal place in the format described above.
Constraints
Percentage can be over 100%.
There will be no case where the factories will produce the same amount of biscuits.

Examples
Input
78
8
16000


Output
You have produced 17160 biscuits for the past month.
You produce 7.25 percent more biscuits.


Comments
-78 biscuits a day
-8 employees
-17160 biscuit production your factory (keep in mind every third day the workers produce only 75% of the usual production)
-17160 – 16000 = 1160 - difference between your and the other factory production
-1160/16000 * 100 = 7.25% more biscuits.


Input
65
12
26000


Output
You have produced 21450 biscuits for the past month.
You produce 17.50 percent less biscuits.
Comments
-65 biscuits a day
-12 employees
-21450 biscuit production your factory
-26000 – 21450 = 4550 - difference between your and the other factory production
-4550/26000 * 100 = 17.50% more biscuits.

*/