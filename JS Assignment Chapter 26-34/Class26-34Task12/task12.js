
const currentDate = new Date();


const currentDay = currentDate.getDate();


if (currentDay < 16) {
    alert("It's the first fifteen days of the month!");
} else {
    alert("It's after the 15th day of the month.");
}
