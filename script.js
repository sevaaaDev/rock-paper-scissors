/* Make a rock paper scissors game
   the opponent is computer
   make an array of the thing(RPS)
   get random num between 0 to 2
   index the array using the random num
   assign that value to computer choice
   make a prompt that let user input value, make it case insensitive
   compare both value (computer and user)
   say "you win" if user won or "you lose" if user lose
*/

let gameChoice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * ((3 - 1) + 1));
  return computerChoice = gameChoice.at(computerChoice);
}

console.log('Computer : ' + getComputerChoice())



