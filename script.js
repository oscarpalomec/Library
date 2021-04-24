const button = document.getElementById("show-modal");
const bookContainer = document.getElementById("book-container");


let myLibrary = [
  { title: "It", author: "Stephen King", pages: "1138", read: true },
  {
    title: "Big Little Lies",
    author: "Liane Moriarty",
    pages: "458",
    read: false,
  },
  { title: "The analyst", author: "John Katzenbach", pages: "528", read: true },
  { title: "Sharp Objects", author: "Gillian Flynn", pages: "328", read: true },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = prompt("Name of the book: ");
  let author = prompt("Who is the author?");
  let pages = prompt("How many pages?");
  let read = prompt("Have you read it?");
  if (read == "true") {
    read = true;
  } else {
    read = false;
  }
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBook(newBook);
  console.log(myLibrary);
  console.log(myLibrary.length);
}

function showModal (){
  document.querySelector(".bg-modal").style.display = "flex";
}

function closeModal () {
  document.querySelector(".bg-modal").style.display = "none";
}

let displayBook = (book) => {
    let div = document.createElement("div");
  let bookTitle = document.createElement("span");
  bookTitle.classList.add('text');
  let bookAuthor = document.createElement("span");
  bookAuthor.classList.add('text');
  let bookPages = document.createElement("span");
  bookPages.classList.add('text');
  let bookRead = document.createElement("span");
  bookRead.classList.add('text');
  bookTitle.textContent = `Title: ${book.title}`;
  bookAuthor.textContent = `Author: ${book.author}`;
  bookPages.textContent = `Pages: ${book.pages}`;
  bookRead.textContent = `Read: ${book.read}`;
  div.style.cssText =
    "box-sizing: border-box; width: 23%; background:#323232; display:flex; flex-direction:column; margin-left: 1%; margin-right:1%; border-radius:5%; align-items:center";
  div.appendChild(bookTitle);
  div.appendChild(bookAuthor);
  div.appendChild(bookPages);
  div.appendChild(bookRead);
  bookContainer.appendChild(div);
};

button.addEventListener("click", showModal);

console.log(myLibrary);

myLibrary.forEach((book) => {
  let div = document.createElement("div");
  let bookTitle = document.createElement("span");
  bookTitle.classList.add('text');
  let bookAuthor = document.createElement("span");
  bookAuthor.classList.add('text');
  let bookPages = document.createElement("span");
  bookPages.classList.add('text');
  let bookRead = document.createElement("span");
  bookRead.classList.add('text');
  bookTitle.textContent = `Title: ${book.title}`;
  bookAuthor.textContent = `Author: ${book.author}`;
  bookPages.textContent = `Pages: ${book.pages}`;
  bookRead.textContent = `Read: ${book.read}`;
  div.style.cssText =
    "box-sizing: border-box; width: 23%; background:#323232; display:flex; flex-direction:column; margin-left: 1%; margin-right:1%; border-radius:5%; align-items:center; margin-bottom: 2rem";
  div.appendChild(bookTitle);
  div.appendChild(bookAuthor);
  div.appendChild(bookPages);
  div.appendChild(bookRead);
  bookContainer.appendChild(div);
  console.log(book.title);
});

document.querySelector(".close").addEventListener("click", closeModal )

/*function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let status = "";
        if (read == true){
            status = "already read";
        }else{
            status = "not read yet";
        }

        return `${title} by ${author}, ${pages} pages, ${status}.`;

    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
console.log(theHobbit.info()); */
