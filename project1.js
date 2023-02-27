let numRounds = prompt("How many rounds do you want to play?","1")

computerChoice = ''; 
let computerScore = 0;
let userScore = 0;
let totalTies= 0;

for (let i = 1; i <= Number(numRounds); i++) {
    let randomNumber = Math.floor(Math.random() * 3); 
    let userChoice = prompt("rock, paper, or scissors?");


  if (randomNumber == 0) {
    computerChoice = "rock";
  } else if (randomNumber == 1) {
    computerChoice = "paper";
  } else if (randomNumber == 2) {
    computerChoice = "scissors";
  };

  if (userChoice == "rock") {
    if (computerChoice == "rock") { 
      window.alert("Its a tie! You both chose " + computerChoice)
      totalTies++
    } else if(computerChoice == "paper") { 
      window.alert("You lose. The computer chose " + computerChoice)
      computerScore++
    } else if(computerChoice == "scissors") {
      window.alert("You win! The computer chose " + computerChoice)
      userScore++
    }
  };

  if (userChoice == "paper") {
    if (computerChoice == "rock") {
      window.alert("You win! The computer chose " + computerChoice)
      userScore++
    } else if (computerChoice == "paper") {
      window.alert("Its a tie! You both chose " + computerChoice)
      totalTies++
    } else if (computerChoice == "scissors") {
      window.alert("You lose. The computer chose " + computerChoice)
      computerScore++
    }
  };

  if (userChoice == "scissors") {
    if (computerChoice == "rock") {
      window.alert("You lose. The computer chose " + computerChoice)
      computerScore++
    } else if (computerChoice == "paper") {
      window.alert("You win! The computer chose " + computerChoice)
      userScore++
    } else if (computerChoice == "scissors") {
      window.alert("Its a tie! You both chose " + computerChoice)
      totalTies++
    }
  };
};

window.alert(" You have won: " + userScore + "\n You have lost: "
+ computerScore + "\n Total ties: " + totalTies + "\n Out of " + 
numRounds + " rounds.")