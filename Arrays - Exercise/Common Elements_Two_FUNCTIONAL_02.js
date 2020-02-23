function commonElementsTwo(arr1 = [],arr2 = []){
arr1.map((element)=>{
    if(arr2.includes(element)){
        console.log(element);
        
    }
})

}
commonElementsTwo(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);
commonElementsTwo(['S', 'o', 'f', 't', 'U', 'n', 'i', ''],['s', 'o', 'c', 'i', 'a', 'l']);
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
