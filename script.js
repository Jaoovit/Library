const myLibrary = [];

function Book(author, title, pages, type) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.type = type;
};

const book1 = new Book('J.R.R. Tolkien', 'The Hobbit', '288', 'Fantasy');
const book2 = new Book('George Orwell', '1984', '314', 'Dystopian');
const book3 = new Book('Adam Smith', 'The Wealth of Nations', '524', 'Economy');

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);


const menu = document.querySelector('.container');
let bookAuthor = document.querySelector('#book-author');
let bookTitle = document.querySelector('#book-title');
let bookPages = document.querySelector('#book-pages');
let bookType = document.querySelector('#book-type');

let sendButton = document.querySelector('button[type="submit"]');

function createBook(book) {
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
    
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(type);
    div.appendChild(delButton);
    return div;
}

sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    const book = new Book (bookAuthor.value, bookTitle.value, bookPages.value, bookType.value);

    myLibrary.push(book);

    refreshBooks();

    document.querySelector('#popup-window').style.display = 'none';
    document.querySelector('.container').style = 'opacity: 100%';
    
});

function refreshBooks() {
    console.log(myLibrary);

    document.querySelectorAll('#book').forEach((book) => {
        book.remove();
    });


myLibrary.forEach((book) => {
    const div = createBook(book);
    menu.appendChild(div);
    menu.insertBefore(div, document.querySelector(".book-add"))
})

let del = document.querySelectorAll('.delete')
for (let i = 0; i < del.length; i++) {
      del[i].onclick = function() {
        myLibrary.splice(i, 1);
        refreshBooks();
      };
    }
}

refreshBooks()

//book-add-buttom

document.querySelector(".open-forms").addEventListener("click", function () {
    document.querySelector("#popup-window").style.display = "block";
    document.querySelector(".container").style = "opacity: 20%";
  });
  
  document.querySelector("#close-button").addEventListener("click", function () {
    document.querySelector("#popup-window").style.display = "none";
    document.querySelector(".container").style = "opacity: 100%";
  });
