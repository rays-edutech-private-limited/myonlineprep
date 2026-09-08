import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

import logo from "../../assets/img/Myonlineprep logo.png";
import FreeMockTestModal from "../FreeMockTestModal/FreeMockTestModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExam, setSelectedExam] = useState("CAIIB");
    const openMockTest = (examName) => {
    setSelectedExam(examName);
    setIsModalOpen(true);
  };

  const closeMockTest = () => {
    setIsModalOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">

      {/* ================= LOGO ================= */}
      <div className="navbar-left">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="MyOnlinePrep" />
        </Link>
      </div>

      {/* ================= CENTER MENU ================= */}
      <div className={`navbar-center ${isOpen ? "mobile-open" : ""}`}>
        <ul className="nav-list">

          {/* EXAM INFO */}
          <li className="nav-item">
            <a href="#exam-infos" onClick={closeMenu}>
              Exam Info
            </a>
          </li>

          {/* FREE MOCK TEST */}
          <li className="nav-item">
            <Link  onClick={() => openMockTest("CAIIB")}>
              Free Mock Test
            </Link>
          </li>

          {/* COURSES */}
          <li className="nav-item">
            <a href="#enroll-section" onClick={closeMenu}>
              Courses
            </a>
          </li>

          {/* ARTICLES */}
          <li className="nav-item">
            <a href="#articles-section" onClick={closeMenu}>
              Articles
            </a>
          </li>

          {/* FAQS */}
          <li className="nav-item">
            <a href="#faq-section" onClick={closeMenu}>
              FAQs
            </a>
          </li>
          <li className="nav-item phon-lik">
            <a
          href="tel:+919264149917"
          className="phone-btn"
        >
          <FaPhoneAlt />
          <span>+91 92641 49917</span>
        </a>
          </li>

        </ul>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="navbar-right">

        {/* PHONE */}
        <a
          href="tel:+919264149917"
          className="phone-btn"
        >
          <FaPhoneAlt />
          <span>+91 92641 49917</span>
        </a>

        {/* SIGN UP */}
        <Link
          
          className="signup-btn"
          onClick={() => openMockTest("CAIIB")}
        >
          Sign Up
        </Link>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <FreeMockTestModal
        isOpen={isModalOpen}
        onClose={closeMockTest}
        exam={selectedExam}
      />

    </nav>
  );
};

export default Navbar;