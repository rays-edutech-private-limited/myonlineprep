import React from 'react';
import logo from "../../assets/img/logo.png"
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Using modern X (Twitter) icon
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Left Section: Brand & Bio */}
        <div className="footer-brand-section">
          <div className="footer-logo">
           <img src={logo} alt="" />
          </div>
          
          <p className="footer-description">
            Our mission is to provide a full-fledged preparation strategy to clear government competitive exams in one go! Established in 2017, Myonlineprep aims to help students to clear their competitive exams such as JAIIB, CAIIB, BPSC, CDPO, Banking, SSC, SI etc.
          </p>

          <div className="footer-contact-info">
            <p>Email : <a href="mailto:info@myonlineprep.com">info@myonlineprep.com</a></p>
            <p>Phone : +91 92641 49917</p>
          </div>

          <div className="footer-social-icons">
            <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#twitter" aria-label="Twitter"><FaXTwitter /></a>
            <a href="#pinterest" aria-label="Pinterest"><FaPinterestP /></a>
            <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 1: Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        {/* Column 2: Popular Exams */}
        <div className="footer-column">
          <h3>Popular Exams</h3>
          <ul>
            <li><a href="#jaiib">JAIIB</a></li>
            <li><a href="#caiib">CAIIB</a></li>
            <li><a href="#nism">NISM</a></li>
            <li><a href="#bpsc">BPSC</a></li>
            <li><a href="#cdpo">CDPO</a></li>
            <li><a href="#aao">AAO</a></li>
          </ul>
        </div>

        {/* Column 3: Our Products */}
        <div className="footer-column">
          <h3>Our Products</h3>
          <ul>
            <li><a href="#mock-tests">Mock Tests</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#ebooks">eBooks</a></li>
            <li><a href="#live-classes">Live Classes</a></li>
            <li><a href="#free-quizzes">Free Quizzes</a></li>
            <li><a href="#free-videos">Free Videos</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#editorials">Editorials</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Divider & Copyright */}
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-bottom-content">
          <p>© 2026 Myonlineprep. Developed by <a
  href="https://raysonline.in/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "#fff" }}
>
  Rays Edutech Pvt. Ltd.
</a>.</p>
          <div className="footer-legal-links">
            <a href="#terms">Terms & Conditions</a>
            <span>|</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;