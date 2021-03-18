let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

let low = 1;
let high = 100;

function updateRange() {
  const lowValue = document.getElementById("low");
  lowValue.style.flex = low + "%";
  lowValue.style.background = "none";
  const space = document.getElementById("space");
  space.style.flex = high - low + "%";
  space.style.background = "linear-gradient(rgb(45, 226, 0), rgb(24, 121, 0))";
  const highValue = document.getElementById("high");
  highValue.style.flex = 100 - high + "%";
  highValue.style.background = "none";
  const rangeOutput = document.getElementById("range-output");
  rangeOutput.innerText = `${low} - ${high}` // variable low - variable high
  rangeOutput.style.marginLeft = low -20 + "%";
  rangeOutput.style.marginRight = 100 - high - 20 + "%";
  rangeOutput.classList.add("flash");
  const rangeBackground = document.getElementById("range");
  rangeBackground.style.background = "none";
}

function initialize() {
  computerGuess = Math.floor(Math.random() * 100 + 1)
 document.getElementById("new-game-button").style.display = "none";
 document.getElementById("game-area").style.display = "none";
}

function startGameView() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("game-area").style.display = "block";
}

function easyMode() {
  startGameView();
  maxGuesses = 10;
}

function hardMode() {
  startGameView();
  maxGuesses = 5;
}

function gameEnd() {
  document.getElementById("new-game-button").style.display = "inline";
  document.getElementById("inputBox").setAttribute("readonly", "readonly");
}

function newGame() {
  window.location.reload();
}

function compareGuess() {
  const userInput = Number(document.getElementById("inputBox").value);
  userGuesses.push(" " + userInput);
  document.getElementById("guesses").innerHTML = userGuesses;
  attempts++;
  document.getElementById("attempts").innerHTML = attempts;
  if (attempts < maxGuesses) { // if below max guesses
    if (userInput > computerGuess) {
      if (userInput < high) high = userInput;
      document.getElementById("text-output").innerHTML = "Your guess is too high.";
      document.getElementById("inputBox").value = "";
    } else if (userInput < computerGuess) {
      if (userInput > low) low = userInput;
      document.getElementById("text-output").innerHTML = "Your guess is too low.";
      document.getElementById("inputBox").value = "";
    } else if (userInput == computerGuess && attempts == 1) {
      document.getElementById("text-output").innerHTML = "Correct! You win! It took you only one attempt, what the fuck?";
      gameEnd();
    } else {
      document.getElementById("text-output").innerHTML = "Correct! You win! It took you " + attempts + " attempts.";
      gameEnd();
    }
  } else { // this is the last guess
    if (userInput == computerGuess) {
      document.getElementById("text-output").innerHTML = "Correct! You got it in your last attempt. Phew!";
      document.getElementById("inputBox").value = "";
      gameEnd();
    } else {
      document.getElementById("text-output").innerHTML = "You lose! Huehuehue. The number was " + computerGuess;
      gameEnd();
    }
  }
  updateRange();
}

