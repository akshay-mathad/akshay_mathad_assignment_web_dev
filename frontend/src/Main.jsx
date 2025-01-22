import React from 'react';
import './styles/Main.css';
import { Link, useNavigate } from "react-router-dom";
import logo from "../src/assets/logo.png";
import Footer from './Footer';

const Main = () => {
  const videos = [
    { title: "What to do to gain concentration", category: "Virton" },
    { title: "How to drive safely", category: "Virton" },
    { title: "How to overcome exam fear", category: "Virton" },
    { title: "Mind and goodness", category: "Virton" },
    { title: "How to live without pride", category: "Virton" },
    { title: "How to make your children better", category: "Virton" },
    { title: "The secret code of success", category: "Virton" },
    { title: "What to do to gain concentration", category: "Virton" },
    { title: "How to drive safely", category: "Virton" },
    { title: "How to live without pride", category: "Virton" },
  ];

  const navigate = useNavigate();

  const logout = () => {
    // Assuming there's a function to clear user session or token
    // This is a placeholder for actual logout logic
    console.log("Logging out...");
    // After logout, navigate to the login page
    navigate("/login");
  };

  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Nexus Ventures" />
          </Link>
        </div>
        <nav className="nav">
          <button className="nav-btn" onClick={logout}>Logout</button>
        </nav>
      </header>
      <h1>Main Page</h1>
      <p>Welcome to the Main Page!</p>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <div className="video-thumbnail">
              {/* Placeholder for video thumbnail */}
              <img src={`https://via.placeholder.com/300x200?text=${video.title}`} alt={video.title} />
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.category}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
