playGame();

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  let result;
  const userBoard = document.querySelector(".userScore");
  const compBoard = document.querySelector(".compScore");
  const selector = document.querySelectorAll("img");
  
  for (let i = 0; i < selector.length; i++) {
    selector[i].addEventListener('click', () => {
      userChoice = selector[i].className
      playRound()
    })
  }

  function showInfo() {
    if (result == "lose") {
      userBoard.textContent = userScore;
      compBoard.textContent = computerScore;
    } else if (result == "win") {
      userBoard.textContent = userScore;
      compBoard.textContent = computerScore;
    } else if (result == "draw") {
      userBoard.textContent = userScore;
      compBoard.textContent = computerScore;
    }
  }

  function playRound() {
    if (
      (userChoice === "Rock" && computerChoice === "Paper") ||
      (userChoice === "Scissors" && computerChoice === "Rock") ||
      (userChoice === "Paper" && computerChoice === "Scissors")
    ) {
      computerScore++;
      result = "lose";
      showInfo();
      checkResult();
      computerChoice = getComputerChoice();
    } else if (
      (userChoice === "Scissors" && computerChoice === "Paper") ||
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock")
    ) {
      userScore++;
      result = "win";
      showInfo();
      checkResult();
      computerChoice = getComputerChoice();
    } else {
      result = "draw";
      showInfo();
      checkResult();
      computerChoice = getComputerChoice();
    }
  }
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 2.4);
    return gameChoice[choice];
  }

  function checkResult() {
    if (userScore == 5 || computerScore == 5) {
      for (let i = 0; i < selector.length; i++) {
        selector[i].style.display = "none";
      }
      const message = document.createElement("div");
      container.append(message);
      message.style.textAlign = 'center'
      message.style.fontSize = '3rem'
      message.style.gridRow = '4/6'
      message.style.gridColumn = '3/5'
      if (userScore < computerScore) {
        message.innerText = "You lose";
      } else {
        message.innerText = "You win";
      }
    }
  }
  let gameChoice = ["Rock", "Paper", "Scissors"];
  let computerChoice = getComputerChoice();
  let userChoice;
}
