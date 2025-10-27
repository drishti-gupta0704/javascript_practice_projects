
let bulb = document.getElementById("bulb");
let onBtn = document.getElementById("onBtn");
let offBtn = document.getElementById("offBtn");


onBtn.addEventListener("click", () => {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
});

offBtn.addEventListener("click", () => {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
});