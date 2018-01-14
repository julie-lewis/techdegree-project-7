//Get the element with the ID of qwerty (wraps keyboard) and save it to a variable
const letterBoard = document.getElementById('qwerty');

//Get the element with the ID of phrase (wraps ul where phrase displayed) and save it to a variable. 
const phraseUl = document.getElementById('phrase').getElementsByTagName('ul')[0];

//Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses 
let missed = 0;

// get heart images
const img = document.getElementsByTagName('img');

//get reset button
const btnStart = document.getElementsByClassName('btn__reset')[0];

// Remove Overlay on click - Event listener on Start Game Button
const startScreen = document.getElementById('overlay');
const startButton = startScreen.querySelector('a');
startButton.addEventListener('click', () => {
  startScreen.style.display = 'none';
});


// Create 5 Random Phrases array - store as string, only letters/spaces
const phrases = ["Ma is White", "Whero is Red", "Kakariki is Green", "Pango is black Mangu is too", "Kowhai Yellow Pakaka Brown Kiko rangi Blue", "Pa raka raka is our Orange"];


// Create Function to Choose Random Phrase, Split Phrase into Letters - function takes array as a parameter so it is reusable

function getRandomPhraseAsArray(arr){
  //sets limit for random number generation range
  const limit = arr.length;
  //generate a random number with range of indexes from array
  let phraseIndex = Math.floor(Math.random() * (limit));
  //select a phrase by random index value
  let phraseSelect = arr[phraseIndex];
  //split array into characters
  let phraseChar = phraseSelect.split("");
  //return array of characters
  return phraseChar;
}


// Use function- pass 'phrases' array as an argument when function called 
//getRandomPhraseAsArray(phrases);
let phraseArray = getRandomPhraseAsArray(phrases);

// Create Function to Put Letters on Game Board
// set up to take ANY array (parameter 'arr')

function addPhraseToDisplay(arr){
    // For each charItem in array:
    for (let i = 0; i < arr.length; i += 1) {
      //create instance for each loop thru
      let charItem = arr[i];
      //create li
      const liItem = document.createElement('LI');
      // create text node
      let liText = document.createTextNode(charItem);
      // wrap in li liItem
      liItem.appendChild(liText);
      //get value in li
      let liValue = liItem.innerHTML;
      //make lowercase for consist comparison
      let liLower = liValue.toLowerCase();  
      // if content charItem = " " 
      if ( liLower == " ") {
        //apply space class
        liItem.className = 'space';
      // add class '.letter' to li
      } else liItem.className = 'letter';
      //append li to #phrase ul in HTML
      phraseUl.appendChild(liItem);
    }
}

addPhraseToDisplay(phraseArray); 



// Create 'checkLetter' function
//has one parameter: the button clicked when guessing - this will be passed in later
function checkLetter(arg) {
  // creates counter to check, used later outside of letter loop
  let check = 0;
  //get all elements with class '.letter'
  const letters = document.getElementsByClassName('letter');
  //loop thru all letters
  for (let i = 0; i < letters.length; i++) {
    //create letter instance for each loop thru
    let letter = letters[i];
    //store letter value in a non-case-sensitive variable
    let letterItem = letter.innerHTML.toLowerCase();
    // test to see if argument passes matches each letter instance
    if(letterItem === arg) {
      // add class show to letter
      letter.className += " show";
      // increase check counter, demoing match was made
      check++;
    }
  }
  // if there's a match, check becomes 0 >, so if there's a match
  if (check > 0) {
    //return the letter that was passed in and created a match
    return arg;
  //if check is not more than 0, there was no match, so null is returned
  } else return null;
}








// Player guesses a letter on click - add eventListener to keyboard
letterBoard.addEventListener('click', (e)=>{
  if (e.target.tagName === 'BUTTON') {

    //get value of button on key board
    let keyValue = e.target.innerHTML;
    //get all screenButtons
    const screenButtons = document.getElementsByTagName("button");
    //for each screenButton
    for (let i = 0; i < screenButtons.length; i += 1) {
      //create instance for each loop thru
      let screenButton = screenButtons[i]; 
      //get value of button on screenButtonValue
      let screenButtonValue = screenButton.textContent;
      
      //if keyButton == screenButtonValue 
      if (keyValue == screenButtonValue) {
        //add '.chosen' class to screen button
        screenButton.className += " chosen";
        //set button attribute to 'disabled = true' so that it won't respond to user clicks
        screenButton.setAttribute('disabled', 'true');      
      }
    }

    // pass checkLetter function, store returned letter inside a variable called 'letterFound' 
    let letterFound = checkLetter(keyValue); 

  /*
    // add CSS transition
    //get show items
    var showStyle = document.getElementById(' show');
    //change css for 'show' class
    showStyle.style.transition = "all .5s ease-in";
  */

    //if letterFound = null, remove 1 attempt, increase 'missed' to +1
    if (letterFound === null && missed < 5) {
      // change src attrib to dead heart
      img[4-missed].src ="images/lostHeart.png";
      //increase missed counter by 1
      missed++;
    }


    // If phrase completed with less than 5 wrong guesses, show winning screen 
    //check # of letters with '.show'
    const show = document.getElementsByClassName('show');
    //check # of letters with class '.letters'
    const letter = document.getElementsByClassName('letter');
    let result;
    //if show = letters, show win screen + text
    if(show.length === letter.length){
      overlay.className = 'win';
      overlay.style.display = 'flex';
      overlay.children[0].innerHTML = 'You win!'; 
      //create 'Play Again' button
      btnStart.innerHTML = 'Play Again';
    //check # of misses
    } else if(missed >= 5){
      //if misses >= 5, show '.lose' screen
      overlay.className = 'lose';
      overlay.style.display = 'flex';
      overlay.children[0].innerHTML = 'Sorry, you lose!'; 
      //create 'Play Again' button
      btnStart.innerHTML = 'Play Again';
    }
    

    //add event listener to 'Play Again' - on click
    btnStart.addEventListener('click', (e)=>{
      overlay.style.display = 'none';
      //reset misses to 0
      missed = 0;
      //empty phrase
      phraseUl.innerHTML = '';
      for (let i = 0; i <img.length; i++) {
        img[i].src = "images/liveHeart.png";
      }
      //recreate keyboard buttons
      for (let i = 0; i < screenButtons.length; i++) {
        screenButtons[i].classList.remove('chosen');
        screenButtons[i].disabled = false;
      }
      //generate new random phrase
      let phraseArray = getRandomPhraseAsArray(phrases);
      addPhraseToDisplay(phraseArray);
    });

  }
});



  








   
    
    
    







