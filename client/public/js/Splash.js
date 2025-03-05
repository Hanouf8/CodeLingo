document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById("splash-screen");
  const loginForm = document.getElementById("login-form");

  // Show splash screen for 2 seconds
  setTimeout(() => {
    splashScreen.style.display = "none"; // Hide the splash screen
    loginForm.style.display = "block"; // Show the login form
  }, 2000); // 2000 milliseconds = 2 seconds
});
