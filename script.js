let userScore = 0;
let computerScore = 0;

document.addEventListener("click", getUserChoice);

function getUserChoice(e) {
  if (e.target.tagName == "BUTTON") {
    userChoice = e.target.className
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 2.4);
  return gameChoice.at(choice);
}

function playRound(computerSelection, userSelection) {
  if (
    (userSelection === "Rock" && computerSelection === "Paper") ||
    (userSelection === "Scissors" && computerSelection === "Rock") ||
    (userSelection === "Paper" && computerSelection === "Scissors")
  ) {
    computerScore++;
    return `You lose, ${computerChoice} beats ${userChoice}`;
  } else if (
    (userSelection === "Scissors" && computerSelection === "Paper") ||
    (userSelection === "Rock" && computerSelection === "Scissors") ||
    (userSelection === "Paper" && computerSelection === "Rock")
  ) {
    userScore++;
    return `You win, ${userChoice} beats ${computerChoice}`;
  } else {
    return `it's a draw`;
  }
}

let gameChoice = ["Rock", "Paper", "Scissors"];
let computerChoice = getComputerChoice();
let userChoice;

// alert(playRound(computerChoice, userChoice));

if (userScore > computerScore) {
  alert(
    `Computer : ${computerScore} point \nYou : ${userScore} point \nYou win`
  );
} else if (userScore === computerScore) {
  alert(
    `Computer : ${computerScore} point \nYou : ${userScore} point \nIt's a draw`
  );
} else {
  alert(
    `Computer : ${computerScore} point \nYou : ${userScore} point \nYou lose`
  );
}
