function commonElements(arr1,arr2){

for(let i = 0; i< arr1.length ; i++){
    for(let j = 0; j< arr2.length;j++){
        if(arr1[i] === arr2[j]){
            console.log(arr1[i]);
            
        }
    }
}
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ''],['s', 'o', 'c', 'i', 'a', 'l']);
/*Common Elements
Write a function, which prints common elements in two string arrays. Print all matches on separate lines. 
Compare the first array with the second array.
Examples

Input 

['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']


Output
hello
4


Input
['S', 'o', 'f', 't', 'U', 'n', 'i', ''],
['s', 'o', 'c', 'i', 'a', 'l']


Output
o
i 
      */
