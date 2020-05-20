function solve(input) {
    let neighborhoods = new Map();
    input.shift().split(', ').forEach(el => neighborhoods.set(el, []));


    for (const line of input) {

        let [neighborhoodName, person] = line.split(' - ');
        if (neighborhoods.has(neighborhoodName)) {
            neighborhoods.get(neighborhoodName)
                .push(person);

        }


    }
    let sortedNeighbor = Array.from(neighborhoods.entries());
    sortedNeighbor.sort((a,b) =>{
     return  b[1].length - a[1].length;
    })
let output = new Map(sortedNeighbor);
for (const [neighborhoodName,people] of output) {
    console.log(`${neighborhoodName}: ${people.length}`);
    people.forEach(person => console.log(`--${person}`)
        );
}

}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);

/*⦁	Neighborhoods
Write a function that receives list of neighborhoods and then some people,
who are going to live in it.
The input will come as array of strings.
The first element will be the list of neighborhoods separated by ", ".
The rest of the elements will be a neighborhood followed by a name of a person in the format "{neighborhood} - {person}".
Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods.
At the end print the neighborhoods sorted by the count of inhabitants in descending order.
Print them in the following format:
"{neighborhood}: {inhabitants count}
--{1st inhabitant}
--{2nd inhabitant}
…"

Example
Input
['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']


Output
Bright Mews: 2
--Garry
--Andrea
Abbey Street: 1
--Billy
Herald Street: 0



Hints
⦁	Save the first element of the array as the neighborhoods
⦁	Fill the map with them and set their values as empty arrays
⦁	Loop through the rest of the elements
⦁	Check if the neighborhood is in the list/map and add the person
⦁	Sort them by count of inhabitants
⦁	Print



⦁	NOTE: The count of the people is the length of the second element in both a and b. To sort in descending, just subtract the length of a inhabitance from the length of the b inhabitants.
*/