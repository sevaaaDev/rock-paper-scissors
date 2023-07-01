/* Make a rock paper scissors game
   the opponent is computer
   make an array of the thing(RPS)
   get random num between 0 to 2
   index the array using the random num
   assign that value to computer choice
*/
/*
   make a prompt that let user input value
   check for typo or case sensitive
   if there is a typo, alert user
   if no typo, assign the value to userChoice
*/
/*
   make all possibility of choice
   compare it
   say "you win" if user won or "you lose" if user lose
*/
/* change playRound return to 3 if win, 1 if draw, 0 if lose
   calc the retur value
   if the value is userScore > computerScore, say you win
*/

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
    let userChoice = prompt("Rock, Paper, Scissors");

    checkUserTypo(userChoice);

    function checkUserTypo() {
      let fixedChoice =
        userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
      if (
        !(
          fixedChoice === "Paper" ||
          fixedChoice === "Rock" ||
          fixedChoice === "Scissors"
        )
      ) {
        alert("You have a typo or did not write anything");
        game();
      } else {
        return (userChoice = fixedChoice);
      }
    }

    playRound(computerChoice, userChoice);

    function playRound(computerSelection, userSelection) {
      if (
        (userSelection === "Rock" && computerSelection === "Paper") ||
        (userSelection === "Scissors" && computerSelection === "Rock") ||
        (userSelection === "Paper" && computerSelection === "Scissors")
      ) {
        computerScore += 3;
      } else if (
        (userSelection === "Scissors" && computerSelection === "Paper") ||
        (userSelection === "Rock" && computerSelection === "Scissors") ||
        (userSelection === "Paper" && computerSelection === "Rock")
      ) {
        userScore += 3;
      } else {
        computerScore += 1;
        userScore += 1;
      }
    }
  }
  if (userScore > computerScore) {
    alert(`Computer : ${computerScore} \nYou : ${userScore} \nYou win`)
  } else if (userScore === computerScore) {
    alert(`Computer : ${computerScore} \nYou : ${userScore} \nIt's a draw`)
  } else {
    alert(`Computer : ${computerScore} \nYou : ${userScore} \nYou lose`)
  }
}
