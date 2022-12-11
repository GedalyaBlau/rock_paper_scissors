function getComputerChoice() {
    let oneToThree = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch (oneToThree) {
        case 1: computerChoice = "Rock";
            break;
        case 2: computerChoice = "Paper";
            break;
        case 3: computerChoice = "Scissors";
    }
    return computerChoice.toLowerCase();
}
//Test


function getPlayerChoice() {
    let playerChoice = prompt("Please choose Rock, Paper, or Scissors: ").toLowerCase();
    return playerChoice;

}

function getRoundWinner() {
    let computerChoice = getComputerChoice();
   
    let playerChoice = getPlayerChoice();
    console.log(`Computer chose ${computerChoice}`);
    console.log(`Player chose ${playerChoice}`);
    let winner;
    if (computerChoice === playerChoice) {
        winner = "tie";
    } else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) { winner = "computer"; } else {
        winner = "player";
    }
    console.log(`Winner of this round is: ${winner}`);
    return winner;

}





function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    let numberOfRounds = parseInt(prompt("how many rounds?"));
    for (let i = 0; i < numberOfRounds; i++) {
        let roundWinner = getRoundWinner();
        if (roundWinner === "computer") {
            computerScore++;
        } else if (roundWinner === "player") {
            playerScore++;
        }
        console.log(` The score so far is: Computer: ${computerScore}  Player:     ${playerScore} `);
    }
    let gameWinner;
    if (computerScore > playerScore) {
        gameWinner = "Computer";
    } else if (computerScore === playerScore) {
        gameWinner = "Tie"
    } else { gameWinner = "Player"; }
    console.log(`The final winner is ${gameWinner}!`)
}

playGame();


