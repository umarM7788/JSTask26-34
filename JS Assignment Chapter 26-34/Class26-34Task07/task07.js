
const userInput = prompt("Enter your weight:");


const pattern = /^(\d+(\.\d+)?)\s*(Kg|Kgs|Kilograms)?$/i;

const match = userInput.match(pattern);

if (match) {
    
    const weightValue = parseFloat(match[1]);
    const unit = match[3] ? match[3].toLowerCase() : "";

  
    document.write(`<p>Your weight: ${weightValue} ${unit}</p>`);
} else {
    document.write("<p>Invalid input. Please enter a valid weight.</p>");
}
