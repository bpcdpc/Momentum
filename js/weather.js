const API_KEY = '756f63f07b356ad8e4add5db717c7f90';

function setIcon(id) {
    let icon = "";
    if (id >= 200 && id < 300) {
        icon = "thunderstorm";
    } else if (id >= 300 && id < 400) {
        icon = "rainy";
    } else if (id >= 500 && id < 600) {
        icon = "rainy";
    } else if (id >= 600 && id < 700) {
        icon = "weather_snowy";
    } else if (id >= 700 && id < 800) {
        icon = "cloudy";
    } else if (id === 800) {
        icon = "sunny";
    } else if (id > 800 && id < 900) {
        icon = "cloudy";
    }
    return icon;
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather");
            const spans = weather.getElementsByTagName("span");
            spans[0].innerText = setIcon(data.weather[0].id);
            spans[1].innerText = `${Math.floor(data.main.temp)}\u{2103}`;
            spans[2].innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);