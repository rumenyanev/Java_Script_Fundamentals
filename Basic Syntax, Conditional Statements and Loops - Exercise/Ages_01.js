function ages(age){
    if(age >= 0 && age <= 2){
        console.log('baby');
    }
    else if(age >= 3 && age <= 13){
        console.log('child');
    }
    else if(age>=14 && age <= 19){
        console.log('teenager');
    }
    else if(age >= 20 && age <= 65){
        console.log('adult');
    }
    else if(age >= 66) {
        console.log('elder');
    }
    else{
        console.log('out of bounds');
        
    }

}
ages(20);
ages(1);
ages(100);
/*Ages
Write a function that determines whether based on the given age a person is: 
baby, child, teenager, adult, elder. The input comes as single number parameter. 
The bounders are:
0-2 – baby; 
3-13 – child; 
14-19 – teenager;
20-65 – adult;
>=66 – elder; 
In all other cases - out of bounds
All the values are inclusive.
Examples
Input	
20	

Output
adult

Input
1

Output
baby

Input
100	

Output
elder

*/