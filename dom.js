console.log("Hello world!");

function getComputerChoice() {
    choice = Math.floor(Math.random()*3);
    console.log("Choice = " + choice);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        console.log("Choice not valid, try again.");
        return getHumanChoice();
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;

    const scoreboard = document.querySelector("#scoreboard");
    scoreboard.textContent = `Human Score: 0 | Computer Score: 0`;

    const roundResult = document.querySelector("#roundResult");

    const gameResult = document.querySelector("#gameResult");

    const btnRock = document.querySelector("#btnRock");
    btnRock.addEventListener("click", () => {
        humanChoice = "rock";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })

    const btnPaper = document.querySelector("#btnPaper");
    btnPaper.addEventListener("click", () => {
        humanChoice = "paper";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })

    const btnScissors = document.querySelector("#btnScissors");
    btnScissors.addEventListener("click", () => {
        humanChoice = "scissors";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })

    function playRound(humanChoice, computerChoice) { 
    if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
            // console.log(`You win, ${humanChoice} + beats ${computerChoice}!`);
            roundResult.textContent = `You win, ${humanChoice} + beats ${computerChoice}!`;
            humanScore += 1;
            scoreboard.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
        } else if (humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "rock") {
                // console.log(`Computer wins, ${computerChoice} beats ${humanChoice}.`);
                roundResult.textContent = `Computer wins, ${computerChoice} beats ${humanChoice}.`;
                computerScore += 1;
                scoreboard.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
        } else if (humanChoice == "rock" && computerChoice == "rock" ||
            humanChoice == "paper" && computerChoice == "paper" ||
            humanChoice == "scissors" && computerChoice == "scissors") {
                // console.log(`It's a tie! Both players picked: ${humanChoice}`);
                roundResult.textContent = `It's a tie! Both players picked: ${humanChoice}`;
                scoreboard.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
        }
        if (humanScore == 5 || computerScore == 5) {
            console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`)
            if (humanScore > computerScore) {
                // console.log("You win the game!");
                gameResult.textContent = "You win the game!";
            } else if (humanScore < computerScore) {
                // console.log("You lose. Computer wins the game.");
                gameResult.textContent = "You lose. Computer wins the game.";
            }
        }
    }
}
playGame();
