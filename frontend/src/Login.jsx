import React, { useState } from "react";
import './styles/Login.css';
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios"; 
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
       
        alert("Login successful!");
        navigate("/main"); 
      }
    } catch (err) {
      console.error("Login error:", err);
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
          {error && <div className="error-message">{error}</div>} 
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
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
                onChange={(e) => setPassword(e.target.value)} 
                required 
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
