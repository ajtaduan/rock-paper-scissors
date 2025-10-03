// declared constant variable for rock, paper, and scissors
const str1 = "Rock";
const str2 = "Paper";
const str3 = "Scissors";

// declared player score variable
let humanScore = 0;
let computerScore = 0;

// function that will randomly return one of the string values
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return str1;
    } else if (randomNumber < 0.66) {
        return str2;
    } else {
        return str3;
    }
}

// function that will return one of the valid choices depending on what user inputs
function getUserChoice() {
    let userChoice = prompt("Rock-Paper-Scissors Game. Choose!");
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

    if (userChoice === str1) {
        return str1;
    } else if (userChoice === str2) {
        return str2;
    } else if (userChoice === str3) {
        return str3;
    } else {
        return getUserChoice();
    }
}

// function that takes the human and computer player choices as arguments
function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if (human === computer) {
        console.log("It's a tie!");
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

// function that calls playRound to play 5 rounds, keeps track of the scores and declares a winner
function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        let humanChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        console.log(`Computer choose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the winner!");
    } else {
        console .log("It's a tie!");
    }
} 

// call the function playGame
playGame();