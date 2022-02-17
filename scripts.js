
//this is an array to store the books that are being added using add function
let myLibrary = [];



function book(title , author , pages , isRead) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;


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

const addButton = document.querySelector(`.add-button`);
addButton.addEventListener("click" , overlayON ); 

let titleField = document.getElementById(`title`) 
let authorField = document.getElementById(`author`)  
let pagesField = document.getElementById(`pages`) 
// this needs to be fixed True/False
let readBoxField = document.getElementById(`readBox`)   
   
const submitButton = document.querySelector(`.submit-button`);
  

function submitForm() { 
  let titleToObject = new book(titleField.value , authorField.value , pagesField.value , true)
    
  myLibrary.push(titleToObject);
   
  overlayOFF(); 


}

let isWarningTextAppeared = true

submitButton.addEventListener("click" , (event) => {
   console.log(`title field is : ${titleField.value}`);
  if (titleField.value===`` || authorField.value===`` || pagesField.value===``){
    console.log(`a field is  empty`)
    if (isWarningTextAppeared) {
      const warninText = document.createElement(`p`);
      warninText.classList.add(`warning-Text`)
      warninText.textContent = `You need to fill all the fields`;
      const overlayDiv = document.querySelector(`.overlay`)
      overlayDiv.appendChild(warninText);
      isWarningTextAppeared = false;
    }



  }
  else { 
    submitForm() 
    printACard() 
  } 
});

const cancelButtonh = document.getElementById("cancel-button")
cancelButtonh.addEventListener("click" , overlayOFF );



 


//these functions for the overlay, on click and off ....  need more attention 
function overlayON() {
  console.log(`###############overlay is on `)
  document.getElementById("overlay").style.display = "block";
}

  
function overlayOFF() { 

  titleField.textContent = ``;
  authorField.textContent = ``;
  pagesField.textContent = ``;
  readBoxField.textContent = ``;
  document.getElementById("overlay").style.display = "none";
} 


//THIS PART HERE IS ADDING THE <DIV> AND <P> and adding info


function printACard () {
  const libraryCardsSelector = document.querySelector(`.libraryCards`);

  const cardToAdd = document.createElement(`div`);
  cardToAdd.classList.add(`cards`);
  
  const pTitle = document.createElement(`p`);
  pTitle.classList.add(`infoInCards`)
  pTitle.textContent = `Title :${myLibrary.at(-1).title}`;  

  const pAuthor = document.createElement(`p`);
  pAuthor.classList.add(`infoInCards`)
  pAuthor.textContent = `Author : ${myLibrary.at(-1).author}`;
  
  const pPages = document.createElement(`p`);
  pPages.classList.add(`infoInCards`)
  pPages.textContent =  `Pages :${myLibrary.at(-1).pages}`;
  
  const pIsRead = document.createElement(`p`);
  pIsRead.classList.add(`infoInCards`)

  //here is to write if the book has been read or not
  let toWriteRead ;
   if (myLibrary.at(-1).isRead) {
    toWriteRead = `I have read it`
   }
   else {
     toWriteRead = 'I did not read it @@@@ THIS NEED FIXING SOON'
   }
  pIsRead.textContent = `Did you read it ? ${toWriteRead}`;
  
  cardToAdd.appendChild(pTitle);
  cardToAdd.appendChild(pAuthor);
  cardToAdd.appendChild(pPages);
  cardToAdd.appendChild(pIsRead);
  
  libraryCardsSelector.appendChild(cardToAdd);
  
}
 