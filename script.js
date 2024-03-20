function Book(author, title, pages, type) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.type = type;
};

const book1 = new Book('J.R.R. Tolkien', 'The Hobbit', '288', 'Fantasy')
const book2 = new Book('George Orwell', '1984', '314', 'Romance')
const book3 = new Book('Adam Smith', 'The Wealth of Nations', '524', 'Economy')

const myLibrary = [book1, book2, book3];

function addBookToLibrary() {
    const book = new Book ('Aristotle', 'Physics', '420', 'Philosophy')
    myLibrary.push(book);
}

addBookToLibrary()

//book1

document.querySelector('.book-one .title').innerHTML = myLibrary[0].title
document.querySelector('.book-one .author').innerHTML += myLibrary[0].author
document.querySelector('.book-one .pages').innerHTML += myLibrary[0].pages
document.querySelector('.book-one .type').innerHTML += myLibrary[0].type

//book2

document.querySelector('.book-two .title').innerHTML = myLibrary[1].title
document.querySelector('.book-two .author').innerHTML += myLibrary[1].author
document.querySelector('.book-two .pages').innerHTML += myLibrary[1].pages
document.querySelector('.book-two .type').innerHTML += myLibrary[1].type

//book3

document.querySelector('.book-three .title').innerHTML = myLibrary[2].title
document.querySelector('.book-three .author').innerHTML += myLibrary[2].author
document.querySelector('.book-three .pages').innerHTML += myLibrary[2].pages
document.querySelector('.book-three .type').innerHTML += myLibrary[2].type

//book-add-buttom

document.querySelector('.open-forms').addEventListener ('click', function () {
    document.querySelector('#popup-window').style.display = 'block';
    document.querySelector('.container').style = 'opacity: 20%';
});

document.querySelector('#close-button').addEventListener('click', function() {
    document.querySelector('#popup-window').style.display = 'none';
    document.querySelector('.container').style = 'opacity: 100%';
})
;
