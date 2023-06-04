const closeBar = document.getElementById("close_bar");
const sideBar = document.getElementById("sidebar");
const toggleBar = document.querySelector(".fa-bars");
const toggleDiv = document.getElementById("toggle_btn");

let barActive = true;

closeBar.addEventListener("click", function() {
    sideBar.style.display = "none";
    barActive = false;

    if (barActive == false) {
        toggleBar.style.color = "rgb(0, 195, 255)";
        toggleBar.style.display = "flex";
        toggleBar.style.position = "relative";
        toggleDiv.style.marginLeft = "98%";
    }
});

toggleBar.addEventListener("click", function() {
    if (barActive == false) {
        sideBar.style.display = "flex";
        barActive = true;

        toggleBar.style.color = "rgb(0, 195, 255)";
        toggleBar.style.display = "flex";
        toggleBar.style.position = "relative";
        toggleDiv.style.marginLeft = "98%";
    }
    else {
        sideBar.style.display = "none";
        barActive = false;

        toggleBar.style.color = "rgb(0, 195, 255)";
        toggleBar.style.display = "flex";
        toggleBar.style.position = "relative";
        toggleDiv.style.marginLeft = "98%";
    }
})

