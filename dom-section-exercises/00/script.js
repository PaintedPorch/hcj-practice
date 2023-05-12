const button = document.querySelector(".btn");
button.addEventListener("click", rockPaperScissors);

const link = document.querySelector(".lnk");
link.addEventListener("click", clicked);

function rockPaperScissors() {
    let answer = prompt("Choose R (rock), P (paper) or S (scissors): ");
    let npcGuess = Math.floor(Math.random() * 3) + 1;

    answer = answer.toLowerCase(); 

    if (answer == "r" && npcGuess == 1 || answer == "p" && npcGuess == 2 || answer == "s" && npcGuess == 3) {
        console.log("You tied.");
    }
    else if (answer == "r" && npcGuess == 2 || answer == "p" && npcGuess == 1 || answer == "s" && npcGuess == 2) {
        console.log("You win!");
    }
    else {
        console.log("You lose.");
    }
}

function clicked(ev) {
    console.log("I've been clicked.");
    ev.preventDefault(); // Prevents the link from loading
}
