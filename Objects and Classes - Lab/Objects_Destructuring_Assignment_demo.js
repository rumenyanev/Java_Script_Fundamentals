//var number;
//var letter;
const arr = [12,'Stamat',55,'argument'];
//number = arr[0];
//letter = arr[1];

// or destructuring assignment

//var[number,letter] = arr; //print 1,3 element in array
//var[,number,,letter]= arr;//print 2,4 element in array
//var[,number,letter]= arr;//print 2,3 element in array
//......
var[number,letter,...rest]= arr;

console.log(number,letter);
console.log(arr);
console.log(number,letter,rest);



