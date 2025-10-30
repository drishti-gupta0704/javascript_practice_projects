
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
   validateForm();
});

function validateForm() {

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  
  if (nameValue === '') {
    setError(nameInput, 'Name cannot be empty');
  } else if (!/^[A-Za-z\s]+$/.test(nameValue)) {
    setError(nameInput, 'Name should contain only letters');
  } else {
    setSuccess(nameInput);
  }

  if (emailValue === '') {
    setError(emailInput, 'Email cannot be empty');
  } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
    setError(emailInput, 'Enter a valid email');
  } else {
    setSuccess(emailInput);
  }

  
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (passwordValue === '') {
    setError(passwordInput, 'Password cannot be empty');
  } else if (!passwordPattern.test(passwordValue)) {
    setError(passwordInput, 'Min 8 chars, 1 uppercase, 1 number');
  } else {
    setSuccess(passwordInput);
  }

  if (confirmPasswordValue === '') {
    setError(confirmPasswordInput, 'Please confirm password');
  } else if (passwordValue !== confirmPasswordValue) {
    setError(confirmPasswordInput, 'Passwords do not match');
  } else {
    setSuccess(confirmPasswordInput);
  }
}


function setError(input, message) {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector('small');
  inputGroup.className = 'input-group error';
  small.innerText = message;
}

function setSuccess(input) {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector('small');
  inputGroup.className = 'input-group success';
  small.innerText = 'Valid';
}
