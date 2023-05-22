const button = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let quoter = document.querySelector(".quoter");

const quotes = [
    {
        quote: "As the day goes by light and dark crumble to reveal yet another part of the vicious cycle. Spend your cycle in a manner of which your future self would be satisfied with.",
        quoter: "Painton Porsche"
    },
    {
        quote: "Whilst you evaluate your surroundings, the surroundings are doing the same to you. Realize that this process happens without harm and thus should not create unrest within oneself.",
        quoter: "Pontain Poche"
    },
    {
        quote: "Reflection is the key to being, judge yourself before you judge others.",
        quoter: "Pantoin Poise"
    },
    {
        quote: "Existence is the miracle of being. As an existence you are by nature a wonder.",
        quoter: "Pinon Peise"
    },
    {
        quote: "Your mind is a powerful tool, thus at times a remembrance should be that some things are but a mere thought.",
        quoter: "Peinter Pieso"
    }
];

button.addEventListener("click", function() {
    let num = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[num].quote;
    quoter.textContent = quotes[num].quoter;
});