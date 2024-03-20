function Book(author, title, pages, style, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.style = style;
    this.read = read;
    this.info = function() {
        console.log(this.title, this.author, this.pages, this.style, this.read)
    }
};

const book1 = new Book('J.R.R. Tolkien', 'The Hobbit', '288', 'Fantasy', 'Yes')
const book2 = new Book('George Orwell', '1984', '314', 'Romance', 'No')
const book3 = new Book('Adam Smith', 'The Wealth of Nations', '524', 'Economy', 'No' )

function addBookToLibrary() {
    // do stuff here
}

const myLibrary = [book1, book2, book3];

document.querySelector('.book-one .title').innerHTML = myLibrary[0].title
document.querySelector('.book-one .author').innerHTML += myLibrary[0].author
document.querySelector('.book-one .pages').innerHTML += myLibrary[0].pages
document.querySelector('.book-one .style').innerHTML += myLibrary[0].style
document.querySelector('.book-one .read').innerHTML += myLibrary[0].read