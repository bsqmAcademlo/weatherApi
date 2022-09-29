import { changeDeg } from "./helpers.js";

export function printCard(response, degCelcius) {
    const date = new Date(response.dt * 1000);

    localStorage.setItem("response", JSON.stringify(response));

    card.innerHTML = `
        <p>${date.toLocaleDateString()}</p>
        <p><small><strong>${date.toLocaleTimeString()}</strong></small></p>
        <h3>${response.name}</h3>
        <img src="http://openweathermap.org/img/wn/${
            response.weather[0].icon
        }@2x.png" alt="icon" />
        <p><small>${response.weather[0].description}</small></p>
        <p id="deg">${changeDeg(response.main.temp, degCelcius)}</p>
        <button class='btn btn_change'>Clic</button>
    `;
}
