const button = document.getElementById("btn");
const colorText = document.getElementById("color");
const bodyContainer = document.getElementById("container");
const simpleMode = document.getElementById("simple");
const hexMode = document.getElementById("hex");

let simpleActive = false;
let hexActive = false;

const hexList = ["#0000FF", "#FF0000", "#FFFF00", "#FF6600", "#00FF00", " #6600FF", "#000000", "#FFFFFF", "#F0F8FF", "#FF7F50", "#B22222", "#FF69B4", "#FFFACD"];
const hexItems = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

simpleMode.addEventListener("click", function() {
    simpleActive = true;
    hexActive = false;
})

hexMode.addEventListener("click", function() {
    simpleActive = false;
    hexActive = true;
})

button.addEventListener("click", function() {
    let randomColor = Math.floor(Math.random() * hexList.length);
  
    if (simpleActive == true) {
        colorText.textContent = hexList[randomColor];

        bodyContainer.style.backgroundColor = hexList[randomColor];
    }
    else if (hexActive == true) {
        let letterCount = 0;
        let randomHexCode = "#";

        while (letterCount <= 5) {
            let randomHexItem = hexItems[Math.floor(Math.random() * hexItems.length)];
            randomHexCode+=randomHexItem;
            letterCount++;
        }

        letterCount = 0;

        colorText.textContent = randomHexCode;

        bodyContainer.style.backgroundColor = randomHexCode;
    }
    else {
        alert("Please select a mode (Simple, Hex). \n");
    }
})