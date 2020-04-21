
class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    get totalCost() {        
        return this.storage.reduce((acc, el) => {return acc + el.price * el.quantity}, 0);
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        return;
    }

    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })
        return output.join('\n');
    }
}
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();

console.log(storage.storage);

console.log(storage.capacity);
console.log(storage.totalCost);	

/*Class Storage
Create a class Storage. It should have the following properties:
⦁	capacity – a number that decreases when adding a given quantity of products in storage
⦁	storage – list of products (object). Each product should have:
⦁	name - a string
⦁	price – a number (price is for a single piece of product)
⦁	quantity – a number
⦁	totalCost – sum of the cost of the products
⦁	addProduct – a function that receives a product and adds it to the storage
⦁	getProcuts – a function that returns all the products in storage in JSON format, each on a new line
The constructor should receive a capacity
Paste only the class Storage in judge (Note: all names should be as described)
Example
Test your Storage class
Input	
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);	


Output
{"name":"Cucamber","price":1.5,"quantity":15}
{"name":"Tomato","price":0.9,"quantity":25}
{"name":"Bread","price":1.1,"quantity":8}
2
53.8
*/