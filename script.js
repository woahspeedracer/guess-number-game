let computerGuess; 
let userGuesses = [];
let attempts = 0;
let maxguesses;

let low = 1;
let high = 100;

function updateRange() {
    const lowValue = document.getElementById('low');
    if (low === 1) {
        lowValue.style.flex = '0%';
        lowValue.style.background = '#83e1d0';
    } else {
        lowValue.style.flex = low + '%';
        lowValue.style.background = 'tomato';
    }

    const space = document.getElementById('space');
    space.style.flex = high - low + '%';
    space.style.background = '#83e1d0';

    const highValue = document.getElementById('high');
    highValue.style.flex = 100 - high + '%';
    highValue.style.background = 'tomato';

    const rangeOutput = document.getElementById('rangeOutput');
    rangeOutput.innerText = `${low} - ${high}`;

    // if (high - low > 5) {
    //     rangeOutput.style.marginLeft = low + "%";
    //     rangeOutput.style.marginRight = 100 - high + "%";
    // }
    rangeOutput.classList.add('flash');
}

function gameOver() {
    document.getElementById('newGameButton').style.display = "block";
    document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}

function newGame() {
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100) + 1;
    console.log(computerGuess);
    document.getElementById('newGameButton').style.display = "none";
    document.getElementById('gameArea').style.display = "none";
}

function startGame() {
    document.getElementById('welcomeScreen').style.display = "none";
    document.getElementById('gameArea').style.display = "block";
    console.log(computerGuess);
}

function easyMode() {
    maxguesses = 10;
    startGame();
}

function hardMode() {
    maxguesses = 5;
    startGame();
}

function compareGuess() {
    const userGuess = Number(document.getElementById('inputBox').value)
    userGuesses.push(" " + userGuess);
    document.getElementById('guesses').innerHTML = userGuesses;
    attempts++;
    document.getElementById('attempts').innerHTML = attempts;
    
    if (attempts < maxguesses) {
    
        if (userGuess > computerGuess) {
            if (userGuess < high) high = userGuess;
            document.getElementById('textOutput').innerHTML = "Your guess is too high";
            document.getElementById('inputBox').value = "";
        } else if (userGuess < computerGuess) {
            if (userGuess > low) low = userGuess;
            document.getElementById('textOutput').innerHTML = "Your guess is too low";
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('textOutput').innerHTML = `Correct! You got it in ${attempts} attempts`;
            gameOver();
        }
    } else {
        
        if (userGuess > computerGuess) {
            if (userGuess < high) high = userGuess;
            document.getElementById('textOutput').innerHTML = `You LOSE! The number was ${computerGuess}!`;
            gameOver();
           
        } else if (userGuess < computerGuess) {
            if (userGuess > low) low = userGuess;
            document.getElementById('textOutput').innerHTML = `You LOSE! The number was ${computerGuess}!`;
            gameOver();
            
        } else {
            document.getElementById('textOutput').innerHTML = `Correct! You got it in ${attempts} attempts`;
            gameOver();   
        }

    }
    updateRange();
}