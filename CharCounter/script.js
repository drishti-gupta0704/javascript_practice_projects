


const textBox = document.getElementById("textBox");
const count = document.getElementById("count");




textBox.addEventListener("input", () => {
  const typedLength = textBox.value.length;
  count.textContent = typedLength;


 
});