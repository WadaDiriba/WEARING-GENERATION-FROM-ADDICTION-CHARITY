import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [actionDropdown, setActionDropdown] = useState(false);

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li 
          className="dropdown-parent"
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
        >
          <Link to="/about">About</Link>
          {aboutDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/about/mission">Our Mission</Link>
              </li>
              <li>
                <Link to="/about/vision">Our Vision</Link>
              </li>
              <li>
                <Link to="/about/goal">Goal</Link>
              </li>
            </ul>
          )}
        </li>
        <li 
          className="dropdown-parent"
          onMouseEnter={() => setActionDropdown(true)}
          onMouseLeave={() => setActionDropdown(false)}
        >
          <Link to="/take-action">Take Action</Link>
          {actionDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <li>
                <Link to="/partnership">Partnership</Link>
              </li>
              <li>
                <Link to="/volunteer">Volunteer</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/testimonial">Testimonial</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

