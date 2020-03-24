function listOfProducts(array) {
    let sortedArray = array.sort();
    for (let i = 0; i < sortedArray.length; i++) {
        console.log(`${i + 1}.${sortedArray[i]}`);

    }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

/*⦁	List of Products
You will receive an array of products. Print a numbered array of all the products ordered by name.
Example
Input
["Potatoes", "Tomatoes", "Onions", "Apples"]

Output
1.Apples
2.Onions
3.Potatoes
4.Tomatoes
Hints
⦁	The sort function rearranges the array in ascending order

⦁	Finally, we have to print our sorted array. To do that we loop through the array

⦁	We use i + 1, because we want to start counting from 1
*/
