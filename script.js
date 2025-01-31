const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus ? "Read" : "Not Read"}`;
    }
    this.toggleRead = function () {
        this.readStatus = !this.readStatus;
        return this.readStatus;
    }
}

function addBookToLibrary(title, author,pages,readStatus) {
    let newBook = new Book(title,author,pages,readStatus);
    myLibrary.push(newBook);
}

function displayBooks(myLibrary) {
    const tableBody = document.querySelector(".book-list");
    tableBody.replaceChildren();
    
    for (const [index, book] of myLibrary.entries()) {
        const tableBody = document.querySelector(".book-list");
        const bookRow = document.createElement("tr");
        const bookTitle = document.createElement("td");
        bookTitle.textContent = book.title;
        const bookAuthor = document.createElement("td");
        bookAuthor.textContent = book.author;
        const bookPages = document.createElement("td");
        bookPages.textContent = book.pages;
        const bookReadStatus = document.createElement("td");
        bookReadStatus.textContent = book.readStatus ? "Read" : "Not Read";

        bookRow.append(bookTitle);
        bookRow.append(bookAuthor);
        bookRow.append(bookPages);
        bookRow.append(bookReadStatus);

        tableBody.append(bookRow);
    }
}

addBookToLibrary("To Kill a MockingBird","Harper E. Lee",234,true);
addBookToLibrary("One Fish, Two Fish","Dr. Seuss",40,true);
addBookToLibrary("To Kill a MockingBird","Harper E. Lee",234,true);
addBookToLibrary("One Fish, Two Fish","Dr. Seuss",40,true);
addBookToLibrary("To Kill a MockingBird","Harper E. Lee",234,true);
addBookToLibrary("One Fish, Two Fish","Dr. Seuss",40,true);
displayBooks(myLibrary);