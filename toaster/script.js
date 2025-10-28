

var darkBtn = document.getElementById("darkBtn");
var lightBtn = document.getElementById("lightBtn");

darkBtn.addEventListener("click", function() {
  showToast("This is a dark toast!", "dark");
});

lightBtn.addEventListener("click", function() {
  showToast(" This is a light toast!", "light");
});

function showToast(message, theme) {
  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(theme);
  toast.textContent = message;

  document.body.appendChild(toast);


  setTimeout(function() {
    toast.classList.add("show");
  }, 100);

  
  setTimeout(function() {
    toast.classList.remove("show");
    setTimeout(function() {
      toast.remove();
    }, 500);
  }, 3000);
}
