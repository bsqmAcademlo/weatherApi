import "./js/animationSearch.js";
import "./js/changeColorMode.js";
import { KEY } from "./js/config.js";
import { changeDeg } from "./js/helpers.js";
import { printCard } from "./js/layouts.js";
import "./js/search.js";

const card = document.getElementById("card");

let degCelcius = true;

function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getWeather(latitude, longitude);
    }

    function error() {
        alert("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

const getWeather = async (lat, lon) => {
    try {
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
        );

        const response = await data.json();

        printCard(response, degCelcius);
    } catch (error) {
        console.log(error);
    }
};

card.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn_change")) {
        const deg = document.getElementById("deg");
        degCelcius = !degCelcius;

        let degKelvin;

        if (deg.textContent.includes("C")) {
            degKelvin = parseFloat(deg.textContent) + 273.15;
        } else {
            degKelvin = (5 * (parseFloat(deg.textContent) - 32)) / 9 + 273.15;
        }

        deg.textContent = changeDeg(degKelvin, degCelcius);
    }
});

geoFindMe();
