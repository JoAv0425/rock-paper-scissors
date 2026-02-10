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
console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Which one's it gonna be?", '')
    return choice;
}
console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound (humanChoice,computerChoice) {
   humanChoice.toLowerCase();
   if (humanChoice === computerChoice) {
    console.lo
   }
}

const human = getHumanChoice();
const computer = getComputerChoice();
