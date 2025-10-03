// declared constant variable for rock, paper, and scissors
const str1 = "Rock";
const str2 = "Paper";
const str3 = "Scissors";

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
    let userChoice = prompt("Choose rock, paper, or scissors");
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