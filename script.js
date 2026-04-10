const myLibrary = [];
let author = "";
let id = 0;
let title = "";
let isRead = false;
let pages = 0;

function Book(author, id, title, isRead, pages) {
    this.author = author;
    this.id = id;
    this.title = title;
    this.isRead = isRead;
    this.pages = pages;
  
    this.displayBook = function(){
        console.log("Author:" + this.author);
        console.log("ID: " + this.id);
        console.log("Title: " + this.title);
        console.log("Is Read: " + this.isRead);
        console.log("Pages: " + pages)
    }
}

function addBookToLibrary(author, id, title, isRead, pages) {
  // take params, create a book then store it in the array

  const book = new Book(author, id, title, isRead, pages);

  myLibrary.push(book);
}

function displayBooks(myLibrary){
    for (let i = 0; i < myLibrary.length; i++){
        myLibrary[i].displayBook();
    }
}

const newBook = document.getElementById("newBook");
const array = document.getElementById("array");

function addBook(){
    let author = prompt("Enter Authors Name: ");
    let id = prompt("Enter book ID: ");
    let title = prompt("Enter book title: ");
    let isRead = prompt("Is the book read: ");
    let pages = prompt("Enter number of pages: ");

    addBookToLibrary(author, id, title, isRead, pages);

    const div = document.createElement("div");
    div.innerHTML = title + ", " + id + ", " + author + ", " + isRead + ", " + pages;
    array.appendChild(div);

    const removeBookButton = document.createElement("button");
    removeBookButton.className = "removeBook"
    removeBookButton.innerHTML = "Remove";
    const changeStatusButton = document.createElement("button");
    changeStatusButton.className = "changeStatus"
    changeStatusButton.innerHTML = "Status"
    div.appendChild(removeBookButton);
    div.appendChild(changeStatusButton);
}
const removeBookButton = document.getElementsByClassName("removeBook");
const changeStatusButton = document.getElementsByClassName("changeStatus");

function removeBook(){
    const book = removeBookButton.parentElement;

    // Select parent element, compare the inner html of it to the array database and remove if match, then delete the parent element 



}

function changeStatus(){

    // Select parent element, change html, isRead from no to yes, yes to no
}



newBook.addEventListener('click', addBook);
removeBookButton.addEventListener('click', removeBook);
    





