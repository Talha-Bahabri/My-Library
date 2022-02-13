
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

//here is only testing if the function is working in the console
console.log(`Here is myLibrary array ${myLibrary}`);

console.log(`we will make 2 objects with some infos in it`);

function Player(name, age) {
  this.name = name
  this.age = age
  
} 

Player.prototype.sayName = function() {
  console.log(this.name) ;
}

//these functions for the overlay, on click and off ....  need more attention 
function overlayON() {
  document.getElementById("overlay").style.display = "block";
}

function overlayOFF() {
  console.log(`It will show the infos of the object first `)
  document.getElementById("overlay").style.display = "none";
}


const addButton = document.querySelector(`.add-button`);
addButton.addEventListener("click" , overlayON );

const submitButton = document.querySelector(`.submit-button`);
submitButton.addEventListener("click" , overlayOFF );


const playerOne = new Player(`jojojoj` , 50);
const playerTwo = new Player(`hehe` , 202);

myLibrary.push(playerOne , playerTwo);
console.log(`printing the objects info now `) ;
console.log(myLibrary[0]);
console.log(myLibrary[1]);

console.log('the objects are added to the array')


// @@@@@@@@@@@@@@@@###$$$$$$$$$$$$$$
// check the " javascript paper" in the desk for more details 

 




 