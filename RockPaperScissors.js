const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('I don\'t recognize that!')
    }
};

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'The player wins the game in a great explosion!';
    }
    if (userChoice === computerChoice) {
        return 'It is a tie.';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer has won!';
        } else {
            return 'The player has won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer has won!';
        } else {
            return 'The player has won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer has won!';
        } else {
            return 'The player has won!';
        }
    }
};

function playGame() {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    if (userChoice === undefined) {
        return;
    } else { 
        console.log(`The player has chosen ${userChoice}! The computer has chosen ${computerChoice}!`);
        console.log(determineWinner(userChoice, computerChoice));
    }
};

playGame();
