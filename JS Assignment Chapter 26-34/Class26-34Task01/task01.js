
const userInput = prompt("Enter a positive integer:");
const number = parseInt(userInput);


if (Number.isInteger(number) && number > 0) {
 
    const roundedValue = Math.round(number);
    const ceilingValue = Math.ceil(number);
    const floorValue = Math.floor(number);

    document.write(`Number: ${number}`);
    document.write(`Rounded Value: ${roundedValue}`);
    document.write(`Ceiling Value: ${ceilingValue}`);
    document.write(`Floor Value: ${floorValue}`);
} else {
    document.write("Invalid input. Please enter a positive integer.");
}
