function storeProvision(currentProduct, productFromDelivery) {

    let availableProduct = restok(currentProduct, {});
    let productAfterDelivery = restok(productFromDelivery, availableProduct);


    for (const product of Object.keys(productAfterDelivery)) {
        console.log(`${product} -> ${productAfterDelivery[product]}`);

    }
    function restok(arr, obj) {
        for (let i = 0; i < arr.length; i += 2) {
            let product = arr[i];
            let quantity = Number(arr[i + 1]);

            if (!obj.hasOwnProperty(product)) {
                obj[product] = quantity;
            } else {
                obj[product] += quantity;
            }
        }
        return obj;
    }

}


storeProvision([
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