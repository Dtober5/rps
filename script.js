const computerOptions = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

const playerHand = document.getElementById('player-hand');
const computerHand = document.getElementById('computer-hand');
const winnerText = document.getElementById('winner');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', function () {
        const playerChoice = this.textContent.toLowerCase();
        const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
        
        playerHand.src = `assets/${playerChoice}.png`;
        computerHand.src = `assets/${computerChoice}.png`;

        compareHands(playerChoice, computerChoice);
    });
});

function compareHands(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        winnerText.textContent = "It's a tie!";
        return;
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        winnerText.textContent = "Player wins!";
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        winnerText.textContent = "Computer wins!";
    }
}
