function Book(author, title, pages, type) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.type = type;
};

const book1 = new Book('J.R.R. Tolkien', 'The Hobbit', '288', 'Fantasy')
const book2 = new Book('George Orwell', '1984', '314', 'Dystopian')
const book3 = new Book('Adam Smith', 'The Wealth of Nations', '524', 'Economy')

const myLibrary = [book1, book2, book3];


const menu = document.querySelector('.container')
let bookAuthor = document.querySelector('#book-author')
let bookTitle = document.querySelector('#book-title')
let bookPages = document.querySelector('#book-pages')
let bookType = document.querySelector('#book-type')

let sendButton = document.querySelector('button[type="submit"]')

sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    const book = new Book (bookAuthor.value, bookTitle.value, bookPages.value, bookType.value)
    myLibrary.push(book);

    let div = document.createElement('div')
    div.setAttribute('id', 'book')

    let title = document.createElement('p')
    title.setAttribute('class','title')
    title.innerHTML = myLibrary[myLibrary.length -1].title

    let author = document.createElement('p')
    author.setAttribute('class', 'author')
    author.innerHTML = 'Author: ' + myLibrary[myLibrary.length -1].author

    let pages = document.createElement('p')
    pages.setAttribute('class', 'pages')
    pages.innerHTML = 'Pages: ' + myLibrary[myLibrary.length -1].pages

    let type = document.createElement('p')
    type.setAttribute('class', 'type')
    type.innerHTML = 'Type: ' + myLibrary[myLibrary.length -1].type
    
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages)
    div.appendChild(type)
    menu.appendChild(div)
    menu.insertBefore(div, document.querySelector('.book-add'))

    document.querySelector('#popup-window').style.display = 'none';
    document.querySelector('.container').style = 'opacity: 100%';
})

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