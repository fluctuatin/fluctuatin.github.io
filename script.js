//Attempting to get the burger menu to respond to a click and change the display mode on the navbar
window.onload = init;
function init(){
    const nav = document.getElementById("list");
    document.getElementById("burger").addEventListener('click', () => {
        nav.classList.toggle('show');
        console.log("Working");
    });
}
