function perfectNumber(num){
    let result = 0; 
       
    // find all divisors which divides 'num' 
    for (let i = 1; i <= Math.sqrt(num); i++){ 
        // if 'i' is divisor of 'num' 
        if (num % i == 0){ 
            // if both divisors are same then  
            // add it only once else add both 
            if (i == (num / i)) 
                result += i; 
            else
                result += (i + num / i); 
        } 
    }
if(result % num  == 0){
    console.log('We have a perfect number!');
    
}
 else

    console.log( "It's not so perfect."); 
} 

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);

/*Perfect Number 
Write a function that receive a number and return if this number is perfect or NOT.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
Examples
Input	 	
6	 

Output
We have a perfect number!	 

Comments
1 + 2 + 3

Input
28	 

Output
We have a perfect number!	 


1 + 2 + 4 + 7 + 14

Input
1236498	 

Output
It's not so perfect.



Hint
Equivalently, a perfect number is a number that is half the sum of all of its positive divisors 
(including itself) => 6 is a perfect number,
 because it is the sum of 1 + 2 + 3 (all of which are divided without residue).


Read about the Perfect number here: https://en.wikipedia.org/wiki/Perfect_number
                   */