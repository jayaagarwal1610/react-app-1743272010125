import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>The Fastest Way to Create <span className="highlight">High-Quality Content</span></h1>
        <p>Create exceptional content that stands out from the crowd with Askoid's cutting-edge AI tools.</p>
        
        <div className="hero-buttons">
          <button className="btn">Try Askoid for Free</button>
          <button className="btn-outline">View Demo</button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">100K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.8/5</span>
            <span className="stat-label">User Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">10M+</span>
            <span className="stat-label">Content Created</span>
          </div>
        </div>
      </div>
      
      <div className="hero-image">
        <img src="https://askoid.com/hero-image.webp" alt="Askoid platform" />
      </div>
    </section>
  );
};

export default Hero;