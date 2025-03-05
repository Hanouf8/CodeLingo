document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name_input").value;
  const email = document.getElementById("email_input").value;
  const password = document.getElementById("password_input").value;
  const repeat_password = document.getElementById(
    "repeat_password_input"
  ).value;

  // Frontend validation for name
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  if (!nameRegex.test(name)) {
    alert("Name must contain only letters and be at least 2 characters long.");
    return;
  }

  // Frontend validation for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return;
  }

  // Frontend validation for password
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 6 characters long and contain at least one letter and one number."
    );
    return;
  }

  // Check if passwords match
  if (password !== repeat_password) {
    alert("Passwords do not match.");
    return;
  }

  // Send data to the backend
  try {
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, repeat_password }),
    });

    const result = await response.json();
    alert(result.message);

    // Redirect to search for a book page after successful registration
    if (response.ok) {
      window.location.href = "/html/book.html";
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred during registration.");
  }
});
