"use strict";

// exports.findTitles= findTitles;
// exports.findAuthors= findAuthors;
// exports.findIDs= findIDs;
// exports.addBook = addBook;

/*addBook, which will take title, author, and libraryID as inputs. It will create a
new book object and add it to the library, which will be represented as a global */

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @param {string} author is book author
 * @param {string} title is book title
 * @param {string} bookId  is book title
 * @returns {Object} the new book
 */

function addBook(book){
    library.push(book);
    return book;
}
// console.log(addBook({title: "My New Book", author: "Me Too", libraryID: 1144}))

function findTitles(){
let title = [];
for(let book of library){
    title.push(book.title)
}
return title.sort()
}
console.log(findTitles(library))

function findAuthors(){
    let author = [];
    for(let book of library){
        author.push(book.author)
    }
    return author.sort();
}
console.log(findAuthors(library))

function findIDs(){
    let bookId = [];
    for(let book of library){
        bookId.push(book.libraryID)
    }
    return bookId.sort()
}
console.log(findIDs(library))

function makeBook(title, author, libraryID){
    const newBook = {
        title,
        author,
        libraryID
    }
    return newBook;
}