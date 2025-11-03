
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Basic validation
  if (name === "" || email === "" || password === "") {
    errorMsg.style.display = "block";
    errorMsg.textContent = " All fields are required!";
  } else if (!emailPattern.test(email)) {
    errorMsg.style.display = "block";
    errorMsg.textContent = " Please enter a valid email address!";
  } else if (password.length < 6) {
    errorMsg.style.display = "block";
    errorMsg.textContent = " Password must be at least 6 characters!";
  } else {
    errorMsg.style.display = "none";
    alert(" Registration Successful!");
    document.getElementById("registerForm").reset();
  }
});
