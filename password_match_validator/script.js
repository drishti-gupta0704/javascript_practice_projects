
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const message = document.getElementById('message');
const checkBtn = document.getElementById('checkBtn');

checkBtn.addEventListener('click', function () {
  const pass1 = password1.value.trim();
  const pass2 = password2.value.trim();

  if (pass1 === "" || pass2 === "") {
    message.innerText = "Please fill both password fields !";
    message.style.color = "orange";
  } 
  else if (pass1 === pass2) {
    message.innerText = "Passwords match ";
    message.style.color = "green";
  } 
  else {
    message.innerText = "Passwords do not match ";
    message.style.color = "red";
  }
});
