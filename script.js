let btn = document.querySelectorAll('button')

btn.forEach((button) => {
  button.addEventListener('click', () =>{
    humanChoice = button.textContent;
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
  })
})



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


//this check who won
 function playgame(){
  let humanScore = 0
  let computerScore = 0
  
  function playRound(humanChoice, computerChoice){
  //checks for tie
   if (computerChoice === humanChoice){
    console.log(`it's a tie! both chose ${humanChoice}`)
   }
   //human wins
   else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
   ){
    humanScore++;
    console.log(`you win! ${humanChoice} beats ${computerChoice}`)
   }
   else {
     computerScore++;
     console.log(`you lose! ${computerChoice} beats ${humanChoice}`)
   }
   
  }
   /*for (let i = 1; i <= 5; i++){
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
    }*/
  }

  playgame();
 
 