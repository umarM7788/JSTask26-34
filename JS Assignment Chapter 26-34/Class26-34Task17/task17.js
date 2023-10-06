// Create a Date object for today's date
const today = new Date();


const december242019 = new Date('2019-12-24');


const timeDifference = today - december242019;


const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


alert(`The difference between today's date and December 24, 2019, is ${daysDifference} days.`);
