const bookAuthor = document.getElementById("author");
const bookTitle = document.getElementById("title");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const submitBtn = document.getElementById("submit");
const bookViewer = document.getElementById("display");

const myLibrary = [];

//book constructor
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

//add to library array
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBook(book);
  console.log(book);
}

//show book in main display
function displayBook(book) {
  bookViewer.innerHTML += `
    <div class="books">
        <div>${book.author}</div>
        <div>${book.title}</div>
        <div>${book.pages}</div>
        <div>${book.read}</div>
      </div>
  `
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary(
    new Book(
      bookAuthor.value,
      bookTitle.value,
      bookPages.value,
      bookRead.checked
    )
  );
  //reset form values
  bookAuthor.value = "";
  bookTitle.value = "";
  bookPages.value = "";
  bookRead.checked = false;
});
