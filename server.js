const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, "client", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "html", "Login.html")); // Adjust the path as needed
});

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/userDB");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Email format validation function
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation function (minimum 6 characters, at least one letter and one number)
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password);
};

// Name validation function (only letters and spaces, minimum 2 characters)
const validateName = (name) => {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  return nameRegex.test(name);
};

// Signup Route
app.post("/signup", async (req, res) => {
  const { name, email, password, repeat_password } = req.body;

  // Validate name
  if (!validateName(name)) {
    return res
      .status(400)
      .json({
        message:
          "Name must contain only letters and be at least 2 characters long.",
      });
  }

  // Validate email format
  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  // Validate password
  if (!validatePassword(password)) {
    return res
      .status(400)
      .json({
        message:
          "Password must be at least 6 characters long and contain at least one letter and one number.",
      });
  }

  // Check if passwords match
  if (password !== repeat_password) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  // Check if email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email is already registered." });
  }

  // Hash the password before saving
  const saltRounds = 10; // Number of salt rounds for bcrypt
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create new user with hashed password
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error registering user.", error });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate email format
  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found." });
  }

  // Compare the provided password with the hashed password in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid password." });
  }

  // Login successful
  res
    .status(200)
    .json({
      message: "Login successful",
      user: { name: user.name, email: user.email },
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
