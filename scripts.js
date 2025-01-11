function getComputerChoice() {
    const min_choice = 1;
    const max_choice = 3;  


    let choice = Math.floor(Math.random() * (max_choice - min_choice + 1) + min_choice); // Calculates an integer between 1 and 3
    console.log(choice);
}

getComputerChoice();