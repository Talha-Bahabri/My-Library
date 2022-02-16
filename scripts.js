
//this is an array to store the books that are being added using add function
let myLibrary = [];



function book(title , author , pages , isRead) { 
    this.title = title;
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

  
// let theHobbit = new book("The Hobbit" , "J.R.R. Tolkien" , 295, true) ;

// console.log(theHobbit.info());

//here is only testing if the function is working in the console
console.log(`Here is myLibrary array ${myLibrary}`);

console.log(`we will make 2 objects with some infos in it `);

 





const addButton = document.querySelector(`.add-button`);
addButton.addEventListener("click" , overlayON );
//submitButton.addEventListener("click" , overlayOFF );

let titleField = document.getElementById(`title`) 
let authorField = document.getElementById(`author`)  
let pagesField = document.getElementById(`pages`) 
// this needs to be fixed True/False
let readBoxField = document.getElementById(`readBox`)   
   
const submitButton = document.querySelector(`.submit-button`);
  
function submitForm() {
  console.log(`@@@@@@It will show the infos of the object first `); 
  
  let titleToObject = new book(titleField.value , authorField.value , pagesField.value , true)
    
  myLibrary.push(titleToObject);
  
  console.log(`we added an object to the libarary ***************`)
   
  console.log(`Here is myLibrary array `);
  console.log(`${myLibrary.at(-1).info()}`) 
  console.log(`${myLibrary.length}`) ;
  overlayOFF(); 
}


submitButton.addEventListener("click" , (event) => {
   
  submitForm()
  
  printACard ()


});

const cancelButtonh = document.getElementById("cancel-button")
cancelButtonh.addEventListener("click" , overlayOFF );



 


//these functions for the overlay, on click and off ....  need more attention 
function overlayON() {
  console.log(`###############overlay is on `)
  document.getElementById("overlay").style.display = "block";
}

  
function overlayOFF() { 
  console.log(`###############overlay is off `)
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

  //here is to write 
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



// let theHobbit = new book("The Hobbit" , "J.R.R. Tolkien" , 295, true) ;
// myLibrary.push(theHobbit);
// printACard ()


 
// myLibrary.push(playerOne , playerTwo);
// console.log(`printing the objects info now `) ;
// console.log(myLibrary[0]);
// console.log(myLibrary[1]);

// console.log('the objects are added to the array')


// @@@@@@@@@@@@@@@@###$$$$$$$$$$$$$$
// check the " javascript paper" in the desk for more details 
 
// const testField = document.getElementById("test1")
// const testWord = document.getElementById("test2")
// const testBtn = document.getElementById("testbtn") 

// function test() {
//   console.log("the btn works")
//   testWord.textContent =  document.getElementById('test1').value;
// }
// testBtn.addEventListener("click" , test);