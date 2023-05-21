const button = document.querySelector(".btn");

function toggler() 
{
    if (button.classList.contains("whiteBg"))
    {
        button.classList.remove("whiteBg");
        console.log("Button");
    }
    else 
    {
        button.classList.add("whiteBg");
        console.log("Button");
    }
}

button.addEventListener("click", toggler);

window.addEventListener("click", function() {
    console.log("Window");
});

document.addEventListener("click", function() {
    console.log("Document");
});

document.querySelector(".container").addEventListener("click", function() {
    console.log("Container");
});

document.querySelector(".sub-container").addEventListener("click", function() {
    console.log("Sub-Container");
});