function catalogue(arr) {
  let catalogueMap = new Map();  //////solution By 'willystyle'

  for (let line of arr) {
      let [product, price] = line.split(' : ');
      price = Number(price);
      let firstLetter = product[0];

      if (!catalogueMap.has(firstLetter)) {
          catalogueMap.set(firstLetter, new Map());
      }

      if (!catalogueMap.get(firstLetter).has(product)) {
          catalogueMap.get(firstLetter).set(product, 0);
      }

      catalogueMap.get(firstLetter).set(product, price);
  }

  catalogueMap = [...catalogueMap].sort();

  for (let [firstLetter, products] of catalogueMap) {
      console.log(`${firstLetter}`);
      
      

      products = [...products].sort((a, b) => a[0].localeCompare(b[0]));

      for (let [product,price] of products) {
          console.log(` ${product}: ${price}`);
          
          
      }
  }
}

catalogue(['Appricot : 20.4',
            'Fridge : 1500',
            'TV : 1499',
            'Deodorant : 10',
            'Boiler : 300',
            'Apple : 1.25',
            'Anti-Bug Spray : 15',
            'T-Shirt : 10'
          ]);

/*Catalogue
You have to create a sorted catalogue of store products.
You will be given the products’ names and prices.
You need to order them by alphabetical order.
The input comes as array of strings.
 Each element holds info about a product in the following format:
“{productName} : {productPrice}”
The product’s name will be a string, which will always start with a capital letter, and the price will be a number.
You can safely assume there will be NO duplicate product input.
The comparison for alphabetical order is case-insensitive.
As output you must print all the products in a specified format.
They must be ordered exactly as specified above.
The products must be divided into groups, by the initial of their name.
The group’s initial should be printed, and after that the products should be
printed with 2 spaces before their names. For more info check the examples.
Examples
Input
Appricot : 20.4
Fridge : 1500
TV : 1499
Deodorant : 10
Boiler : 300
Apple : 1.25
Anti-Bug Spray : 15
T-Shirt : 10


Output
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/