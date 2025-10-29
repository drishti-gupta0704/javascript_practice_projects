


const textBox = document.getElementById("textBox");
const count = document.getElementById("count");

textBox.addEventListener("input", () => {
  count.textContent = textBox.value.length;
});
