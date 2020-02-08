function vacation(people, type, day) {
    let price = 0;
    if (people>=100 && type =='Business'){
        people -=10;
    }
  switch (type) {

      case 'Students':
          if (day ==='Friday') {
              price = 8.45 * people;
          } else if (day === 'Saturday') {
              price = 9.80 * people;
          } else if (day === 'Sunday') {
              price = 10.46 * people;
          }
          if (people >= 30) {
              price *= 0.85;
          }
          break;
      case 'Business':
          if (day ==='Friday') {
              price = 10.90 * people;
          } else if (day === 'Saturday') {
              price = 15.60 * people;
          } else if (day === 'Sunday') {
              price = 16 * people;
          }
        
          break;
      case 'Regular':
          if (day === 'Friday') {
              price = 15 * people;
          } else if (day === 'Saturday') {
              price = 20 * people;
          } else if (day === 'Sunday') {
              price = 22.50 * people;
          }
          if (people >= 10 && people <= 20) {
              price *= 0.95;
          }

  }
console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
/*Vacation
You are given a group of people, type of the group, and day of the week they are going to stay.
Based on that information calculate how much they have to pay and print that price on the console.
Use the table below. In each cell is the price for a single person. The output should look like that:
 "Total price: {price}". The price should be formatted to the second decimal point.
	        Friday  	Saturday 	Sunday
Students   	8.45	     9.80   	10.46
Business	10.90	     15.60	      16
Regular   	15          20      	22.50


There are also discounts based on some conditions:
⦁	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
⦁	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
⦁	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5%
You should reduce the prices in that EXACT order
Examples
Input
30,
"Students",
"Sunday"

Output
Total price: 266.73


Input
40,
"Regular",
"Saturday"

Output
Total price: 800.00
*/