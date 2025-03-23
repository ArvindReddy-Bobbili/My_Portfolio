// src/components/Navbar.js
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
      <div className="brand">Arvind Reddy Bobbili</div>
      <ul className="nav-links">
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#qualifications" className="nav-link">
            Qualifications
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" className="nav-link">
            Resume
          </a>
        </li>
        <li>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
