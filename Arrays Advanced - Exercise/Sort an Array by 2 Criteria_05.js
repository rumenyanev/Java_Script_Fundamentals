function sortAnArrayByTwoCriteria(input) {
    input.sort(twoCriteriaSort)
    input.forEach(el => console.log(el))

    function twoCriteriaSort(a, b) {
        if(a.length > b.length) {
            return 1
        } else if(a.length < b.length) {
            return -1
        } else {
            return a.localeCompare(b);
        }
    }
}
sortAnArrayByTwoCriteria(['test','Deny','omen','Default'])

sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"]);
sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
/*Sort an Array by 2 Criteria
Write a function that orders an array of strings, by their length in ascending order as primary criteria, 
and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as array of strings.
The output is the ordered array of strings.
Examples
Input			
["alpha", "beta", "gamma"]	

Output
beta
alpha
gamma		

Input
["Isacc", "Theodor", "Jack", "Harrison", "George"]	

Output
Jack
Isacc
George
Theodor
Harrison


Hints
⦁	An array can be sorted by passing a comparing function to the Array.sort() function
⦁	Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria, 
if the 2 items are different (the result of the compare is not 0) - return the result as the result of the comparing function.
 If the two items are the same by the main criteria (the result of the compare is 0),
  we need to compare by the second criteria and the result of that comparison is the result of the comparing function
*/