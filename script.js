const myLibrary = []

class Book {
    constructor(title, author, pages, readStatus) {
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._readStatus = readStatus;    
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get pages() {
        return this._pages;
    }

    set pages(value) {
        this._pages = value;
    }

    get readStatus() {
        return this._readStatus;
    }

    set readStatus(value) {
        return this._readStatus;
    }
   
    info() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus ? "Read" : "Not Read"}`;
    }
   toggleRead() {
        this._readStatus = !this._readStatus;
        return this._readStatus;
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
        const readStatusButton = document.createElement("button");
        readStatusButton.type = "button";
        readStatusButton.classList.add(book.readStatus ? "read-button" : "not-read-button");
        readStatusButton.textContent = book.readStatus ? "Read" : "Not Read";
        readStatusButton.dataset.bookId = index;
        bookReadStatus.append(readStatusButton);

        readStatusButton.addEventListener("click", (e) => {
            const bookId = e.target.dataset.bookId;
            myLibrary[bookId].toggleRead();
            displayBooks(myLibrary);
        })

        const bookDelete = document.createElement("td");
        const deleteButton = document.createElement("img");
        deleteButton.id = "delete-icon";
        deleteButton.src = "delete.svg";
        deleteButton.alt = "Delete button icon";
        deleteButton.dataset.bookId = index;
        bookDelete.append(deleteButton);

        deleteButton.addEventListener("click", (e) => {
            const bookId = e.target.dataset.bookId;
            myLibrary.splice(bookId,1);
            displayBooks(myLibrary);
        })

        bookRow.append(bookTitle);
        bookRow.append(bookAuthor);
        bookRow.append(bookPages);
        bookRow.append(bookReadStatus);
        bookRow.append(bookDelete);

        tableBody.append(bookRow);

    }
}

const addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let readTrue = document.querySelector("#read-true").checked;
    let readFalse = document.querySelector("#read-false").checked;

    if (!title || !author || isNaN(pages) || pages <= 0 || (!readTrue && !readFalse)) {
        alert("Please fill out all fields correctly.");
        return;
    }
    addBookToLibrary(title,author,pages,readTrue);
    const form = document.querySelector("form");
    form.reset();
    displayBooks(myLibrary);
})

addBookToLibrary("The Catcher in the Rye","J.D. Salinger",288,true);
addBookToLibrary("1984","George Orwell",320,true);
addBookToLibrary("War and Peace","Leo Tolstoy",1200,false);
addBookToLibrary("Great Expectations","Charles Dickens",685,true);
addBookToLibrary("To Kill a MockingBird","Harper Lee",323,true);
addBookToLibrary("Brave New World","Aldous Huxley",239,false);
displayBooks(myLibrary);
