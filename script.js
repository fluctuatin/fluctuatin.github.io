//Attempting to get the burger menu to respond to a click and change the display mode on the navbar
window.onload = init;

function init(){
    
    const nav = document.getElementById("list");
    const burg = document.getElementById("burger");
    
    burg.addEventListener('click', () => {
        nav.style.display = "flexbox";
        console.log("Working");
    });
}