
const currentDate = new Date();


const currentDay = currentDate.toLocaleString('default', { weekday: 'short' });

const firstThreeLetters = currentDay.substring(0, 3);


alert(`Today is: ${firstThreeLetters}`);
