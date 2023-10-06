
const secretNumber = Math.floor(Math.random() * 10) + 1;


const userGuess = prompt("Guess the secret number (between 1 and 10):");
const parsedGuess = parseInt(userGuess);


if (!isNaN(parsedGuess) && parsedGuess >= 1 && parsedGuess <= 10) {
    if (parsedGuess === secretNumber) {
        console.log("Congratulations! You guessed the secret number.");
    } else {
        console.log(`Sorry, the secret number was ${secretNumber}. Try again!`);
    }
} else {
    console.log("Invalid input. Please enter a number between 1 and 10.");
}
