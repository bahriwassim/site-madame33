import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <h1>mircea.organise</h1>
          </Link>
          
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <Link to="/" className="header__nav-link">Accueil</Link>
            <Link to="/a-propos" className="header__nav-link">À propos</Link>
            <Link to="/services" className="header__nav-link">Services</Link>
            <Link to="/portfolio" className="header__nav-link">Portfolio</Link>
            <Link to="/blog" className="header__nav-link">Blog</Link>
            <Link to="/faq" className="header__nav-link">FAQ</Link>
            <Link to="/contact" className="header__nav-link btn btn-primary">Contact</Link>
          </nav>

          <button
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;