
const coinValue = Math.floor(Math.random() * 2); 


let resultText = "";

if (coinValue === 0) {
    resultText = "Heads";
} else {
    resultText = "Tails";
}


document.write(`<p>The coin landed on: ${resultText}</p>`);
