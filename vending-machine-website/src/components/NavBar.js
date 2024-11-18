import React from "react";
import Button from "../components/Button";
import logo from '../assets/logo/logo.png'; // Import the logo correctly
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      {/* Logo */}
      <div className="nav-logo">
          <img src={logo} alt="Mudd Bites Logo" />
      </div>

      {/* Navigation Groups */}
      <div className="nav-groups">
        {/* Group 1: Menu, Contact, Suggestions */}
        <div className="nav-links">
          <Button text="menu" variant="menu-button" />
          <Button text="contact" variant="menu-button" />
          <Button text="suggestions" variant="menu-button" />
        </div>

        {/* Group 2: Sign-up */}
        <div className="signup-link">
          <Button text="sign up" variant="menu-button" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
