const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author,pages,readStatus) {
    let newBook = new Book(title,author,pages,readStatus);
    myLibrary.push(newBook);
}

function displayBooks() {

}