function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;

    let number = num.toString();
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            evenSum += Number(number[i]);
        } else {
            oddSum += Number(number[i]);
        }
    }

    
    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);

/*Odd and Even Sum
You will receive a single number.
You have to write a function, that returns the sum of all even and all odd digits from that number.
Examples
Input
 1000435


 Output
 Odd sum = 9, Even sum = 4

 Input
 3495892137259234

 Output
 Odd sum = 54, Even sum = 22
*/