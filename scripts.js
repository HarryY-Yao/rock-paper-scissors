function getComputerChoice() {
    const min_choice = 1;
    const max_choice = 3;  


    let choice = Math.floor(Math.random() * (max_choice - min_choice + 1) + min_choice); // Calculates an integer between 1 and 3
    
    if (choice == 1) {
        choice = "rock";
    } else if (choice == 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}


function getHumanChoice() {
    let choice = prompt("Please Enter your choice (Rock, Paper, or Scissors): ");
    return choice.toLowerCase();
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "scissors") {
            if (computerChoice == "scissors") {
                console.log("It's a tie! Scissors negates scissors");
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats paper");
                humanScore++;
            } else {
                console.log("You lose! Rock beats scissors");
                computerScore++;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "paper") {
                console.log("It's a tie! Paper negates paper");
            } else if (computerChoice == "rock") {
                console.log("You win! paper beats rock");
                humanScore++;
            } else {
                console.log("You lose! Scissors beats paper");
                computerScore++;
            }
        } else if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("It's a tie! Rock negates rock");
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats scissors");
                humanScore++;
            } else {
                console.log("You lose! Paper beats rock");
                computerScore++;
            }
    
        } else {
            console.log("Invalid input");
        }
        console.log("You:", humanScore, "Computer:", computerScore);
    }

    if (humanScore == computerScore) {
        console.log("You tied!");
    } else if (humanScore > computerScore) {
        console.log("You won!");
    } else if (humanScore < computerScore) {
        console.log("You lost!");
    }
    

}

playGame();
