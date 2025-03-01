import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Support/logo.png'; // Add your logo

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="nav-left">
          <Link to="/history" className="nav-link">History</Link>
          <Link to="/scan" className="nav-link">Scan</Link>
        </div>

        <div className="logo-section">
          <img src={logo} alt="FARMAID" className="logo" />
          {/* <h1 className="logo-text">FARMAID</h1> */}
        </div>
        
        <div className="nav-section">
          <Link to="/aboutus" className="nav-link">About Us</Link>
          <Link to="/" className="nav-link login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
