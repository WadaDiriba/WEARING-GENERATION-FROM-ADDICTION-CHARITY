import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [actionDropdown, setActionDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setAboutDropdown(false);
    setActionDropdown(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-link" onClick={closeMobileMenu}>
          <img src={logo} alt="Weaning Generation From Addiction Logo" className="logo-img" />
          <span className="logo-text">WGFA</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li 
            className="dropdown-parent"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname.startsWith('/about') ? 'active' : ''}`}
            >
              About
              <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4.5l3 3 3-3"/>
              </svg>
            </Link>
            {aboutDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about/mission" onClick={closeMobileMenu}>
                    <span className="dropdown-icon"></span>
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link to="/about/vision" onClick={closeMobileMenu}>
                    <span className="dropdown-icon"></span>
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link to="/about/goal" onClick={closeMobileMenu}>
                    <span className="dropdown-icon"></span>
                    Our Goal
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li 
            className="dropdown-parent"
            onMouseEnter={() => setActionDropdown(true)}
            onMouseLeave={() => setActionDropdown(false)}
          >
            <Link 
              to="/take-action" 
              className={`nav-link ${location.pathname.startsWith('/take-action') || location.pathname === '/donate' || location.pathname === '/partnership' || location.pathname === '/volunteer' ? 'active' : ''}`}
            >
              Take Action
              <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4.5l3 3 3-3"/>
              </svg>
            </Link>
            {actionDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/donate" onClick={closeMobileMenu}>
                    <span className="dropdown-icon"></span>
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/partnership" onClick={closeMobileMenu}>
                    <span className="dropdown-icon"></span>
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link to="/volunteer" onClick={closeMobileMenu}>
                    <span className="dropdown-icon"></span>
                    Volunteer
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link 
              to="/testimonial" 
              className={`nav-link ${isActive('/testimonial') ? 'active' : ''}`}
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link to="/donate" className="nav-cta-button">
          Donate Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-menu">
          <li>
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`mobile-nav-link ${location.pathname.startsWith('/about') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <ul className="mobile-submenu">
              <li>
                <Link to="/about/mission" onClick={closeMobileMenu}>Our Mission</Link>
              </li>
              <li>
                <Link to="/about/vision" onClick={closeMobileMenu}>Our Vision</Link>
              </li>
              <li>
                <Link to="/about/goal" onClick={closeMobileMenu}>Our Goal</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link 
              to="/take-action" 
              className={`mobile-nav-link ${location.pathname.startsWith('/take-action') || location.pathname === '/donate' || location.pathname === '/partnership' || location.pathname === '/volunteer' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Take Action
            </Link>
            <ul className="mobile-submenu">
              <li>
                <Link to="/donate" onClick={closeMobileMenu}>Donate</Link>
              </li>
              <li>
                <Link to="/partnership" onClick={closeMobileMenu}>Partnership</Link>
              </li>
              <li>
                <Link to="/volunteer" onClick={closeMobileMenu}>Volunteer</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link 
              to="/testimonial" 
              className={`mobile-nav-link ${isActive('/testimonial') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              to="/donate" 
              className="mobile-cta-button"
              onClick={closeMobileMenu}
            >
              Donate Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


