const button = document.getElementById("add-button");

let myLibrary = [];

function Book(title, pages){
    this.title = title;
    //this.author = author;
    this.pages = pages;
    //this.read = read;
}

function addBookToLibrary(){

    let book = prompt("What book?");
    let pages = prompt("How many pages?");
    let newBook = new Book(book, pages);
    myLibrary.push(newBook);
    console.log(myLibrary);


}

let displayBooks = () => {

}

button.addEventListener("click", addBookToLibrary);







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