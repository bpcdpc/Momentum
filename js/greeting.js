const login = document.querySelector("#login");
const loggedIn = document.querySelector("#logged-in");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

let greetingText = "";

const HIDDEN_CLASSNAME = "hidden";
const ACTIVE_CLASSNAME = "active";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    setGreetingText(username);

    hideDiv(login);
    setTimeout(function(){showDiv(loggedIn)},501);
}

function setGreetingText(username) {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        greetingText = "Good morning";
    } else if (hour >= 12 && hour < 17) {
        greetingText = "Good afternoon";
    } else if (hour >= 17 && hour <21) {
        greetingText = "Good evening";
    } else {
        greetingText = "Good night";
    }
    greeting.innerText = `${greetingText}, ${username}.`;
}

function showDiv(obj) {
    obj.classList.remove(HIDDEN_CLASSNAME);
    setTimeout(function(){ obj.classList.add(ACTIVE_CLASSNAME)},50);
}

function hideDiv(obj) {
    obj.classList.remove(ACTIVE_CLASSNAME);
    setTimeout(function(){ obj.classList.add(HIDDEN_CLASSNAME)},500);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    login.classList.remove(HIDDEN_CLASSNAME);
    login.classList.add(ACTIVE_CLASSNAME);
    loginInput.focus();
    loginForm.addEventListener("submit", onLoginSubmit);
    
} else {
    loggedIn.classList.remove(HIDDEN_CLASSNAME);
    loggedIn.classList.add(ACTIVE_CLASSNAME);
    setGreetingText(savedUsername);
}