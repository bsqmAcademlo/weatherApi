const changeColorMode = document.querySelector("#changeColorMode");

changeColorMode.addEventListener("click", () => {
    if (changeColorMode.classList.contains("bx-sun")) {
        changeColorMode.classList.remove("bx-sun");
        changeColorMode.classList.add("bx-moon");

        document.body.classList.remove("darkTheme");
    } else {
        changeColorMode.classList.add("bx-sun");
        changeColorMode.classList.remove("bx-moon");

        document.body.classList.add("darkTheme");
    }
});
