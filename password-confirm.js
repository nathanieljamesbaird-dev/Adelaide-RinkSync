  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const errorMessage = document.getElementById("error-message");
  const form = document.getElementById("registrationForm");

  function validatePasswords() {
    if (password.value !== confirmPassword.value) {
      // Show error text and block HTML5 form submission
      errorMessage.style.display = "block";
      confirmPassword.setCustomValidity("Passwords Don't Match");
    } else {
      // Clear error text and allow form submission
      errorMessage.style.display = "none";
      confirmPassword.setCustomValidity("");
    }
  }

  // Check matching status in real-time as the user types
  password.addEventListener("input", validatePasswords);
  confirmPassword.addEventListener("input", validatePasswords);