const button = document.querySelector(".btn");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const hiddenContent = document.querySelector(".hidden-content");
const hiddenContent1 = document.querySelector(".hidden-content1");
const hiddenContent2 = document.querySelector(".hidden-content2");

let counter = 0;
let counter1 = 0;
let counter2 = 0;

button.addEventListener("click", function() {
    counter++;

    if (counter % 2 == 0) {
        button.textContent = "+";
    } else {
        button.textContent = "-";
    }

    console.log(counter);

    hiddenContent.classList.toggle("show-content");
});
button1.addEventListener("click", function() {
    counter1++;

    if (counter1 % 2 == 0) {
        button1.textContent = "+";
    } else {
        button1.textContent = "-";
    }

    hiddenContent1.classList.toggle("show-content");
});
button2.addEventListener("click", function() {
    counter2++;

    if (counter2 % 2 == 0) {
        button2.textContent = "+";
    } else {
        button2.textContent = "-";
    }

    hiddenContent2.classList.toggle("show-content");
});