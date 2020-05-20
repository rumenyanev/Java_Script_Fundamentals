function wordOccurrences(input){
    let words = input.slice(0,input.length)
    let map = new Map();

    for(let word of words) {
        if(!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
        
    }
    let sorted = Array.from(map).sort((a,b)=> b[1] - a[1]);

    for (let key of sorted) {
        console.log(`${key[0]} -> ${key[1]} times`);
     
    } 
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);

/*⦁	Word Occurrences
Write a function that counts the times each word occurs in a text. 
Print the words sorted by count in descending order. 
The input comes as an array of strings.

Example
Input	
["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]	

Output
sentence -> 3 times
Here -> 2 times
is -> 2 times
the -> 2 times
first -> 1 times
another -> 1 times
And -> 1 times
finally -> 1 times
third -> 1 times
Hint
⦁	Create a map
⦁	Loop through the elements of the array of words
⦁	Update the map
⦁	Sort the map by value in descending:
 
⦁	Finally, print the result in format as the example above
*/