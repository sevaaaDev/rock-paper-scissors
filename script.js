playGame();

function playGame() {
  const selector = document.querySelectorAll("img");

  for (let i = 0; i < selector.length; i++) {
    selector[i].addEventListener("click", () => {
      if (selector[i].className !== "compChoice") {
        let userChoice = selector[i].className;
        let computerChoice = getComputerChoice();
        changeCompImg(computerChoice);
        playRound(userChoice, computerChoice);
      }
    });
  }

  function playRound(userChoice, computerChoice) {
    if (
      (userChoice === "Rock" && computerChoice === "Paper") ||
      (userChoice === "Scissors" && computerChoice === "Rock") ||
      (userChoice === "Paper" && computerChoice === "Scissors")
    ) {
      let result = "lose";
      getStatus(result);
      return;
    }
    if (
      (userChoice === "Scissors" && computerChoice === "Paper") ||
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock")
    ) {
      let result = "win";
      getStatus(result);
      return;
    }
    let result = "draw";
    getStatus(result);
  }
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 2.4);
    return gameChoice[choice];
  }

  function changeCompImg(choice) {
    const compImg = document.querySelector(".compChoice");
    if (choice === "Paper") {
      compImg.setAttribute("src", "img/Paper.png");
    } else if (choice === "Scissors") {
      compImg.setAttribute("src", "img/Scissors.png");
    } else if (choice === "Rock") {
      compImg.setAttribute("src", "img/Rock.png");
    }
  }

  function getStatus(result) {
    const statusText = document.querySelector(".status");
    if (result === "win") {
      statusText.textContent = "You Win";
    } else if (result === "lose") {
      statusText.textContent = "You Lose";
    } else if (result === "draw") {
      statusText.textContent = "Draw";
    }
  }
  let gameChoice = ["Rock", "Paper", "Scissors", "Paper", "Scissors", "Rock"];
}
