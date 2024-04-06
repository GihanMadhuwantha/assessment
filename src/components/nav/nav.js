import React, { useState } from "react";
import "../nav/nav.css";
import Logo from "../../Assets/Logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`menu-items ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#services" className="mob-nav-links">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="mob-nav-links">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="mob-nav-links">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#careers" className="mob-nav-links">
              Careers
            </a>
          </li>
        </ul>
        <button className="close-btn" onClick={closeMenu}>
          X
        </button>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Nav;
