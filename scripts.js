const container = document.querySelector(".container")
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const announcer = document.createElement("div");
container.appendChild(announcer);


let humanScore = 0;
let computerScore = 0;


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


function getHumanChoice(choice) {
    return choice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            announcer.textContent = ("It's a tie! Scissors negates scissors");
        } else if (computerChoice == "paper") {
            announcer.textContent = ("You win! Scissors beats paper");
            humanScore++;
        } else {
            announcer.textContent = ("You lose! Rock beats scissors");
            computerScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            announcer.textContent = ("It's a tie! Paper negates paper");
        } else if (computerChoice == "rock") {
            announcer.textContent = ("You win! paper beats rock");
            humanScore++;
        } else {
            announcer.textContent = ("You lose! Scissors beats paper");
            computerScore++;
        }
    } else if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            announcer.textContent = ("It's a tie! Rock negates rock");
        } else if (computerChoice == "scissors") {
            announcer.textContent = ("You win! Rock beats scissors");
            humanScore++;
        } else {
            announcer.textContent = ("You lose! Paper beats rock");
            computerScore++;
        }
        
    } else {
        announcer.textContent = ("Invalid input");
    }
    announcer.textContent = ("You:", humanScore, "Computer:", computerScore);
}


function playGame() {
    
    
    if (humanScore == computerScore) {
        announcer.textContent = ("You tied!");
    } else if (humanScore > computerScore) {
        announcer.textContent = ("You won!");
    } else if (humanScore < computerScore) {
        announcer.textContent = ("You lost!");
    }
    
    
}

rock.addEventListener("click", () => {
    playRound(getHumanChoice("rock"), getComputerChoice());
});
paper.addEventListener("click", () => {
    playRound(getHumanChoice("paper"), getComputerChoice());
})
scissors.addEventListener("click", () => {
    playRound(getHumanChoice("scissors"), getComputerChoice());
});