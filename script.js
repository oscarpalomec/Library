let myLibrary = [
  
];

const modalButton = document.getElementById("show-modal");
const bookContainer = document.getElementById("book-container");

class Book {
  constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
  }
  toggleReadStatus() {
      this.read = !this.read;
      render();
  }
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

//Function to delete books

function deleteBook (btn){
  myLibrary.splice(btn.id, 1);
  render();
  
}

//Function to add New Books

const addBookBtn = document.querySelector("#add-book-button");

addBookBtn.addEventListener('click', addNewBook);

function addNewBook(e) {
  e.preventDefault()

  const title = document.getElementById("bookTitle");
  const author = document.getElementById("bookAuthor");
  const pages = document.getElementById("bookPages");
  const read = document.getElementById("read");

  if (validateSubmission(title, author, pages)) {
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    render();
    clearForm(title, author, pages, read);
  }
}

function showModal (){
  document.querySelector(".bg-modal").style.display = "flex";
}

function closeModal () {
  document.querySelector(".bg-modal").style.display = "none";
}

modalButton.addEventListener("click", showModal);

function render () {
bookContainer.innerHTML = "";
myLibrary.forEach((book, index) => {
  let bookCard = document.createElement("div");
  let bookTitle = document.createElement("span");
  bookTitle.classList.add('text');
  let bookAuthor = document.createElement("span");
  bookAuthor.classList.add('text');
  let bookPages = document.createElement("span");
  bookPages.classList.add('text');
  let bookRead = document.createElement("span");
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete"
  bookRead.classList.add('text');
  bookTitle.textContent = `Title: ${book.title}`;
  bookAuthor.textContent = `Author: ${book.author}`;
  bookPages.textContent = `Pages: ${book.pages}`;
  bookRead.style.cursor = "pointer"
  if (myLibrary[index].read) {
    bookRead.textContent = 'Read';
    bookRead.style.color = '#2ba84a';
} else {
    bookRead.textContent = 'Unread';
    bookRead.style.color = '#e83946';
}

bookRead.addEventListener('click', () => {
  myLibrary[index].toggleReadStatus();
  render();
})
  bookCard.style.cssText =
    "box-sizing: border-box; width: 23%; background:#323232; display:flex; flex-direction:column; margin-left: 1%; margin-right:1%; border-radius:5%; align-items:center; margin-bottom: 2rem";
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(deleteButton);
  bookContainer.appendChild(bookCard);

  deleteButton.addEventListener('click', deleteBook);


});
}

document.querySelector(".close").addEventListener("click", closeModal )


//Check if fields are empty
function validateSubmission (title, author, pages){
  if(title.value == ""|| author.value == "" || pages.value ==""){
    title.style.border = "1px solid red";
    author.style.border = "1px solid red";
    pages.style.border = "1px solid red";
    return false;
  } else {
    
    return true;
  }
}

//Function to clear fields

function clearForm (title, author, pages, read) {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}