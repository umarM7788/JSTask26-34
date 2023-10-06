// Create a new Date object to get the current time
const currentTime = new Date();

// Get the current hour (0-23)
const currentHour = currentTime.getHours();

// Check if it's before noon (AM) or after noon (PM)
if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
