let computerGuess; 
let userGuesses = [];
let attempts = 0;

function init() {
    computerGuess = Math.floor(Math.random() * 100) + 1;
    console.log(computerGuess);
    document.getElementById('newGameButton').style.display = "none";
    document.getElementById('gameArea').style.display = "none";
}

function startGame() {
    document.getElementById('welcomeScreen').style.display = "none";
    document.getElementById('gameArea').style.display = "block";
}

function easyMode() {
    startGame();
}

function hardMode() {
    startGame();
}

function compareGuess() {
    const userGuess = Number(document.getElementById('inputBox').value)
    userGuesses.push(" " + userGuess);
    attempts++;
    document.getElementById('guesses').innerHTML = userGuesses;
    document.getElementById('attempts').innerHTML = attempts;

    if (userGuess > computerGuess) {
        document.getElementById('textOutput').innerHTML = "Your guess is too high";
        document.getElementById('inputBox').value = "";
    } else if (userGuess < computerGuess) {
        document.getElementById('textOutput').innerHTML = "Your guess is too low";
        document.getElementById('inputBox').value = "";
    } else {
        document.getElementById('textOutput').innerHTML = "You got it!";
        document.getElementById('inputBox').value = "";
    }
}