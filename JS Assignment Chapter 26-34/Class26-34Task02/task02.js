
const userInput = prompt("Enter a negative floating-point number:");
const number = parseFloat(userInput);


if (isNaN(number) || number >= 0) {
    document.write("Invalid input. Please enter a negative floating-point number.");
} else {
    
    const roundedValue = Math.round(number);
    const ceilingValue = Math.ceil(number);
    const floorValue = Math.floor(number);

    document.write(`<p>Number: ${number}</p>`);
    document.write(`<p>Rounded Value: ${roundedValue}</p>`);
    document.write(`<p>Ceiling Value: ${ceilingValue}</p>`);
    document.write(`<p>Floor Value: ${floorValue}</p>`);
}
