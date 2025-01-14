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

//set/reset data attributes
function setAttribute() {
  document.querySelectorAll('.books').forEach((el, index) => {
    el.dataset.attribute = `${index + 1}`;
  })
}

//add to library array
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBook(book);
}

//remove book from library array and DOM
function removeBook(button){
  let index = button.parentElement.getAttribute("data-attribute");
  myLibrary.splice(index-1, 1);
  document.querySelector(`[data-attribute="${index}"]`).remove();
  setAttribute();
}

//add/remove read status
function toggleRead(button){
  let index = button.parentElement.getAttribute("data-attribute");
  myLibrary[index-1].read == true ? myLibrary[index-1].read = false 
  : myLibrary[index-1].read = true;

  return myLibrary[index-1].read == true ? setCheckmark(button) :
  button.replaceChildren();
}

//add read checkmark to book
function setCheckmark(element) {
  const img = document.createElement("img");
  img.src = "./public/check-circle.svg";
  img.alt = "read icon";

  element.appendChild(img);
}

//show book in main display
function displayBook(book) {
  bookViewer.innerHTML += `
    <div class="books">
        <div>
          <img src="./public/book-open-variant.svg" alt="title icon" />
          <p>${book.title}</p>
        </div>
        <div>
          <img src="./public/account.svg" alt="author icon" />
          <p>${book.author}</p>
        </div>
        <div>
          ${book.pages}
        </div>
        <button onclick="toggleRead(this)">
          ${book.read ? `<img src="./public/check-circle.svg" alt="read icon" />` : ""}
        </button>
        
        <button onclick="removeBook(this)">
          <img src="./public/minus-circle-outline.svg" alt="remove book icon">
        </button>
        
      </div>
  `
  setAttribute();
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