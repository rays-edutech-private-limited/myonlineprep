import React from 'react';
import logo from "../../assets/img/myonlineprepfooter-logo.png";
import './Footer.css';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

  // External link helper
  const openInNewTab = {
    target: "_blank",
    rel: "noopener noreferrer"
  };

  return (
    <footer className="footer-container">

      <div className="footer-content">

        {/* =========================
            LEFT - BRAND & BIO
        ========================== */}
        <div className="footer-brand-section">

          <div className="footer-logo">
            <img src={logo} alt="Myonlineprep" />
          </div>

          <p className="footer-description">
            Our mission is to provide a full-fledged preparation strategy
            to clear government competitive exams in one go! Established
            in 2017, Myonlineprep aims to help students to clear their
            competitive exams such as JAIIB, CAIIB, BPSC, CDPO, Banking,
            SSC, SI etc.
          </p>

          {/* Contact */}
         <div className="footer-contact-info">

  <p>
    <span className="contact-icon">
      <i className="fa-solid fa-envelope"></i>
    </span>

    <span className="contact-label">Email :</span>

    <a href="mailto:info@myonlineprep.com">
      info@myonlineprep.com
    </a>
  </p>

  <p>
    <span className="contact-icon">
      <i className="fa-solid fa-phone-flip"></i>
    </span>

    <span className="contact-label">Phone :</span>

    <a href="tel:+919264149917">
      +91 92641 49917
    </a>
  </p>

</div>

          {/* Social Icons */}
          <div className="footer-social-icons">

            <a
              href="https://www.facebook.com/myonlineprep/"
              aria-label="Facebook"
              {...openInNewTab}
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/official.myonlineprep/"
              aria-label="Instagram"
              {...openInNewTab}
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/myonlineprep"
              aria-label="LinkedIn"
              {...openInNewTab}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/myonlineprep"
              aria-label="X / Twitter"
              {...openInNewTab}
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.pinterest.com/"
              aria-label="Pinterest"
              {...openInNewTab}
            >
              <FaPinterestP />
            </a>

            <a
              href="https://www.youtube.com/myonlineprep"
              aria-label="YouTube"
              {...openInNewTab}
            >
              <FaYoutube />
            </a>

          </div>

        </div>


        {/* =========================
            COMPANY
        ========================== */}
        <div className="footer-column">

          <h3>Company</h3>

          <ul>

            <li>
              <a
                href="https://www.myonlineprep.com/about-us"
                {...openInNewTab}
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/contact-us"
                {...openInNewTab}
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/faqs"
                {...openInNewTab}
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/myonlineprep"
                {...openInNewTab}
              >
                Careers
              </a>
            </li>

          </ul>

        </div>


        {/* =========================
            POPULAR EXAMS
        ========================== */}
        <div className="footer-column">

          <h3>Popular Exams</h3>

          <ul>

            <li>
              <a
                href="https://www.myonlineprep.com/exam/jaiib"
                {...openInNewTab}
              >
                JAIIB
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/exam/caiib"
                {...openInNewTab}
              >
                CAIIB
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/exam/nism"
                {...openInNewTab}
              >
                NISM
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/exam/bpsc"
                {...openInNewTab}
              >
                BPSC
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/exam/cdpo"
                {...openInNewTab}
              >
                CDPO
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/exam/aao"
                {...openInNewTab}
              >
                AAO
              </a>
            </li>

          </ul>

        </div>


        {/* =========================
            OUR PRODUCTS
        ========================== */}
        <div className="footer-column">

          <h3>Our Products</h3>

          <ul>

            <li>
              <a
                href="https://www.myonlineprep.com/our-courses?category=MT"
                {...openInNewTab}
              >
                Mock Tests
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/our-courses?category=VS"
                {...openInNewTab}
              >
                Videos
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/our-courses?category=EB"
                {...openInNewTab}
              >
                eBooks
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/our-courses?category=LC"
                {...openInNewTab}
              >
                Live Classes
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/free-quiz"
                {...openInNewTab}
              >
                Free Quizzes
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/our-courses?category=VS"
                {...openInNewTab}
              >
                Free Videos
              </a>
            </li>

            <li>
              <a
                href="https://www.myonlineprep.com/blog/articles"
                {...openInNewTab}
              >
                Articles
              </a>
            </li>

          </ul>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================== */}
      <div className="footer-bottom">

        <div className="footer-divider"></div>

        <div className="footer-bottom-content">

          <p>
            © 2026 Myonlineprep. Developed by{" "}

            <a
              href="https://raysdevtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              Rays Edutech Pvt. Ltd.
            </a>
            .
          </p>


          {/* Legal Links */}
          <div className="footer-legal-links">

            <a
              href="https://www.myonlineprep.com/terms-conditions"
              {...openInNewTab}
            >
              Terms & Conditions
            </a>

            <span>|</span>

            <a
              href="https://www.myonlineprep.com/privacy-policy"
              {...openInNewTab}
            >
              Privacy Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;