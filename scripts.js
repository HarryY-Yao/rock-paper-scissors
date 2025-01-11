function getComputerChoice() {
    const min_choice = 1;
    const max_choice = 3;  


    let choice = Math.floor(Math.random() * (max_choice - min_choice + 1) + min_choice); // Calculates an integer between 1 and 3
    
    if (choice == 1) {
        choice = "Rock";
    } else if (choice == 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

}


function getHumanChoice() {
    let choice = prompt("Please Enter your choice (Rock, Paper, or Scissors): ");
    return choice;
}

console.log(getHumanChoice());