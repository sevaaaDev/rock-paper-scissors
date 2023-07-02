let userScore = 0;
let computerScore = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    function getComputerChoice() {
      let computerChoice = Math.floor(Math.random() * (3 - 1 + 1));
      return (computerChoice = gameChoice.at(computerChoice));
    }
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
    let userChoice = getUserChoice();
    alert(playRound(computerChoice, userChoice));

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
