// Create a Date object for the current date and time
const currentDate = new Date();

// Subtract one hour from the current date
currentDate.setHours(currentDate.getHours() - 1);


document.write(`<p>Date and time one hour before: ${currentDate}</p>`);
