function storeProvisionTwo(currentStock,orderedProduct){

    let products = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        let productName = currentStock[i];
        let productQuantity = Number(currentStock[i + 1]);
        products[productName] = productQuantity;
        
    }
    for (let i = 0; i < orderedProduct.length; i += 2) {
      let productName = orderedProduct[i];
      let productQuantity = Number(orderedProduct[i + 1]);

        if(products.hasOwnProperty(productName)){
            products[productName] += productQuantity;
        }
        else{
            products[productName] = productQuantity;
        }
    }
for (let key in products) {
   console.log(`${key} -> ${products[key]}`);
   
}

}


storeProvisionTwo([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
     'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);

/*Store Provision
You will receive two arrays. The first array represents a current stock of the local store.
The second array will contain products which the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and on every odd index will hold the quantity of that product.
The second array could contain products that are already in the local store.
If that happens increase the quantity for the given product .
You should store them into an object, and print them in the following format: (product -> quantity)
All of the arrays values will be strings.
Examples
Input
[
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]


Output
Chips -> 5
CocaCola -> 9
Bananas -> 44
Pasta -> 11
Beer -> 2
Flour -> 44
Oil -> 12
Tomatoes -> 70

*/