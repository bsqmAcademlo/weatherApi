import { KEY } from "./config.js";
import { printCard } from "./layouts.js";

const search = document.querySelector("#search");

search.addEventListener("change", async (e) => {
    try {
        const name = e.target.value;
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KEY}`
        );

        const res = await data.json();

        printCard(res);

        e.target.value = "";
    } catch (error) {
        console.log(error);
    }
});
