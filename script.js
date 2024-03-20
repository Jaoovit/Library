function Book(author, title, pages, style, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.style = style;
    this.read = read;
};

const book1 = new Book('J.R.R. Tolkien', 'The Hobbit', '288', 'Fantasy', 'Yes')
const book2 = new Book('George Orwell', '1984', '314', 'Romance', 'No')
const book3 = new Book('Adam Smith', 'The Wealth of Nations', '524', 'Economy', 'No' )

const myLibrary = [book1, book2, book3];

function addBookToLibrary() {
    const book = new Book ('Aristotle', 'Physics', '420', 'Philosophy', 'No')
    myLibrary.push(book);
}

addBookToLibrary()


document.querySelector('.book-one .title').innerHTML = myLibrary[0].title
document.querySelector('.book-one .author').innerHTML += myLibrary[0].author
document.querySelector('.book-one .pages').innerHTML += myLibrary[0].pages
document.querySelector('.book-one .style').innerHTML += myLibrary[0].style
document.querySelector('.book-one .read').innerHTML += myLibrary[0].read

document.querySelector('.book-two .title').innerHTML = myLibrary[1].title
document.querySelector('.book-two .author').innerHTML += myLibrary[1].author
document.querySelector('.book-two .pages').innerHTML += myLibrary[1].pages
document.querySelector('.book-two .style').innerHTML += myLibrary[1].style
document.querySelector('.book-two .read').innerHTML += myLibrary[1].read

document.querySelector('.book-three .title').innerHTML = myLibrary[2].title
document.querySelector('.book-three .author').innerHTML += myLibrary[2].author
document.querySelector('.book-three .pages').innerHTML += myLibrary[2].pages
document.querySelector('.book-three .style').innerHTML += myLibrary[2].style
document.querySelector('.book-three .read').innerHTML += myLibrary[2].read