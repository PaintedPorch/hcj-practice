const openModal = document.getElementById("open-modal");
const body = document.querySelector("body");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");
const modalContainer2 = document.getElementById("modal-container2");

modalContainer2.style.display = "none";

openModal.addEventListener("click", function() {
    body.style.backgroundImage = "url(./images/filtered-img.jpg)";

    modalContainer.style.display = "none";
    modalContainer2.style.display = "flex";
    closeModal.style.display = "flex";
})

closeModal.addEventListener("click", function() {
    body.style.backgroundImage = "url(./images/model-room.jpg)";

    modalContainer.style.display = "flex";
    modalContainer2.style.display = "none";
    closeModal.style.display = "none";
});