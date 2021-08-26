//JavaScript file to run the Rock Paper Scissors(RPS) HTML page

//Reference buttons existing in HTML file
const buttonRock = document.querySelector('#btn-rock');
const buttonPaper = document.querySelector('#btn-paper');
const buttonScissors = document.querySelector('#btn-scissors');

//Create Event Listeners for RPS Buttons
buttonRock.addEventListener('click', () => {playRPS('rock',computerPlay())});
buttonPaper.addEventListener('click', () => {playRPS('paper',computerPlay())});
buttonScissors.addEventListener('click', () => {playRPS('scissors',computerPlay())});



//Function to create random choice for the computer
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    let computerOptions = ['rock', 'paper', 'scissors'];
    return (computerOptions[randomNumber]);
}

//Function to determine the winner of a round of RPS
function rpsDecider(p1,p2) {
    if (!(p1 == 'rock' || p1 == 'scissors' || p1 == 'paper')){
        return 'Choose Rock, Paper, or Scissors'
    }
    if (!(p2 == 'rock' || p2 == 'scissors' || p2 == 'paper')){
        return 'Choose Rock, Paper, or Scissors'
    }
    if (p1 === p2){
        return "tie"
    }
    if (p1 == 'rock'){
        if (p2 == 'scissors'){
            return 'p1'
        }
        return 'p2'
    }
    if (p1 == 'paper'){
        if (p2 == 'rock'){
            return 'p1'
        }
        return 'p2'
    }
    if (p1 == 'scissors'){
        if (p2 == 'paper'){
            return 'p1'
        }
        return 'p2'
    }
}


/*Function to play one round of RPS. User will be prompted for choice.
    Computer choice will be chosen randomly from computerPlay()*/
function playRPS(playerSelection, computerSelection){
    let winner = rpsDecider(playerSelection,computerSelection);
    if (winner === 'Choose Rock, Paper, or Scissors'){
        return 'Try again. Choose Rock, Paper, or Scissors'
    }

   //Logs variables for testing purposes
    console.log('User Choice = ' + playerSelection);
    console.log('Computer Choice = ' + computerSelection);
    console.log('Winner = ' + winner); 
    if (winner === 'tie'){
        return 'Tie game.'
    } else if (winner == 'p1'){
        return "Congrats, you win. " + playerSelection + " beats " + computerSelection + "."
    }
    return "You lose. " + computerSelection + " beats " + playerSelection + "."
}

//Function that plays 5 rounds of RPS and determines the winner
function game(){
    let playerScore = 0, computerScore = 0;
    for (let i= 1; i<6; i++){
        let userChoice = window.prompt("Choose: Rock, Paper, or Scissors", "Choose Wisely").toLowerCase();
        let computerChoice = computerPlay();
        let winner = rpsDecider(userChoice,computerChoice);
        if (winner === 'p1'){
            playerScore ++
            console.log('Player wins round ' + i)
        } else if (winner === 'p2') {
            computerScore ++
            console.log('Computer wins round ' + i)
        } else {
            console.log('Round ' + i + ' is a tie.')
        }
        console.log('The score is: Player:' + playerScore+ ' to Computer:' + computerScore);
    }
    if (playerScore == computerScore) {
        return "It's a tie."
    } else if (playerScore > computerScore) {
        return "Player wins."
    }
    return "Computer wins."
}