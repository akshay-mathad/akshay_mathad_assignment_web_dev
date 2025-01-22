import React from "react";
import logo from '../src/assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Nexus Ventures" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
        </p>
      </div>
      <div className="footer-right">
        <div className="important-links">
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-skype"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
