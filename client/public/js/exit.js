function confirmExit() {
  const userConfirmed = confirm("Are you sure you want to exit?");
  if (userConfirmed) {
    localStorage.removeItem("user");
    window.location.href = "/html/Login.html";
  }
}
