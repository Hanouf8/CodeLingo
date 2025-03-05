document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email_input").value;
  const password = document.getElementById("password_input").value;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return;
  }

  // Send login request to the backend
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      // Redirect to search for a book page
      window.location.href = "/html/book.html";
    } else {
      alert(result.message || "Login failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred during login.");
  }
});
