
//Get the element with the ID of qwerty (wraps keyboard) and save it to a variable
const letterBoard = document.getElementById('qwerty');

//Get the element with the ID of phrase (wraps ul where phrase displayed) and save it to a variable. 
const phraseUl = document.getElementById('phrase').getElementsByTagName('ul')[0];

//Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses 
let missed = 0;

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
      liValue = liItem.innerHTML;
      //make lowercase for consist comparison
      liLower = liValue.toLowerCase();  
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
function checkLetter(){
  //has one parameter: the button clicked when guessing
  //get all elements with class '.letter'
  //loop thru all letters check if they match letter button chosen
  //if matches:
    //add '.show' class to item containing that letter
    //store letter in a variable
    //return the letter
  //if no match:
    // return 'null'
}


// Player guesses a letter on click - add eventListener to keyboard
  // listen only for button events from keyboard
  // when chosen, add '.chosen' class to button so it can't be chosen twice
  // set button attribute to 'disabled = true' so that it won't respond to user clicks
  // pass checkLetter function
  // store returned letter inside a variable called 'letterFound'


// TEST HERE TO SEE IF LETTERS APPEAR


// If letter is not in phrase, remove one life heart - Add to KEYBOARD EVENT ABOVE, after 'checkLetter' is called
  // check value of 'letterFound' variable
  //if letterFound = null, remove 1 attempt, increase 'missed' to +1
  // change display of heart/not heart based on missed counter -change src attrib to dead heart

//Check to see if won or lost - Add to KEYBOARD EVENT ABOVE, after 'checkLetter' is called
  // If phrase completed with less than 5 wrong guesses, show winning screen 
    //check # of letters with '.show' 
    //check # of letters with class '.letters'
      //if show = letters, show win screen + text
    //check # of misses
      //if misses >= 5, show '.lose' screen



// Add CSS transition for letter as revealed - Add to KEYBOARD EVENT ABOVE, after 'checkLetter' is called
  //apply transition styles to 'show class' - do in CSS file?


// Reset game - recreate buttons, get new phrase, reset misses to 0
  //Add to KEYBOARD EVENT ABOVE, after 'checkLetter' is called
  //create 'Play Again' button
  //add event listener to 'Play Again' - on click, 
    //recreate keyboard buttons
    //generate new random phrase
    //reset misses to 0







