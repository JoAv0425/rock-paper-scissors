// Game code. Let's go

console.log("Hello World")

 






const div = document.querySelector('div');


const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
rockBtn.value = 'rock';
div.appendChild(rockBtn);

const PaperBtn = document.createElement('button');
PaperBtn.textContent = 'Paper';
PaperBtn.value = 'paper';
div.appendChild(PaperBtn);

const ScissorsBtn = document.createElement('button');
ScissorsBtn.textContent = 'Scissors';
ScissorsBtn.value = 'scissors';
div.appendChild(ScissorsBtn);





//Write the logic to play the entire game
function playGame() {
    
    
    let human;
    

    function getComputerChoice() {
    let opponent = (Math.random() * 10)
    if (opponent <= 3.3) {
        return "rock";
        } else if (opponent > 3.3 && opponent <= 6.6) {
            return "paper";
    } else return "scissors";
   };
    let computer;



    //player score variables
    let humanScore = 0;
    let computerScore = 0;
    let verdict = '';
    

     //logic to play a single round   
    function playRound (humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    verdict = "it's a tie";
   } else if ((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "scissors")
    || ((humanChoice === "scissors" && computerChoice === "rock"))
    ) { console.log("You lose!");
        verdict = "You lose!";
        ++computerScore;
   } else {console.log("You win!");
    verdict = "You win!";
    ++humanScore;
   }
  } 

 


   div.addEventListener('click', (e) => {
    human = e.target.value;
    console.log(human);
    computer = getComputerChoice();
    console.log(computer);
    playRound(human,computer);

    let score = new CustomEvent('scoreUpdate', {
    detail: {
        humanScore: `${humanScore}`,
        computerChoice: `${computerScore}`
    },
    bubbles: true,
    });

    div.dispatchEvent(score);
 });

 

 const div2 = document.createElement('div');
 div2.id = 'scoreboard';
 div.appendChild(div2);
 const div3 = document.createElement('div');
 div.appendChild(div3)

 div.addEventListener('scoreUpdate', () => {
    div2.textContent = `YOU: ${humanScore}      COMPUTER: ${computerScore}`;
    div3.textContent = verdict;

 } );

 const body = document.querySelector('body');
 const buttons = document.querySelectorAll('button');
 body.addEventListener('scoreUpdate', () => {
    if (humanScore === 5 && computerScore !== 5 ) {
    alert('Congratulations!!!');
    buttons.forEach(btn => btn.disabled = true);
    return;
 } else if (humanScore != 5 && computerScore == 5){
    alert("Better Luck Next Time");
    buttons.forEach(btn => btn.disabled = true);
    return;
 };
 })

}
playGame();

