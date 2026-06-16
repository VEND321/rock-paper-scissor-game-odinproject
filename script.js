function getComputerChoice(){
  //generate random number between 0 1 2
  let randomNumber = Math.floor(Math.random() * 3)
  console.log(randomNumber)

  //the choice made by the computer
  if (randomNumber === 0) {
    return "Rock";
  }
  else if (randomNumber === 1) {
     return "Paper";
  }
  else {
    return "scissor";
  }
}
 console.log(getComputerChoice())
 getComputerChoice();