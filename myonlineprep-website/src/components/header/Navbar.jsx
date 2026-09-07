import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [examOpen, setExamOpen] = useState(false);
  const [modeOpen, setModeOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setExamOpen(false);
    setModeOpen(false);
  };

  const toggleExam = (e) => {
    e.preventDefault();
    setExamOpen(!examOpen);
    setModeOpen(false);
  };

  const toggleMode = (e) => {
    e.preventDefault();
    setModeOpen(!modeOpen);
    setExamOpen(false);
  };

  return (
    <nav className="navbar">
      {/* ================= LEFT : LOGO ================= */}
      <div className="navbar-left">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="MyOnlinePrep" />
        </Link>
      </div>

      {/* ================= CENTER : NAVIGATION ================= */}
      <div className={`navbar-center ${isOpen ? "mobile-open" : ""}`}>
        <ul className="nav-list">
          
          {/* EXAMS DROPDOWN */}
          <li className={`nav-item dropdown ${examOpen ? "open" : ""}`}>
            <button className="nav-dropdown" onClick={toggleExam}>
              Exams
              <svg className="arrow-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* <div className="dropdown-box">
              <div className="dropdown-title">
                <div className="dropdown-title-icon">🎯</div>
                <div>
                  <h4>Popular Exams</h4>
                  <p>Prepare for top competitive exams</p>
                </div>
              </div>

              <Link to="/exams/upsc" onClick={closeMenu}>
                <span>🏛️</span>
                <div>
                  <strong>UPSC</strong>
                  <small>Civil Services Examination</small>
                </div>
              </Link>

              <Link to="/exams/ssc" onClick={closeMenu}>
                <span>📋</span>
                <div>
                  <strong>SSC</strong>
                  <small>CGL, CHSL & other exams</small>
                </div>
              </Link>

              <Link to="/exams/banking" onClick={closeMenu}>
                <span>🏦</span>
                <div>
                  <strong>Banking</strong>
                  <small>SBI, IBPS & Banking exams</small>
                </div>
              </Link>

              <Link to="/exams/railway" onClick={closeMenu}>
                <span>🚆</span>
                <div>
                  <strong>Railway</strong>
                  <small>RRB NTPC, Group D & more</small>
                </div>
              </Link>

              <Link to="/exams/teaching" onClick={closeMenu}>
                <span>👨‍🏫</span>
                <div>
                  <strong>Teaching</strong>
                  <small>CTET, TET & other exams</small>
                </div>
              </Link>

              <Link to="/exams/defence" onClick={closeMenu}>
                <span>🪖</span>
                <div>
                  <strong>Defence</strong>
                  <small>NDA, CDS & Defence exams</small>
                </div>
              </Link>

              <Link className="dropdown-view" to="/exams" onClick={closeMenu}>
                View All Exams →
              </Link>
            </div> */}
          </li>

          {/* FREE MOCK TESTS */}
          <li className="nav-item">
            <Link to="/mock-tests" onClick={closeMenu}>
              Free Mock Tests
            </Link>
          </li>

          {/* COURSES */}
          <li className="nav-item">
            <Link to="/courses" onClick={closeMenu}>
              Courses
            </Link>
          </li>

          {/* MODE DROPDOWN */}
          <li className={`nav-item dropdown ${modeOpen ? "open" : ""}`}>
            <button className="nav-dropdown" onClick={toggleMode}>
              More
              <svg className="arrow-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            
          </li>

        
          

        </ul>
      </div>

      {/* ================= RIGHT : SEARCH + LOGIN ================= */}
      <div className="navbar-right">
        <div className="search-box">
          <span className="search-icon"><i class="fa-solid fa-magnifying-glass" ></i></span>
          <input type="text" placeholder="Search courses..." />
        </div>

        <Link to="/login" className="login-btn" onClick={closeMenu}>
          Login
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => {
            setIsOpen(!isOpen);
            setExamOpen(false);
            setModeOpen(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;