function integerAndFloatTwo(firstNum,secondNum,thirdNum){
    let sum = firstNum + secondNum + thirdNum;

    parseInt(sum) ===sum
    // or
   // Math.trunc(sum) === sum 
    ? console.log(`${sum} - Integer`)
    : console.log(`${sum} - Float`);
  
    
    }
    integerAndFloatTwo(9, 100, 1.1);
    integerAndFloatTwo(100, 200, 303);
    /*You will receive 3 numbers. 
    Your task is to find their sum and print it to the console with the addition 
    " - {type of the number (Integer or Float)}":
    Examples
    Input	
    9, 100, 1.1	
    
    Output
    110.1 - Float
    
    Input
    100, 200, 303	
    
    Output
    603 - Integer
    */