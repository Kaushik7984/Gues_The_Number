let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid no.");
  } else if (guess < 1) {
    alert("please enter a valid no. more than 1");
  } else if (guess > 100) {
    alert("please enter a valid no. less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessege(`Game Over . Random number is ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displayMessege(`Your Guess is Right`);
    endGame();
  } else if (guess < randomnumber) {
    displayMessege(` Number is too Low`);
  } else if (guess > randomnumber) {
    displayMessege(` Number is too High`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessege(messege) {
  lowOrHi.innerHTML = `<h2>${messege}</h2>`;
}

function endGame() {
  userInput.value = ``;
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2   id="newGame"> Start New Game </h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
