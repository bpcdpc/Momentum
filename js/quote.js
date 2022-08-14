const quotes = [
    {
        quote: "Life is a tragedy when seen in close-up but a comedy in the long shot.",
        author: "Charlie Chaplin"
    },
    {
        quote: "I haven't failed; I've found 10,000 ways that don't work.",
        author: "Benjamin Franklin"
    },
    {
        quote: "If you knew how much work went into it, you wouldn't call it genius.",
        author: "Michelangelo"
    },
    {
        quote: "The mirror is my best friend because when I cry it never laughs.",
        author: "Charlie Chaplin"
    },
    {
        quote: "Common sense is the collection of prejudices acquired by age eighteen.",
        author: "Albert Einstein"
    },
    {
        quote: "I have deep faith that the principle of the universe will be beautiful and simple.",
        author: "Albert Einstein"
    },
    {
        quote: "Give the best you have, and it will never be enough.  Give your best anyway.",
        author: "Mother Teresa"
    },
    {
        quote: "Wicked thoughts and worthless efforts gradually set their mark on the face, especially the eyes.",
        author: "Schopenhauer"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;