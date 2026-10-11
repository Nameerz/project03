const title = document.getElementById("main-title");
const description = document.querySelector(".description");
const status = document.getElementById("status");

const changeTextButton = document.getElementById("change-text");
const changeStyleButton = document.getElementById("change-style");
const toggleActiveButton = document.getElementById("toggle-active");

changeTextButton.addEventListener("click", function () {
    description.textContent = "The text has been changed!";
});

changeStyleButton.addEventListener("click", function () {
    title.style.color = "blue";
    title.style.fontSize = "36px";
});

toggleActiveButton.addEventListener("click", function () {
    status.classList.toggle("active");

    if (status.classList.contains("active")) {
        status.textContent = "Status: Active";
    } else {
        status.textContent = "Status: Inactive";
    }
});