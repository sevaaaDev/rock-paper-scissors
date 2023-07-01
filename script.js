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
  } else {
    return (userChoice = fixedChoice);
  }
}

function playRound(computerSelection, userSelection) {
  if (
    (userSelection === "Rock" && computerSelection === "Paper") ||
    (userSelection === "Scissors" && computerSelection === "Rock") ||
    (userSelection === "Paper" && computerSelection === "Scissors")
  ) {
    return `Computer : ${computerChoice} \nYou : ${userChoice} \nYou lose`;
  } else if (
    (userSelection === "Scissors" && computerSelection === "Paper") ||
    (userSelection === "Rock" && computerSelection === "Scissors") ||
    (userSelection === "Paper" && computerSelection === "Rock")
  ) {
    return `Computer : ${computerChoice} \nYou : ${userChoice} \nYou win`;
  } else {
    return `Computer : ${computerChoice} \nYou : ${userChoice} \nDraw`;
  }
}

let result = playRound(computerChoice, userChoice);

alert(result);
