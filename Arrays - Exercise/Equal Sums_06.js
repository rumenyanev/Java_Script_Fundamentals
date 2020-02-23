function equalSums(array){
    let numbers = [array.length];

    for (let i = 0; i < array.length ; i++) {
         numbers[i] = Number(array[i]);
    }
    for (let i = 0; i < numbers.length ; i++) {
        let leftSum = 0;
        for (let j = 0; j < i ; j++) {
            leftSum += numbers[j];
        }
        
        let rightSum = 0;
        for (let j = i+1; j < numbers.length ; j++) {
            rightSum += numbers[j];
        }
        if (leftSum === rightSum){
            console.log(i);
            return;
        }
    }
    console.log('no');
}


equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2,5, 1, 1, 4])
/*Equal Sums
Write a function that determines if there exists an element in the array of numbers such that the sum of the
elements on its left is equal to the sum of the elements on its right.
If there are NO elements to the left/right, their sum is 0.
Print the index that satisfies the required condition or "no" if there is no such index.
Examples
Input
[1, 2, 3, 3] 

Output
2 

Comments
At a[2] -> left sum = 3, right sum = 3
a[0] + a[1] = a[3]


Input
[1, 2] 

Output
no


Comments
At a[0] -> left sum = 0, right sum = 2
At a[1] -> left sum = 1, right sum = 0
No such index exists


Input
[1] 

Output
0 

Comments
At a[0] -> left sum = 0, right sum = 0


Input
[1, 2, 3] 

Output
no 

Coments
No such index exists

Input
[10, 5, 5, 99, 3, 4, 2,5, 1, 1, 4] 

Output
3 

 Comments
At a[3] -> left sum = 20, right sum = 20
a[0] + a[1] + a[2] = a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10] 
                                                                                 */