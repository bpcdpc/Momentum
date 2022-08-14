const IMAGE_PATH = "img/";
const images = [
    {
        src: "01.jpeg",
        title: "Autumn England",
        author: "Unknown author"
    },
    {
        src: "02.jpeg",
        title: "Altai Mountains",
        author: "photoprime"
    },
    {
        src: "03.jpeg",
        title: "Nusa Penida island, Indonesia",
        author: "Biletskiy Evgeniy"
    },
    {
        src: "04.jpeg",
        title: "Green valley",
        author: "Unknown author"
    },
    {
        src: "05.jpeg",
        title: "Autumn in the forest",
        author: "Valiphotos"
    }
];

const background = document.querySelector("#background");
const bgImage = document.querySelector("#background div:last-child");
const bgTitle = document.querySelector("#background-info span:first-child");
const bgAuthor = document.querySelector("#background-info span:last-child");

const chosenImage = images[Math.floor(Math.random() * images.length)];
bgImage.style.backgroundImage = `url(${IMAGE_PATH}${chosenImage.src})`;
bgTitle.innerText = chosenImage.title;
bgAuthor.innerText = chosenImage.author;

document.addEventListener("DOMContentLoaded", handleLoaded);

function handleLoaded() {
    background.classList.remove(HIDDEN_CLASSNAME);
    setTimeout(function(){background.classList.add(ACTIVE_CLASSNAME);}, 501);
}

