//This create variable to store themu
const result = document.querySelector("#result");
const score = document.querySelector("#score"); 
const score1 = document.querySelector("#score1");
const winner = document.querySelector("#winner")

function getComputerChoice(){
  //generate random number between 0 1 2
  let randomNumber = Math.floor(Math.random() * 3)
  //the choice made by the computer
  if (randomNumber === 0) {
    return "rock";
  }
  else if (randomNumber === 1) {
     return "paper";
  }
  else {
    return "scissors";
  }
}
function playRound(humanChoice, computerChoice){
  //checks for tie
   if (computerChoice === humanChoice){
    result.textContent = `it's a tie! both chose ${humanChoice}`
   }
   //human wins
   else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
   ){
    humanScore++;
    result.textContent = `you win! ${humanChoice} beats ${computerChoice}`
   }
   else {
     computerScore++;
     result.textContent = `you lose! ${computerChoice} beats ${humanChoice}`
   }
   score.textContent = ` Human Score: ${humanScore}`
   score1.textContent = ` Computer Score: ${computerScore}`
  }

//this check who won
  let humanScore = 0
  let computerScore = 0
  let roundPlayed = 0

  let btn = document.querySelectorAll('button')

btn.forEach((button) => {
  button.addEventListener('click', () => {
    const humanChoice = button.textContent;
    console.log(humanScore)
    const computerChoice = getComputerChoice();
    roundPlayed++;
    if (roundPlayed >= 5){
      if (humanScore > computerScore) {
        winner.textContent = "Human Wins"
      }
      else if (computerScore > humanScore) {
        winner.textContent = "Computer Wins"
      }
      else{
        winner.textContent  = "Is A Tie"
      }
      return;
  }
    playRound(humanChoice, computerChoice);
  });
});


 
 