
const currentDate = new Date();


const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

document.write(`<p>Current Month: ${currentMonth}</p>`);
