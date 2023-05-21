const revealCard = document.querySelector(".reveal-card");
const contentCard = document.querySelector(".content-card");

function revealContent() 
{
    if (contentCard.classList.contains("reveal-card"))
    {
        contentCard.classList.remove("reveal-card");
        revealCard.textContent = "Reveal More";
    } 
    else 
    {
        contentCard.classList.add("reveal-card");
        revealCard.textContent = "Reveal Less";
    }
}

revealCard.addEventListener("mouseover", revealContent);