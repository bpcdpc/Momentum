const clock = document.querySelector("#clock");

function getClock() {
    clock.innerText = new Date().toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', hour12: false});
}

getClock();
setInterval(getClock, 1000);