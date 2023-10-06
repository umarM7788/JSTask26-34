// Prompt the user for their age
const age = prompt("Please enter your age:");

// Calculate the birth year based on the age
const currentYear = new Date().getFullYear();
const birthYear = currentYear - parseInt(age);

// Display the birth year in the browser
document.write(`<p>Your birth year is approximately: ${birthYear}</p>`);
