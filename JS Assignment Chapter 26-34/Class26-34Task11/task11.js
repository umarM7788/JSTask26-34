
const currentDate = new Date();


const currentDay = currentDate.getDay();


if (currentDay === 0 || currentDay === 6) {
    alert("It's a fun day!");
} else {
    alert("It's not a fun day");
}
