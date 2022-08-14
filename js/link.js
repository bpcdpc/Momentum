const linkForm = document.querySelector("#link-form");
const linkInputUrl = document.querySelector("#link-form input#link-url");
const linkInputName = document.querySelector("#link-form input#link-name");
const linkList = document.querySelector("#link-list");

let links = [];

const LINKS_KEY = "links";

function saveLinks() {
    localStorage.setItem(LINKS_KEY, JSON.stringify(links));
}

function deleteLink(event) {
    const li = event.target.closest('li');
    li.remove();
    console.log(li.id);
    links = links.filter( link => link.id !== li.id );
    saveLinks();
}

function printLink(newLinkObj) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const button = document.createElement("button");

    li.id = newLinkObj.id;

    a.innerText = newLinkObj.name;
    a.href = newLinkObj.url;

    button.classList.add("icon-button");

    button.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    button.addEventListener("click", deleteLink);

    li.appendChild(a);
    li.appendChild(button);

    linkList.appendChild(li);
}

function onLinkSubmit(event) {
    event.preventDefault();
    const newLinkUrl = linkInputUrl.value;
    const newLinkName = linkInputName.value;
    linkInputUrl.value = "";
    linkInputName.value = "";
    const newLinkObj = {
        url: newLinkUrl,
        name : newLinkName,
        id: `link-${Date.now()}`,
    };
    printLink(newLinkObj);
    links.push(newLinkObj);
    saveLinks();
    linkInputUrl.focus();
}

linkForm.addEventListener("submit", onLinkSubmit);

const savedLinks = localStorage.getItem(LINKS_KEY);

if (savedLinks !== null) {
    const parsedLinks = JSON.parse(savedLinks);
    links = parsedLinks;
    links.forEach(printLink);
}

const linkToggle = document.querySelector("#link > button");
const linkPanel = document.querySelector("#link-panel");

function handleClick(event) {
    if (linkPanel.classList.contains(ACTIVE_CLASSNAME) ) {
        linkPanel.classList.remove(ACTIVE_CLASSNAME);
        setTimeout(function(){ linkPanel.classList.add(HIDDEN_CLASSNAME)},500);
    } else {
        linkPanel.classList.remove(HIDDEN_CLASSNAME);
        setTimeout(function(){ linkPanel.classList.add(ACTIVE_CLASSNAME)},50);
    }
}

linkToggle.addEventListener("click", handleClick);