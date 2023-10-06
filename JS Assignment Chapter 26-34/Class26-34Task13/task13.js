// Calculate the minutes since midnight on January 1st, 1970 
const minutesSinceEpoch = Math.floor((new Date().getTime()) / 60000);

console.log(`Minutes since midnight on January 1st, 1970 : ${minutesSinceEpoch}`);
