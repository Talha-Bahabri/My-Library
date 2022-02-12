
//this is an array to store the books that are being added using add function
let myLibrary = [];





function book(title , author , pages , isRead) { 
    this.name = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;


    this.info = function() {
        let readInText = ``
        if (isRead) {
            readInText = `Is finished` ;
        }
        else {
            readInText = `not yet read` ;
        }

    return `${title} by ${author}, ${pages} pages, ${readInText} `;
  }


}


function addBookToLibrary() {
    // do stuff here
  }

  
let theHobbit = new book("The Hobbit" , "J.R.R. Tolkien" , 295, true) ;

console.log(theHobbit.info());