
function Book(author, title, pages, style, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.style = style;
    this.read = read;
};

const book1 = new Book('J.R.R. Tolkien', 'The Hobbit', '288', 'fantasy', 'yes')
const book2 = new Book('George Orwell', '1984', '314', 'romance', 'no')
const book3 = new Book('Adam SMith', 'The Wealth of Nations', '524', 'economy', 'no' )

function addBookToLibrary() {
    // do stuff here
}

const myLibrary = [book1, book2, book3];

console.log(myLibrary)