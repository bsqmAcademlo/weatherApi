const iconSearch = document.querySelector(".bx-search");
const iconX = document.querySelector(".bx-x");
const contentSearch = document.querySelector(".content_search");
const contentOptions = document.querySelector(".content_options");

iconSearch.addEventListener("click", () => {
    contentSearch.classList.add("content_search-show");
    contentOptions.classList.add("content_options-noShow");
});

iconX.addEventListener("click", () => {
    contentSearch.classList.remove("content_search-show");
    contentOptions.classList.remove("content_options-noShow");
});
