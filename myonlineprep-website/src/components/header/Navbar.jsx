import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      {/* Logo Section */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="MyOnlinePrep Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className={`nav-link ${isOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Exams</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Free Mock Tests</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Courses</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>More</Link></li>
        </ul>
      </div>

      {/* Right Section (Search + Login + Hamburger) */}
      <div className="second-link">
        <div className="search">
          <input type="text" placeholder="Quick search for any courses" />
        </div>
        <div className="login">
          <Link to="/login" className="login-btn">Login</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar