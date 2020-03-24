
//remove element in last position in array WITHOUT fumction pop()
/*function popWithoutPOP(array) {
   array.length = array.length -1;
   console.log(array);
}
popWithoutPOP([7, -2, 8, 9]);
popWithoutPOP([3, -2, 0, -1]);  */


//remove element in first position in array WITHOUT fumction shift()
 function shiftWithoutShift(array) {
    let newArr = [];
    for (let i = 1; i <=array.length-1 ; i++) {
        newArr[+newArr.length] = array[i];
    }
    console.log(newArr);
}
shiftWithoutShift([7, -2, 8, 9]);
shiftWithoutShift([3, -2, 0, -1]);  


//add element in first position in array WITHOUT fumction unshift()
function shiftWithoutUnshift(num, array) {
    let newArr = [];
    newArr[0] = num;
    for (let i = 1; i <= array.length - 1; i++) {
        newArr[i] = array[i];
    }
    console.log(newArr);
}
shiftWithoutUnshift(6, [7, -2, 8, 9]);
shiftWithoutUnshift(8, [3, -2, 0, -1]);   
/*
//add element in last position in array WITHOUT fumction push()
function shiftWithoutPush(array,num) {
   array[array.length] = num;
    console.log(array);
 
}
shiftWithoutPush([7, -2, 8, 9],6);
shiftWithoutPush([3, -2, 0, -1],8); */