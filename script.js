//Attempting to get the burger menu to respond to a click and change the display mode on the navbar
const nav = document.getElementById("subbar");
const burger = document.getElementById("burger");

function burgerOpen() {
    nav.style.display = "flexbox";
}

burger.addEventListener("click", burgerOpen);