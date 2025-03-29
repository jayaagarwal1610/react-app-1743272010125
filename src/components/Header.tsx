import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="https://askoid.com/askoid-logo.svg" alt="Askoid" />
        </div>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="btn-outline">Sign In</button>
          <button className="btn">Get Started</button>
        </div>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;