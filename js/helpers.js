function changeDeg(temp, degCelcius = true) {
    if (degCelcius) return `${(temp - 273.15).toFixed(2)} °C`;

    return `${((9 * (temp - 273.15)) / 5 + 32).toFixed(2)} °F`;
}

export { changeDeg };
