

const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

console.log(new Book("Edgar Allen Poe", "The Raven", 40, true))
