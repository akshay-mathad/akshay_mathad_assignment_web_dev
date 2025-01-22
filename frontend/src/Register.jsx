import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import registerImage from "../src/assets/register-image.png";
import "./styles/Register.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNum: "",
    whatsappNum: "",
    email: "",
    state: "",
    referral: "",
    newPassword: "",
    confirmPassword: "",
    tnc: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.tnc) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        ...formData,
      });
      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert("Registration failed!");
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred during registration.");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="register-content">
        <div className="register-image">
          <img src={registerImage} alt="Register" />
        </div>
        <div className="registration-form">
          <div className="sign-up-header-content">
            <h1 className="sign-up-header">Sign Up</h1>
            <label className="sign-up-label">
              Fill in your credentials and click on the Sign up button
            </label>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="name">
              <div className="name-group-1">
                <label htmlFor="first-name">First Name</label>
                <label htmlFor="last-name">Last Name</label>
              </div>
              <div className="name-group-2">
                <input type="text" id="first-name" name="firstName" onChange={handleChange} value={formData.firstName} />
                <input type="text" id="last-name" name="lastName" onChange={handleChange} value={formData.lastName} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-num">Contact Number</label>
              <input type="text" id="contact-num" name="contactNum" onChange={handleChange} value={formData.contactNum} />
            </div>
            <div className="form-group">
              <label htmlFor="whatsapp-num">WhatsApp Number</label>
              <input type="text" id="whatsapp-num" name="whatsappNum" onChange={handleChange} value={formData.whatsappNum} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" onChange={handleChange} value={formData.state} />
            </div>
            <div className="form-group">
              <label htmlFor="referral">Referral</label>
              <input type="text" id="referral" name="referral" onChange={handleChange} value={formData.referral} />
            </div>
            <div className="form-group">
              <label htmlFor="new-password">New Password</label>
              <input type="password" id="new-password" name="newPassword" onChange={handleChange} value={formData.newPassword} />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
            </div>
            <div className="tnc-line">
              <input type="checkbox" id="tnc" name="tnc" onChange={handleChange} checked={formData.tnc} />
              <label htmlFor="tnc" className="tnc-label">
                I agree to the Terms and Conditions and Privacy Policy
              </label>
            </div>
            <div className="submit-buttons">
              <button className="register" type="submit">Register</button>
            </div>
          </form>
          <div className="signup-link">
            <p>
              Already have an account? <span onClick={() => navigate("/login")} style={{ cursor: 'pointer', color: '#007bff' }}>Login</span>
            </p>
            <p>
              Back to <span onClick={() => navigate("/")} style={{ cursor: 'pointer', color: '#007bff' }}>Home</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
