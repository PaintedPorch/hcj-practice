const buttons = document.querySelectorAll(".question-btn");


buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
})