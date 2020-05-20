function solve(input){

    let storage = new Map();

    for (const element of input) {
        let [product,quantity] = element.split(' ');
        quantity = Number(quantity);
        
       if(storage.has(product)){
           let currentQuantity = storage.get(product);
           quantity += currentQuantity;
       }
       storage.set(product,quantity);
    }

  for (const [key,value] of storage) {
      console.log(`${key} -> ${value}`);
      
  }
  

}




solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);

/*⦁	Storage
Write a function that takes a certain number of items and their quantity. 
If the same item appears more than once, add the new amount to the existing one. 
At the end print all the items and their amount without sorting them. 
The input comes as array of strings. Try using a Map().
Example
Input	
['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']	


Output
tomatoes -> 10
coffee -> 45
olives -> 100
*/