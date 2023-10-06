// Create a Date object for today's date
const currentDate = new Date();


const oneHundredYearsAgo = new Date();
oneHundredYearsAgo.setFullYear(currentDate.getFullYear() - 100);

// Display the date 100 years back in the browser
document.write(`<p>Date 100 years back from today: ${oneHundredYearsAgo.toDateString()}</p>`);
