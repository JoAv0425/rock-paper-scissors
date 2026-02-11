// Game code. Let's go

console.log("Hello World")
function getComputerChoice() {
    let opponent = (Math.random() * 10)
    if (opponent <= 3.3) {
        return "rock";
        } else if (opponent > 3.3 && opponent <= 6.6) {
            return "paper";
    } else return "scissors";
}
const computer = getComputerChoice();
console.log(computer)

//logic to get human choice
function getHumanChoice() {
    let choice = prompt("Which one's it gonna be?", '')
    return choice;
}
const human = getHumanChoice();
console.log(human)

//player score variables
let humanScore = 0
let computerScore = 0

//logic to play a single round 
function playRound (humanChoice,computerChoice) {
   humanChoice = humanChoice.toLowerCase();
   if (humanChoice === computerChoice) {
    console.log("It's a tie!");
   } else if ((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "scissors")
    || ((humanChoice === "scissors" && computerChoice === "rock"))
    ) { console.log("You lose!");
        ++computerScore;
   } else {console.log("You win!");
    ++humanScore
   }
}

playRound(human,computer);


