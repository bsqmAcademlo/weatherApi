import { getWeather } from "./api.js";

const search = document.querySelector("#search");

search.addEventListener("change", async (e) => {
    try {
        const name = e.target.value;
        getWeather(null, null, name, null);

        e.target.value = "";
    } catch (error) {
        console.log(error);
    }
});
