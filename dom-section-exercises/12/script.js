const countText = document.getElementById("count");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

let currentCount = 0;

resetButton.addEventListener("click", function() {
    countText.textContent = 0;
    currentCount = 0;
})

increaseButton.addEventListener("click", function() {
    currentCount++;
    countText.textContent = currentCount;
})

decreaseButton.addEventListener("click", function() {
    if (currentCount>0) {
        currentCount--;
        countText.textContent = currentCount;
    }
    else {
        alert("Decrease not possible below 0.");
    }
})