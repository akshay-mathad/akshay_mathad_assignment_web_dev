import React, { useState } from "react";
import './styles/Login.css';
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios"; // Import axios for making API calls
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Handle successful login
        alert("Login successful!");
        navigate("/main"); // Navigate to the Main page
      }
    } catch (err) {
      console.error("Login error:", err);
      // Set error message based on the response from the server
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred during login.");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="login-content">
        <div className="login-form">
          <h2 className="login-header">Login</h2>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required // Make this field required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required // Make this field required
              />
            </div>
            <div className="forgot-pass">Forgot Password?</div>
            <div className="form-group">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
            <div className="signup-link">
              <p>
                Don’t have an account? <span onClick={() => navigate("/register")} style={{ cursor: 'pointer', color: '#007bff' }}>Sign up</span>
              </p>
              <p>
                Back to <span onClick={() => navigate("/")} style={{ cursor: 'pointer', color: '#007bff' }}>Home</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
