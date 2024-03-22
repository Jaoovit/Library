const myLibrary = [];

function Book(author, title, pages, type) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.type = type;
};

const book1 = new Book('J.R.R. Tolkien', 'The Hobbit', '288', 'Fantasy')
const book2 = new Book('George Orwell', '1984', '314', 'Dystopian')
const book3 = new Book('Adam Smith', 'The Wealth of Nations', '524', 'Economy')

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)


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
    title.innerHTML = book.title

    let author = document.createElement('p')
    author.setAttribute('class', 'author')
    author.innerHTML = 'Author: ' + book.author

    let pages = document.createElement('p')
    pages.setAttribute('class', 'pages')
    pages.innerHTML = 'Pages: ' + book.pages

    let type = document.createElement('p')
    type.setAttribute('class', 'type')
    type.innerHTML = 'Type: ' + book.type

    let delButton = document.createElement('button')
    delButton.setAttribute('class', 'delete')
    delButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
    
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages)
    div.appendChild(type)
    div.appendChild(delButton)
    menu.appendChild(div)
    menu.insertBefore(div, document.querySelector('.book-add'))

    document.querySelector('#popup-window').style.display = 'none';
    document.querySelector('.container').style = 'opacity: 100%';

    let del = document.querySelectorAll('.delete')
    let i;

    for (i = 0; i < del.length; i++) {
        del[i].onclick = function() {
        let div = this.parentElement;
        div.remove();
    }
    
}
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


let del = document.querySelectorAll('.delete')
let i;

for (i = 0; i < del.length; i++) {
    del[i].onclick = function() {
        let div = this.parentElement;
        div.remove();
    }
}
