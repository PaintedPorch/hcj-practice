const button = document.querySelector(".btn");
const popUp = document.querySelector(".pop-up");
const removePopUp = document.querySelector(".x");

button.addEventListener("click", function () {
    popUp.classList.add("pop-up-clicked");
})

removePopUp.addEventListener("click", function() {
    popUp.classList.remove("pop-up-clicked");
});

