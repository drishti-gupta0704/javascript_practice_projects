let toastBtn = document.getElementById("toastBtn");
let toast = document.getElementById("toast");

toastBtn.addEventListener("click", function() {
  showToast();
});

function showToast() {
  toast.classList.add("show"); 

  setTimeout(function() {
    toast.classList.remove("show");
  }, 3000);
} 

