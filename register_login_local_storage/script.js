
// Registration Form
const registerForm = document.getElementById("registerForm");
const regMsg = document.getElementById("regMsg");

registerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (name === "" || email === "" || password === "") {
    regMsg.style.color = "red";
    regMsg.textContent = "All fields are required!";
    return;
  }

  // Save user data in localStorage
  const user = { name, email, password };
  localStorage.setItem(email, JSON.stringify(user));

  regMsg.style.color = "green";
  regMsg.textContent = "Registration successful! You can login now.";

  registerForm.reset();
});

// Login Form
const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const storedUser = localStorage.getItem(email);

  if (!storedUser) {
    loginMsg.style.color = "red";
    loginMsg.textContent = "User not found! Please register first.";
    return;
  }

  const userObj = JSON.parse(storedUser);

  if (password === userObj.password) {
    loginMsg.style.color = "green";
    loginMsg.textContent = `Login successful! Welcome, ${userObj.name}`;
    loginForm.reset();
  } else {
    loginMsg.style.color = "red";
    loginMsg.textContent = "Incorrect password!";
  }
});
