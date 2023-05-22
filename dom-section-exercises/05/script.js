const items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) // Create hover effect
{  
    items[i].addEventListener("mouseover", function() {
        items[i].classList.add("background");
    });
    items[i].addEventListener("mouseout", function() {
        items[i].classList.remove("background");
    });
}