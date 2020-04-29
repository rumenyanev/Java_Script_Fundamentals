function schoolLibrary(data = []) {
    let bookArr = data.shift().split('&');
 
    const addBook = (bookName) => {
        if (!bookArr.includes(bookName)) {
            bookArr.unshift(bookName);
        }
    }
    const takeBook = (bookName) => {
        let index = bookArr.indexOf(bookName);
        if (index !== -1) {
            bookArr.splice(index, 1);
        }
    }
    const swapBooks = (firstBook, secondBook) => {
        let firstIndex = bookArr.indexOf(firstBook);
        let secondIndex = bookArr.indexOf(secondBook);
        if (firstIndex !== -1 && secondIndex !== -1) {
            let temp = bookArr[firstIndex];
            bookArr[firstIndex] = bookArr[secondIndex];
            bookArr[secondIndex] = temp;
        }
    }
    const insertBook = (bookName) => {
        bookArr.push(bookName);
    }
    const checkBook = (index) => {
        index = Number(index);
        if (index >= 0 && index < bookArr.length) {
            console.log(bookArr[index]);
 
        }
    }
    for (const element of data) {
        if (element === "Done") {
          break;
        }
        const [command, book, book2] = element.split(' | ');
        switch (command) {
            case 'Add Book':
                addBook(book);
                break;
            case 'Take Book':
                takeBook(book);
                break;
            case 'Swap Books':
                swapBooks(book, book2);
                break;
            case 'Insert Book':
                insertBook(book);
                break;
            case 'Check Book':
                checkBook(book);
                break;
            case 'default':
                break;
        }
    }
 
    console.log(bookArr.join(', '));
 
}
/*
    schoolLibrary([
        'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
        'Add Book | The Odyssey',
        'Take Book | Don Quixote',
        "Insert Book | Alice's Adventures in Wonderland",
        'Check Book | 3',
        'Done',
        '',
        '',
        ''
    ]
    ); */
schoolLibrary(['Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done'
])

/*School Library

As a young developer Iskren is a part from software development school team. His task is to do online book library, but he needs your help for that.

On the first line you will receive a String, representing shelf with books in library. Every book is separated with "&".
 On the next lines until you receive "Done" command, you will receive following commands:
Add Book | {book name}
Add a book at first place in the shelf.
If the book already is present on the shelf, ignore the command.
Take Book | {book name}
Remove the book with the given name only if the book is on the shelf, otherwise ignore this command.
Swap Books | {book1} | {book2}
If both books are on the shelf, swap their places.
Insert Book | {book name}
Add a book at the end of the book collection.
Check Book | {index}
Print the name of the book on the given index the book.
If the index is invalid, ignore the command.
Input
On the 1st line, you will receive a string, representing book names, separated with "&".
On the next lines, until you receive "Done", you will receive commands in the format described above.
Output
Print the collection of books joined by ", ".
"{firstBook}, {secondBook}, …{lastBook}"

Constraints
You won't receive duplicate book names in the initial list of books.

Examples

Input
Don Quixote&The Great Gatsby&Moby Dick&Hamlet
Add Book | The Odyssey
Take Book | Don Quixote
Insert Book | Alice's Adventures in Wonderland
Check Book | 3
Done


Output
Hamlet
The Odyssey, The Great Gatsby, Moby Dick, Hamlet, Alice's Adventures in Wonderland




Input
Anna Karenina&Heart of Darkness&Catch-22& The Stranger
Add Book | David Copperfield
Add Book | One Thousand and One Nights
Swap Books | One Thousand and One Nights | Catch-22
Take Book | David Copperfield
Insert Book | The Stories of Anton Chekhov
Check Book | 17
Done


Output
Catch-22, Anna Karenina, Heart of Darkness, One Thousand and One Nights,  The Stranger, The Stories of Anton Chekhov

*/