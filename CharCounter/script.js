

const textBox = document.getElementById("textBox");
const count = document.getElementById("count");
const progressBar = document.getElementById("progressBar");

const maxChars = 100;

textBox.addEventListener("input", () => {
  const typedLength = textBox.value.length;
  count.textContent = typedLength;


  let progressPercent = (typedLength / maxChars) * 100;
  if(progressPercent > 100) progressPercent = 100; 
  progressBar.style.width = progressPercent + "%";
});