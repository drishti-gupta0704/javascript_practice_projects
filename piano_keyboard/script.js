
const sounds = {
  A: 'sounds/doo.mp3',
  S: 'sounds/re.mp3',
  D: 'sounds/mi.mp3',
  F: 'sounds/fa.mp3',
  G: 'sounds/sol.mp3',
  H: 'sounds/la.mp3',
  J: 'sounds/ti.mp3'
};

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const soundFile = sounds[key];
  
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();

    const keyDiv = document.querySelector(`.key[data-key="${key}"]`);
    keyDiv.classList.add("active");
    setTimeout(() => keyDiv.classList.remove("active"), 150);
  }
});
