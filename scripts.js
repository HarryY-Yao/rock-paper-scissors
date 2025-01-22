const container = document.querySelector(".container")
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const announcer = document.createElement("div");
const score = document.createElement("p");
const result = document.createElement("p");

container.appendChild(announcer);
announcer.appendChild(score);
announcer.appendChild(result);



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
    if (humanScore == 5 || computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
    }
    

    if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            result.textContent = ("It's a tie! Scissors negates scissors");
        } else if (computerChoice == "paper") {
            result.textContent = ("You win! Scissors beats paper");
            humanScore++;
        } else {
            result.textContent = ("You lose! Rock beats scissors");
            computerScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            result.textContent = ("It's a tie! Paper negates paper");
        } else if (computerChoice == "rock") {
            result.textContent = ("You win! paper beats rock");
            humanScore++;
        } else {
            result.textContent = ("You lose! Scissors beats paper");
            computerScore++;
        }
    } else if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            result.textContent = ("It's a tie! Rock negates rock");
        } else if (computerChoice == "scissors") {
            result.textContent = ("You win! Rock beats scissors");
            humanScore++;
        } else {
            result.textContent = ("You lose! Paper beats rock");
            computerScore++;
        }
        
    } else {
        result.textContent = ("Invalid input");
    }
    score.textContent = (`You: ${humanScore}  |  Computer: ${computerScore}`);

    if (humanScore == 5) {
        result.textContent = "You Win!"
    } else if (computerScore == 5) {
        result.textContent = "You lose!"
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