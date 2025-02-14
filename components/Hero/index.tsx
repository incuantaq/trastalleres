import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-column">
          <img src="/image.png" alt="Hero Image" className="hero-image" />
        </div>
        <div className="hero-column">
          <h2>Find Art You Love</h2>
          <p>
            At Saatchi Art, we make it our mission to help you discover and buy from the best emerging artists around the world. Whether you're looking to discover a new artist, add a statement piece to your home, or commemorate an important life event, Saatchi Art is your portal to thousands of original works by today's top artists.
          </p>
          <p>
            <em>Rebecca Wilson</em><br />
            Chief Curator & VP, Art Advisory
          </p>
          {/* TODO: Add real wpp number and metadata here */}
          <button className="hero-button">START CHAT</button>

        </div>
      </div>
    </div>
  );
}

export default Hero;
