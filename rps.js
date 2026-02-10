// Game code. Let's go
console.log("Hello World")
function getComputerChoice(opponent) {
    opponent = (Math.random() * 10)
    if (opponent <= 3.3) {
        return "rock";
        } else if (opponent > 3.3 && opponent <= 6.6) {
            return "paper";
    } else return "scissors";
}
console.log(getComputerChoice())



