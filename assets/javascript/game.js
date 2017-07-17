//Variable table of contents
var wins = 0;
var losses = 0;
var guessesMade = [];
var guessesRemaining = 10;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerRandom = //Computer selects a random letter from the alphabet array
  alphabet[Math.floor(Math.random() * alphabet.length)];

//When the user presses a key, the following will occur if the keycode is assigned to a letter: 
//1. it is pushed to the empty array assigned to guessesMade. 
//2. The value of guessesRemaining will decrease by one. 
document.onkeyup = function(event){

if (event.keyCode >= 65 && event.keyCode <= 90){
  userGuess= event.key.toLowerCase();
  guessesMade.push(userGuess);
  guessesRemaining -=1;

//This function resets the game (number of guesses and computer selected letter)
var reset = function(){
  guessesRemaining=10;
  computerRandom = alphabet[Math.floor(Math.random() * alphabet.length)];

  guessesMade = [];
}

//If a user's guess matches the computer guess, the value of wins is updated. The reset function is initiated (refer to above).
  if (userGuess === computerRandom){
    wins +=1;
    reset();

  }

//Similarly, if a user uses up the maximum number of guessses, the value of losses is updated. The reset function is initiated (refer to above).

if(guessesRemaining === 0) {
  losses +=1;
  reset();
}

//This ensures that the HTML display equals the values of the variables.

  document.getElementById("winCount").innerHTML = wins;

  document.getElementById("lossCount").innerHTML = losses;

  document.getElementById("triesRemaining").innerHTML = guessesRemaining;

  document.getElementById("triedGuesses").innerHTML = guessesMade.join(", ")
  

//This "else" statement initiates if user presses a non-letter key.
}

else {
  alert("This is not a letter!")

}
}