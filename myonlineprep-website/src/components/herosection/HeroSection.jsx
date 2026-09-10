
import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import {
  FaShieldAlt,
  FaArrowRight,
  FaRegFileAlt,
  FaPlayCircle,
  FaBook,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaAward,
  FaStar,
  FaTrophy,
  FaQuestionCircle,
  FaRegQuestionCircle,
} from "react-icons/fa";

import FreeMockTestModal from "../FreeMockTestModal/FreeMockTestModal";

/* =====================================================
   COURSE CARD
===================================================== */

const CourseCard = ({ card }) => {

  /* =====================================================
     CARD CLICK
  ===================================================== */

  const handleCardClick = () => {
    if (card?.url) {
      window.open(
        card.url,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  /* =====================================================
     KEYBOARD CLICK
  ===================================================== */

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      className="main-course-card"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      title={`View ${card.title}`}
    >

      {/* =================================================
          RIBBON
      ================================================= */}

      <div className="green-cleared-ribbon">
        <span>CLEARED</span>
      </div>


      {/* =================================================
          HEADER
      ================================================= */}

      <div className="card-header">

        <h2>
          {card.title}

          <span className="verified-tick">
            ✓
          </span>
        </h2>

        <p>
          {card.subtitle}
        </p>

      </div>


      {/* =================================================
          FEATURES
      ================================================= */}

      <div className="card-features-list">

        {card.features.map((feature, index) => (

          <div
            className="feature-row"
            key={index}
          >

            {/* LEFT */}
            <div className="feature-left">

              <span className="feat-icon">
                {feature.icon}
              </span>

              <span className="feature-text">
                {feature.text}
              </span>

            </div>


            {/* RIGHT */}
            <span
              className={
                feature.green
                  ? "feat-status green-text"
                  : "feat-status"
              }
            >
              {feature.status}
            </span>

          </div>

        ))}

      </div>


      {/* =================================================
          PRICE
      ================================================= */}

      <div className="card-pricing-footer">

        <div className="price-box">

          <span className="current-price">
            {card.price}
          </span>

          <span className="original-price">
            {card.originalPrice}
          </span>

        </div>


        {/* SECURE BADGE */}
        <div className="secure-badge">

          <FaShieldAlt />

          <span>
            {card.discount}
          </span>

        </div>

      </div>

    </div>
  );
};


/* =====================================================
   HERO SECTION
===================================================== */

const HeroSection = () => {

  /* =====================================================
     STATES
  ===================================================== */

  const [activeSlide, setActiveSlide] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedExam, setSelectedExam] = useState("CAIIB");


  /* =====================================================
     OPEN MOCK TEST
  ===================================================== */

  const openMockTest = (examName) => {

    setSelectedExam(examName);

    setIsModalOpen(true);

  };


  /* =====================================================
     CLOSE MOCK TEST
  ===================================================== */

  const closeMockTest = () => {

    setIsModalOpen(false);

  };


  /* =====================================================
     SLIDES
  ===================================================== */

  const slides = [

    /* =================================================
       CARD 1
    ================================================= */

    {
      title: "CAIIB 2026 Combo Pro",

      subtitle:
        "All Compulsory Papers + HRM Elective",

      url:
        "https://www.myonlineprep.com/course-details/caiib-combo-abm-bfm-abfm-brbl-video-lesson-mock-test-ebooks",

      features: [

        {
          icon: <FaPlayCircle />,
          text: "300+ Hrs HD Video",
          status: "Included",
        },

        {
          icon: <FaBook />,
          text: "7,000+ Practice MCQs",
          status: "Included",
        },

        {
          icon: <FaRegFileAlt />,
          text: " 150+ e books",
          status: "Included",
        },

        {
          icon: <FaCalendarAlt />,
          text: "Validity",
          status: "6 Months",
          green: true,
        },

      ],

      price: "₹2,999",

      originalPrice: "₹11,999",

      discount:
        "76% OFF • Secure Checkout",
    },


    /* =================================================
       CARD 2
    ================================================= */

    {
      title: "CAIIB Mocks Pro 2026",

      subtitle:
        "All compulsory papers",

      url:
        "https://www.myonlineprep.com/course-details/caiib-mock-tests-abm-bfm-abfm-brbl",

      features: [

        {
          icon: <FaRegQuestionCircle />,
          text: "7,000+ MCQs with solutions",
          status: "Included",
        },

        {
          icon: <FaBook />,
          text: "250+ practice sets",
          status: "Included",
        },

        {
          icon: <FaRegFileAlt />,
          text: "150+ e-books",
          status: "Included",
        },

        {
          icon: <FaCalendarAlt />,
          text: "Validity",
          status: "6 Months",
          green: true,
        },

      ],

      price: "₹2,499",

      originalPrice: "₹9,999",

      discount:
        "75% OFF • Secure Checkout",
    },


    /* =================================================
       CARD 3
    ================================================= */

    {
      title: "CAIIB HRM Elective 2026",

      subtitle:
        "Mock tests + e-books",

      url:
        "https://www.myonlineprep.com/course-details/caiib-hrm-elective-paper-mock-tests-ebooks",

      features: [

        {
          icon: <FaRegQuestionCircle />,
          text: "2,000+ MCQs with solutions",
          status: "Included",
        },

        {
          icon: <FaBook />,
          text: "50+ practice sets",
          status: "Included",
        },

        {
          icon: <FaRegFileAlt />,
          text: "50+ e-books",
          status: "Included",
        },

        {
          icon: <FaCalendarAlt />,
          text: "Validity",
          status: "6 months",
          green: true,
        },

      ],

      price: "₹599",

      originalPrice: "₹4,499",

      discount:
        "87% OFF • Secure Checkout",
    },

  ];


  /* =====================================================
     AUTO SLIDER
  ===================================================== */

  useEffect(() => {

    if (isPaused) {
      return;
    }

    const autoSlide = setInterval(() => {

      setActiveSlide((prev) => {

        return (
          (prev + 1) %
          slides.length
        );

      });

    }, 3800);


    return () => {

      clearInterval(autoSlide);

    };

  }, [isPaused, slides.length]);


  /* =====================================================
     NEXT SLIDE
  ===================================================== */

  const handleNext = () => {

    setActiveSlide((prev) => {

      return (
        (prev + 1) %
        slides.length
      );

    });

  };


  /* =====================================================
     PREVIOUS SLIDE
  ===================================================== */

  const handlePrev = () => {

    setActiveSlide((prev) => {

      return (
        (prev - 1 + slides.length) %
        slides.length
      );

    });

  };


  /* =====================================================
     CARD POSITION
  ===================================================== */

  const getCardStyleClass = (index) => {

    const total = slides.length;

    const diff =
      (index - activeSlide + total) %
      total;


    /* CURRENT CARD */
    if (diff === 0) {

      return "card-front";

    }


    /* NEXT CARD */
    if (diff === 1) {

      return "card-next";

    }


    /* PREVIOUS CARD */
    if (diff === total - 1) {

      return "card-prev";

    }


    /* HIDDEN */
    return "card-hidden";

  };


  /* =====================================================
     RETURN
  ===================================================== */

  return (

    <section className="hero-section">


      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div className="hero-glow hero-glow-left"></div>

      <div className="hero-glow hero-glow-right"></div>


      <div className="hero-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-left">


          {/* =================================================
              TRUSTED BADGE
          ================================================= */}

          <div className="trusted-badge">

            <span className="shield-border">

              <FaShieldAlt />

            </span>

            <span>
              Trusted by 1.5L+ Bankers
            </span>

          </div>


          {/* =================================================
              TITLE
          ================================================= */}

          <h1 className="hero-title">

            Crack{" "}

            <span className="highlight-yellow">
              CAIIB
            </span>

            <br />

            in Your First

            <br />

            Attempt{" "}

            <span className="italic-yellow">
              Confidently.
            </span>

          </h1>


          {/* TITLE LINE */}

          <div className="title-line"></div>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="hero-desc">

            Join <strong>1.5 lakh+</strong> bankers who
            cleared ABM, BFM, ABFM and their elective —
            while working full-time.

            <br />

           <strong>Built by ex-bankers, for bankers.</strong> 

          </p>


          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div className="hero-cta-buttons">


            {/* EXPLORE COURSES */}

            <a
              className="btn-explore"
              href="https://www.myonlineprep.com/exam/course/caiib"
              target="_blank"
              rel="noopener noreferrer"
            >

              <span>
                Explore Courses
              </span>

              <span className="circle-arrow">

                <FaArrowRight />

              </span>

            </a>


            {/* FREE MOCK TEST */}

            <button
              onClick={() =>
                openMockTest("CAIIB")
              }
              className="btn-mock"
              type="button"
            >

              <FaRegFileAlt />

              <span>
                Take Free Mock Test
              </span>

            </button>


          </div>


          {/* =================================================
              STATS BAR
          ================================================= */}

          <div className="hero-stats-bar">


            {/* STAT 1 */}

            <div className="stat-item-h">

              <FaUsers className="stat-icon-h" />

              <div className="stat-content-h">

                <h2>
                  1.5L+
                </h2>

                <p>
                  Bankers Trained
                </p>

              </div>

            </div>


            <span className="stat-divider"></span>


            {/* STAT 2 */}

            <div className="stat-item-h">

              <FaAward className="stat-icon-h" />

              <div className="stat-content-h">

                <h2>
                  88K+
                </h2>

                <p>
                  Selections
                </p>

              </div>

            </div>


            <span className="stat-divider"></span>


            {/* STAT 3 */}

            <div className="stat-item-h">

              <FaStar className="stat-icon-h" />

              <div className="stat-content-h">

                <h2>
                  4.8
                </h2>

                <p>
                  App Rating
                </p>

              </div>

            </div>


            <span className="stat-divider"></span>


            {/* STAT 4 */}

            <div className="stat-item-h">

              <FaTrophy className="stat-icon-h" />

              <div className="stat-content-h">

                <h2>
                  2014
                </h2>

                <p>
                  Established
                </p>

              </div>

            </div>


          </div>

        </div>


        {/* =================================================
            RIGHT SIDE SLIDER
        ================================================= */}

        <div
          className="hero-right-area"

          onMouseEnter={() =>
            setIsPaused(true)
          }

          onMouseLeave={() =>
            setIsPaused(false)
          }
        >


          <div className="hero-right">


            {/* =================================================
                LEFT ARROW
            ================================================= */}

            <button
              className="slider-arrow slider-arrow-left"
              onClick={handlePrev}
              aria-label="Previous"
              type="button"
            >

              <FaChevronLeft />

            </button>


            {/* =================================================
                SINGLE CARD VIEWPORT
            ================================================= */}

            <div className="tilted-stack-wrapper">

              {slides.map((card, index) => {

                const styleClass =
                  getCardStyleClass(index);


                return (

                  <div
                    key={index}
                    className={`tilted-card ${styleClass}`}
                  >

                    <CourseCard
                      card={card}
                    />

                  </div>

                );

              })}

            </div>


            {/* =================================================
                RIGHT ARROW
            ================================================= */}

            <button
              className="slider-arrow slider-arrow-right"
              onClick={handleNext}
              aria-label="Next"
              type="button"
            >

              <FaChevronRight />

            </button>


          </div>


          {/* =================================================
              PAGINATION DOTS
          ================================================= */}

          <div className="slider-pagination-dots">

            {slides.map((_, index) => (

              <button
                key={index}
                type="button"

                className={
                  activeSlide === index
                    ? "dot active"
                    : "dot"
                }

                onClick={() =>
                  setActiveSlide(index)
                }

                aria-label={`Go to slide ${
                  index + 1
                }`}
              />

            ))}

          </div>


          {/* =================================================
              BOTTOM PILLS
          ================================================= */}

          <div className="bottom-pills-container">


            {/* PILL 1 */}

            <div className="pill-item">

              <FaShieldAlt />

              <span>
                Score 60+ Guaranteed
              </span>

            </div>


            {/* PILL 2 */}

            <div className="pill-item">

              <FaPlayCircle />

              <span>
                300+ Expert Videos
              </span>

            </div>


            {/* PILL 3 */}

            <div className="pill-item">

              <FaQuestionCircle />

              <span>
                7,000+ Practice MCQs
              </span>

            </div>


          </div>


        </div>

      </div>


      {/* =================================================
          FREE MOCK TEST MODAL
      ================================================= */}

      <FreeMockTestModal
        isOpen={isModalOpen}
        onClose={closeMockTest}
        exam={selectedExam}
      />

    </section>

  );

};


export default HeroSection;
