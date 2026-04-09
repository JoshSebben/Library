const myLibrary = [];
const author = "";
const id = 0;
const title = "";
const isRead = false;

function Book(author, id, title, isRead) {
    this.author = author;
    this.id = id;
    this.title = title;
    this.isRead = isRead;
  
    this.displayBook = function(){
        console.log("Author:" + this.author);
        console.log("ID: " + this.id);
        console.log("Title: " + this.title);
    }
}

function addBookToLibrary(author, id, title) {
  // take params, create a book then store it in the array

  const book = new Book(author, id, title);

  myLibrary.push(book);
}

function displayBooks(myLibrary){
    for (let i = 0; i < myLibrary.length; i++){
        myLibrary[i].displayBook();
    }
}
