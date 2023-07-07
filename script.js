let userScore = 0;
let computerScore = 0;
let result
const userBoard = document.querySelector(".userScore");
const compBoard = document.querySelector(".compScore");
const info = document.querySelector(".Info");

game();

function game() {
  function getUserChoice() {
    document.addEventListener("click", assignUserChoice);
    function assignUserChoice(e) {
      if (e.target.tagName !== "BUTTON") return;
      userChoice = e.target.className;
      console.log(userChoice);
      playRound(computerChoice, userChoice);
    }
  }

  function showInfo() {
    if (result == 'lose' ) {
      userBoard.textContent = `You : ${userScore}`;
      compBoard.textContent = `Computer : ${computerScore}`;
      info.textContent = `You lose, ${computerChoice} beats ${userChoice}`;
    } else if (result == 'win') {
      userBoard.textContent = `You : ${userScore}`;
      compBoard.textContent = `Computer : ${computerScore}`;
      info.textContent = `You win, ${userChoice} beats ${computerChoice}`;
    } else if (result == 'draw') {
      userBoard.textContent = `You : ${userScore}`;
      compBoard.textContent = `Computer : ${computerScore}`;
      info.textContent = `it's a draw`;
    }
  }

  function playRound(computerSelection, userSelection) {
    if (
      (userSelection === "Rock" && computerSelection === "Paper") ||
      (userSelection === "Scissors" && computerSelection === "Rock") ||
      (userSelection === "Paper" && computerSelection === "Scissors")
    ) {
      computerScore++;
      result = 'lose'
      showInfo()
      computerChoice = getComputerChoice();
      console.log(`Computer : ${computerChoice}`);
    } else if (
      (userSelection === "Scissors" && computerSelection === "Paper") ||
      (userSelection === "Rock" && computerSelection === "Scissors") ||
      (userSelection === "Paper" && computerSelection === "Rock")
    ) {
      userScore++;
      result = 'win'
      showInfo()
      computerChoice = getComputerChoice();
      console.log(`Computer : ${computerChoice}`);
    } else {
      result = 'draw'
      showInfo()
      computerChoice = getComputerChoice();
      console.log(`Computer : ${computerChoice}`);
    }
  }
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 2.4);
    return gameChoice[choice];
  }

  let gameChoice = ["Rock", "Paper", "Scissors"];
  let computerChoice = getComputerChoice();
  let userChoice = getUserChoice();
  console.log(`Computer : ${computerChoice}`);
}

// if (userScore > computerScore) {
//   console.log(
//     `Computer : ${computerScore} point \nYou : ${userScore} point \nYou win`
//   );
// } else if (userScore === computerScore) {
//   console.log(
//     `Computer : ${computerScore} point \nYou : ${userScore} point \nIt's a draw`
//   );
// } else {
//   console.log(
//     `Computer : ${computerScore} point \nYou : ${userScore} point \nYou lose`
//   );
// }
