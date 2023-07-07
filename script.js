let userScore = 0;
let computerScore = 0;
let result
const userBoard = document.querySelector(".userScore");
const compBoard = document.querySelector(".compScore");
const btn = document.querySelectorAll('button')

playGame()

function playGame() {
  function getUserChoice() {
    document.addEventListener("click", assignUserChoice);
    function assignUserChoice(e) {
      if (e.target.tagName !== "BUTTON") return;
      userChoice = e.target.className;
      playRound(computerChoice, userChoice);
    }
  }

  function showInfo() {
    if (result == 'lose' ) {
      userBoard.textContent = `You : ${userScore}`;
      compBoard.textContent = `Computer : ${computerScore}`;;
    } else if (result == 'win') {
      userBoard.textContent = `You : ${userScore}`;
      compBoard.textContent = `Computer : ${computerScore}`;;
    } else if (result == 'draw') {
      userBoard.textContent = `You : ${userScore}`;
      compBoard.textContent = `Computer : ${computerScore}`;
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
      checkResult()
      computerChoice = getComputerChoice();
    } else if (
      (userSelection === "Scissors" && computerSelection === "Paper") ||
      (userSelection === "Rock" && computerSelection === "Scissors") ||
      (userSelection === "Paper" && computerSelection === "Rock")
    ) {
      userScore++;
      result = 'win'
      showInfo()
      checkResult()
      computerChoice = getComputerChoice();
    } else {
      result = 'draw'
      showInfo()
      checkResult()
      computerChoice = getComputerChoice();
    }
  }
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 2.4);
    return gameChoice[choice];
  }
  
  function checkResult(){
    if (userScore == 5 || computerScore == 5) {
      userBoard.style.display = 'none'
      compBoard.style.display = 'none'
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = 'none'
      }
      const message = document.createElement('div')
      container.append(message)
      if (userScore < computerScore) {
        message.innerText = 'You lose'
      } else {
        message.innerText = 'You win'
      }

    } 
  }

  let gameChoice = ["Rock", "Paper", "Scissors"];
  let computerChoice = getComputerChoice();
  let userChoice = getUserChoice();
}

