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
        <div>
          <img src="/public/book-open-variant.svg" alt="title icon" />
          <p>${book.title}</p>
        </div>
        <div>
          <img src="/public/account.svg" alt="author icon" />
          <p>${book.author}</p>
        </div>
        <div>
          <img src="/public/numeric.svg" alt="pages icon" />
          <p>${book.pages}</p>
        </div>
        <div>
          <img src="/public/check-circle.svg" alt="read icon" />
          <p>${book.read ? "YES" : "NO"}</p>
        </div>
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

document.querySelectorAll('form svg').forEach(svg => {
  svg.style.fill = '#ffffff';
})

document.querySelectorAll('.labels svg').forEach(svg => {
  svg.style.fill = '#ffffff';
})