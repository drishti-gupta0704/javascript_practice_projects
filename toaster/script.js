let toastBtn = document.getElementById("toastBtn");
let toast = document.getElementById("toast");

toastBtn.addEventListener("click", function() {
  showToast(" Notification is shown successfully");
});

function showToast(msg) {
  toast.textContent = msg; 
  toast.classList.add("show"); 

  
  setTimeout(function() {
    toast.classList.remove("show");
  }, 3000);
}
