import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/HomePage.css';
import sampleImage from '../src/assets/sample-image.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <Header/>

      {/* Main Section */}
      <main className="main">
        <div className="text-content">
          <h1>
            Power and <span className="highlight">Success</span> Inspired Life
          </h1>
          <p>
            Knowledge is the greatest wealth. Financial security is the foundation of a peaceful life.
            Along with this, when there is mutual cooperation and mutual trust, our life becomes very
            beautiful.
          </p>
          <p>
            Thank you for choosing us as your gateway to a secure life. Let's travel together, have a
            better tomorrow.
          </p>
          <div className="button-group">
            <button className="primary-btn">Online Courses</button>
            <button className="secondary-btn">Videos</button>
          </div>
        </div>
        <div className="image-content">
          <img src={sampleImage} alt="Team working together" />
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default HomePage;
