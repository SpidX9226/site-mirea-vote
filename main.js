let count = 0;
let count2 = 0;

const counterDisplay = document.getElementById("counter")
const incrementButton = document.getElementById("incrementButton")

incrementButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});