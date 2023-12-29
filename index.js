let result = "test";
let playerScore = 0;
let computerScore = 0;
let scoreTracker = document.querySelector(".scoreTracker")
let playerScoreDisplay = document.querySelector(".playerScore")
let computerScoreDisplay = document.querySelector(".computerScore")
function getComputerChoice(){
    const choice = Math.floor(Math.random()*3)+1
    switch (choice){
        case 1:
            return ("scissor")
        case 2:
            return("rock")
        case 3:
            return("paper")
    }
}

function getPlayerChoice(choice){
    return(choice.toLowerCase());
}

/*function game(rounds){
    let winningScore = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (winningScore < Math.ceil(rounds/2)) {
        let roundPlayerChoice = getPlayerChoice()
        let roundComputerChoice = getComputerChoice()
        console.log(roundComputerChoice, roundPlayerChoice)
        let outcome = (play(roundComputerChoice, roundPlayerChoice))
        console.log(outcome)
        switch (outcome) {
            case "win":
                playerScore +=1
                break;
            case "lose":
                computerScore+=1
                break;
            case "tie":
                break;
            default:
                break;
        } 
        winningScore= Math.max(playerScore, computerScore);
        console.log(winningScore)

    }
    if(playerScore>computerScore){
        console.log("Congratulations, you win!");
    }
    else{
        console.log("Computer wins. Better luck next time!")
    }
}*/

function updateScoreMessage(winner, computerScore, playerScore){
    if (winner != "none"){
        scoreTracker.textContent = `${winner} wins.`
        playerScoreDisplay.textContent = `Player: ${playerScore}`
        computerScoreDisplay.textContent = `Computer: ${computerScore}`
    }
    else{
        scoreTracker.textContent = "It's a tie"
    }
}

function playRound(playerChoice){
    let playerSelection = getPlayerChoice(playerChoice);
    let computerSelection = getComputerChoice(); 
    if (playerSelection == computerSelection){
        winner = "none";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissor')||
             (playerSelection == 'paper' && computerSelection == 'rock')||
             (playerSelection == 'scissor' && computerSelection == 'rock')){
                winner = "player"
                playerScore++;
             }
    else{
            winner = "computer"
            computerScore++;
             }
    updateScoreMessage(winner, computerScore, playerScore);
    if (Math.max(computerScore, playerScore) == 5){
        scoreTracker.textContent = scoreTracker.textContent + "Game Over"
    }

}
const buttons = document.querySelectorAll('button')
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{playRound(button.id)})
});
const body = document.querySelector("body")
let resultDiv = document.createElement("div");

body.appendChild(resultDiv)