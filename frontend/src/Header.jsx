import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/logo.png";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Nexus Ventures" />
          </Link>
        </div>
        <nav className="nav">
          <Link to="/login">
          {" "}
            <button className="nav-btn">Login</button>{" "}
          </Link>
          <Link to="/register">
            {" "}
            <button className="nav-btn signup">Sign Up</button>{" "}
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
