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
    console.log(userChoice);
    alert(playRound(computerChoice, userChoice));

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
