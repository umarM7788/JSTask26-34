// Define the starting date of this Ramadan 
const startingDate = new Date("2023-03-23");

// Get the current date
const currentDate = new Date();


const timeDifference = currentDate.getTime() - startingDate.getTime();
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


alert(`Number of days since the last Ramadan day: ${daysDifference}`);
