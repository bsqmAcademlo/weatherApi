import { KEY } from "./config.js";
import { printCard } from "./layouts.js";

const getWeather = async (lat, lon, name, degCelcius) => {
    try {
        let data;

        if (name) {
            data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KEY}`
            );
        } else {
            data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
            );
        }

        const response = await data.json();

        printCard(response, degCelcius);
    } catch (error) {
        console.log(error);
    }
};

export { getWeather };
