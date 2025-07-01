// Toggle password visibility
function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

// Registration Form Validation
function validateRegisterForm(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!name || !email || !password) {
    alert("All fields are required.");
    event.preventDefault();
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    event.preventDefault();
    return false;
  }

  alert("Registration form submitted successfully!");
  return true;
}

// Login Form Validation
function validateLoginForm(event) {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  if (!email || !password) {
    alert("Both email and password are required.");
    event.preventDefault();
    return false;
  }

  alert("Login form submitted.");
  return true;
}

// Light/Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
