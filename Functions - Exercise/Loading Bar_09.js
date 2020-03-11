
function loadingBar(elem) {
    
    let width = elem/10 ;
    let points = '';
    let result = '';
    for(let i = 0;i < width;i++){
        result += "%";
    }
    for(let i = 10; i > width;i--){
        result+= ".";
    }
if(elem == 100){
    console.log(`${elem}% Complete!`);
    console.log(`${result}`)

}else{
  console.log(`${elem}%`+` [${result}${points}]`);
  console.log('Still loading...');
}
  
} 
loadingBar(30);
loadingBar(50);
loadingBar(100);


/*Loading Bar
You will receive a single number between 0 and 100 which is divided with 10 without residue (0, 10, 20, 30...). 
Your task is to create a function that visualize a loading bar depending on that number you have received in the input.
Examples

Input	
30	

Output
30% [%%%.......]
Still loading...


Input
50	

Output
50% [%%%%%.....]
Still loading...


Input
100	

Output
100% Complete!
[%%%%%%%%%%]

*/