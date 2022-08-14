const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-form > input");

function handleSubmit(event) {
    event.preventDefault();
    const keyword = searchInput.value;
    searchInput.value = "";
    location.href = `https://www.google.com/search?q=${keyword}`
}

searchForm.addEventListener("submit", handleSubmit);