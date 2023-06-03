const navButton = document.getElementById("nav-button");
const newLinks = document.getElementById("resized-links");

let i = 0;

navButton.addEventListener("click", function() {
    navButton.classList.toggle("nav-rotation");

    if (i%2 == 0) {
        newLinks.style.display = "flex";
    }
    else {
        newLinks.style.display = "none";
    }

    i++;
});