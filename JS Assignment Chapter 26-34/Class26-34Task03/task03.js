
const userInput = prompt("Enter a number:");
const number = parseFloat(userInput);


if (!isNaN(number)) {
    
    const absoluteValue = Math.abs(number);
    console.log(`The absolute value of ${number} is ${absoluteValue}`);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
