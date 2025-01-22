const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  contactNum: String,
  whatsappNum: String,
  email: { type: String, unique: true },
  state: String,
  referral: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Registration Route
app.post("/api/register", async (req, res) => {
    console.log(req.body);
  try {
    const {
      firstName,
      lastName,
      contactNum,
      whatsappNum,
      email,
      state,
      referral,
      newPassword,
    } = req.body;

    // Check if user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    // Check if user already exists by contact number (optional)
    const existingContact = await User.findOne({ contactNum });
    if (existingContact) {
      return res.status(400).json({ message: "Contact number already in use." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      contactNum,
      whatsappNum,
      email,
      state,
      referral,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error);
    // Display specific error message from the server
    if (error.response && error.response.data) {
        alert(error.response.data.message); // Show the error message from the server
    } else {
        alert("An error occurred during registration.");
    }
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password." });
  }

  // Check password (assuming you have hashed passwords)
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password." });
  }

  // Successful login
  res.status(200).json({ message: "Login successful!" });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
