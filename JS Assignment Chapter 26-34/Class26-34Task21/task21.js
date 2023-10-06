// Prompt the user for customer name, month, and electricity units consumed
const customerName = prompt("Enter your name:");
const customerMonth = prompt("Enter the billing month (e.g., January):");
const unitsConsumed = parseFloat(prompt("Enter the electricity units consumed:"));

// Define the fixed rate per unit (you can change this based on your actual rates)
const ratePerUnit = 0.10; 

// Calculate the total bill amount
const totalBill = unitsConsumed * ratePerUnit;

// Display the electricity bill information 
document.write(`<h2>Electricity Bill</h2>`);
document.write(`<p>Customer Name: ${customerName}</p>`);
document.write(`<p>Month: ${customerMonth}</p>`);
document.write(`<p>Units Consumed: ${unitsConsumed.toFixed(2)} kWh</p>`);
document.write(`<p>Total Bill: $${totalBill.toFixed(2)}</p>`);
