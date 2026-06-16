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
 console.log(getComputerChoice())

//this get the human choice
function getHumanChoice(){
  let choice = prompt("What your choice?")
  let cleanChoice = choice.toLowerCase().trim()
  console.log(cleanChoice)
}

//this check who won
 function playgame(){
  let humanScore = 0
  let computerScore = 0
  
  function playRound(humanChoice, computerChoice){
  //checks for tie
   if (getComputerChoice === getHumanChoice){
    console.log(`it's a tie! both chose ${humanChoice}`)
   }
   //human wins
   else if (
    (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
    (getHumanChoice === "paper" && getComputerChoice === "rock") ||
    (getHumanChoice === "scissors" && getComputerChoice === "paper")
   ){
    humanScore++;
    console.log(`you win! ${humanChoice} beats ${computerChoice}`)
   }
   else {
     computerScore++;
     console.log(`you lose! ${computerChoice} beats ${humanChoice}`)
   }
   
  }
   for (i = 1; i <= 5; i++){
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Current Score -> Human: ${humanScore} | Computer: ${computerScore}\n`);
   }

   console.log("Final Result");
   if (humanScore > computerScore) {
    console.log('victory')
   }
   else if (computerScore > humanScore) {
      console.log("defeat")
    }
    else {
      console.log("Stalemate")
    }
  }
 
 