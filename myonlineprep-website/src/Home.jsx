import React, { useEffect, useState } from "react";

import HeroSection from "./components/herosection/HeroSection";
import ServiceSection from "./components/servicesection/ServiceSection";
import AllServices from "./components/allsercice/AllServices";
import EnrollSection from "./components/enrollsection/EnrollSection";
import ReviewSection from "./components/reviewSection/ReviewSection";
import KeyDetailsSection from "./components/keydetails/KeyDetailsSection";
import StudyappSection from "./components/studyappsection/StudyappSection";
import ArticleSection from "./components/articleSection/ArticleSection";
import FaqSection from "./components/faqsection/FaqSection";

import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

import "./Home.css";

const Home = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  /* =========================================
     SHOW/HIDE TOP BUTTON ON SCROLL
  ========================================= */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     OPEN WHATSAPP
  ========================================= */
  const openWhatsApp = () => {
    const phoneNumber = "919264149917";

    const message = encodeURIComponent(
      "Hello, I want to know more about your courses."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =========================================
     SCROLL TO TOP
  ========================================= */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-page">

      {/* =========================================
          EXAM INFO
      ========================================= */}
      <div id="exam-info">
        <HeroSection />
      </div>


      {/* =========================================
          SERVICES
      ========================================= */}
      <ServiceSection />

      <AllServices />


      {/* =========================================
          COURSES
      ========================================= */}
      <div id="enroll-section">
        <EnrollSection />
      </div>


      {/* =========================================
          REVIEWS
      ========================================= */}
      <ReviewSection />


      {/* =========================================
          KEY DETAILS
      ========================================= */}
      <KeyDetailsSection />


      {/* =========================================
          STUDY APP
      ========================================= */}
      <StudyappSection />


      {/* =========================================
          ARTICLES
      ========================================= */}
      <div id="articles-section">
        <ArticleSection />
      </div>


      {/* =========================================
          FAQ
      ========================================= */}
      <div id="faq-section">
        <FaqSection />
      </div>


      {/* =====================================================
          FLOATING WHATSAPP + SCROLL TOP BUTTON
      ===================================================== */}
      <div className="floating-buttons">

        {/* =========================================
            WHATSAPP BUTTON
            ALWAYS VISIBLE
        ========================================= */}
        <button
          type="button"
          className="floating-btn whatsapp-btn"
          onClick={openWhatsApp}
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </button>


        {/* =========================================
            TOP BUTTON
            ONLY VISIBLE AFTER SCROLL
        ========================================= */}
        {showTopButton && (
          <button
            type="button"
            className="floating-btn top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Go to top"
          >
            <FaArrowUp className="top-icon" />
          </button>
        )}

      </div>

    </div>
  );
};

export default Home;