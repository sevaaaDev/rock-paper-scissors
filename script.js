let userScore = 0;
let computerScore = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    let gameChoice = ["Rock", "Paper", "Scissors"];

    function getComputerChoice() {
      let computerChoice = Math.floor(Math.random() * (3 - 1 + 1));
      return (computerChoice = gameChoice.at(computerChoice));
    }

    let computerChoice = getComputerChoice();

    function getUserChoice() {
      let input = prompt("Rock, Paper, Scissors");
      let fixedChoice =
        input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      if (
        !(
          fixedChoice === "Paper" ||
          fixedChoice === "Rock" ||
          fixedChoice === "Scissors"
        )
      ) {
        alert("You have a typo or did not write anything");
        getUserChoice();
      } else {
        return (input = fixedChoice);
      }
    }

    let userChoice = getUserChoice();

    alert(playRound(computerChoice, userChoice));
    console.log(playRound(computerChoice, userChoice));

    function playRound(computerSelection, userSelection) {
      if (
        (userSelection === "Rock" && computerSelection === "Paper") ||
        (userSelection === "Scissors" && computerSelection === "Rock") ||
        (userSelection === "Paper" && computerSelection === "Scissors")
      ) {
        computerScore += 1;
        return `You lose, ${computerChoice} beats ${userChoice}`;
      } else if (
        (userSelection === "Scissors" && computerSelection === "Paper") ||
        (userSelection === "Rock" && computerSelection === "Scissors") ||
        (userSelection === "Paper" && computerSelection === "Rock")
      ) {
        userScore += 1;
        return `You win, ${userChoice} beats ${computerChoice}`;
      } else {
        computerScore += 1;
        userScore += 1;
        return `it's a draw`;
      }
    }
  }
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
}
