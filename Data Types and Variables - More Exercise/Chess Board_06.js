function chessBoard(digit){
    
    let size = Number(digit)
    let currentColour = 'black'
    let previousColour = ''
    console.log('<div class="chessboard">')
 
    for (let rows = 1; rows <= size; rows++) {
        console.log('  <div>')
 
        for (let columns = 1; columns <= size; columns++) {
            console.log(`    <span class="${currentColour}"></span>`);
 
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }
 
        console.log('  </div>')
        if (size % 2 === 0) {
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }
    }
 
    console.log('</div>')
}
chessBoard(3);
//chessBoard(5);
/*Chess Board
Write a function to print a chessboard of size n X n. See the example for more information.
The input comes as a single number argument n.
The output should be returned as a result of your function in the form of a string.

Examples
Input	
3	

Output
<div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
</div>
*/