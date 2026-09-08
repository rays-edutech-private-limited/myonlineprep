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
} from "react-icons/fa";
import FreeMockTestModal from "../FreeMockTestModal/FreeMockTestModal";

/* =====================================================
   COURSE CARD
===================================================== */

const CourseCard = ({ card }) => {
  
  return (
    <div className="main-course-card">

      {/* Ribbon */}
      <div className="green-cleared-ribbon">
        <span>CLEARED</span>
      </div>

      {/* Header */}
      <div className="card-header">
        <h2>
          {card.title}
          <span className="verified-tick">✓</span>
        </h2>

        <p>{card.subtitle}</p>
      </div>

      {/* Features */}
      <div className="card-features-list">
        {card.features.map((feature, index) => (
          <div className="feature-row" key={index}>

            <div className="feature-left">
              <span className="feat-icon">
                {feature.icon}
              </span>

              <span className="feature-text">
                {feature.text}
              </span>
            </div>

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

      {/* Price */}
      <div className="card-pricing-footer">

        <div className="price-box">
          <span className="current-price">
            {card.price}
          </span>

          <span className="original-price">
            {card.originalPrice}
          </span>
        </div>

        <div className="secure-badge">
          <FaShieldAlt />
          <span>{card.discount}</span>
        </div>

      </div>
    </div>
  );
};


/* =====================================================
   HERO SECTION
===================================================== */

const HeroSection = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState("CAIIB");
   const openMockTest = (examName) => {
    setSelectedExam(examName);
    setIsModalOpen(true);
  };

  const closeMockTest = () => {
    setIsModalOpen(false);
  };



  /* =====================================================
     SLIDES
  ===================================================== */

  const slides = [
    {
      title: "CAIIB 2026 Combo Pro",
      subtitle: "All Compulsory Papers + HRM Elective",

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
          text: "200+ Full Mock Tests",
          status: "Included",
        },
        {
          icon: <FaCalendarAlt />,
          text: "Validity",
          status: "8 Months",
          green: true,
        },
      ],

      price: "₹2,999",
      originalPrice: "₹11,999",
      discount: "76% OFF • Secure Checkout",
    },

    {
      title: "CAIIB 2026 Advanced Pack",
      subtitle: "All Compulsory Papers + BFM Focus",

      features: [
        {
          icon: <FaPlayCircle />,
          text: "250+ Hrs HD Video",
          status: "Included",
        },
        {
          icon: <FaBook />,
          text: "5,000+ Practice MCQs",
          status: "Included",
        },
        {
          icon: <FaRegFileAlt />,
          text: "150+ Full Mock Tests",
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
      discount: "75% OFF • Secure Checkout",
    },

    {
      title: "CAIIB 2026 Premium Pack",
      subtitle: "Complete CAIIB Preparation Program",

      features: [
        {
          icon: <FaPlayCircle />,
          text: "320+ Hrs HD Video",
          status: "Included",
        },
        {
          icon: <FaBook />,
          text: "8,000+ Practice MCQs",
          status: "Included",
        },
        {
          icon: <FaRegFileAlt />,
          text: "250+ Full Mock Tests",
          status: "Included",
        },
        {
          icon: <FaCalendarAlt />,
          text: "Validity",
          status: "10 Months",
          green: true,
        },
      ],

      price: "₹3,499",
      originalPrice: "₹13,999",
      discount: "75% OFF • Secure Checkout",
    },

    {
      title: "CAIIB 2026 BFM Special",
      subtitle: "Focused BFM Preparation + Mock Tests",

      features: [
        {
          icon: <FaPlayCircle />,
          text: "180+ Hrs HD Video",
          status: "Included",
        },
        {
          icon: <FaBook />,
          text: "4,000+ Practice MCQs",
          status: "Included",
        },
        {
          icon: <FaRegFileAlt />,
          text: "120+ Full Mock Tests",
          status: "Included",
        },
        {
          icon: <FaCalendarAlt />,
          text: "Validity",
          status: "6 Months",
          green: true,
        },
      ],

      price: "₹1,999",
      originalPrice: "₹7,999",
      discount: "75% OFF • Secure Checkout",
    },
  ];


  /* =====================================================
     AUTO SLIDER
  ===================================================== */

  useEffect(() => {
    if (isPaused) return;

    const autoSlide = setInterval(() => {
      setActiveSlide((prev) => {
        return (prev + 1) % slides.length;
      });
    }, 3800);

    return () => clearInterval(autoSlide);
  }, [isPaused, slides.length]);


  /* =====================================================
     NEXT
  ===================================================== */

  const handleNext = () => {
    setActiveSlide((prev) => {
      return (prev + 1) % slides.length;
    });
  };


  /* =====================================================
     PREVIOUS
  ===================================================== */

  const handlePrev = () => {
    setActiveSlide((prev) => {
      return (prev - 1 + slides.length) % slides.length;
    });
  };


  /* =====================================================
     SINGLE CARD SLIDE POSITION
  ===================================================== */

  const getCardStyleClass = (index) => {

    const total = slides.length;

    const diff =
      (index - activeSlide + total) % total;

    /* Current visible card */
    if (diff === 0) {
      return "card-front";
    }

    /* Next card - right side */
    if (diff === 1) {
      return "card-next";
    }

    /* Previous card - left side */
    if (diff === total - 1) {
      return "card-prev";
    }

    /* All other cards hidden */
    return "card-hidden";
  };


  /* =====================================================
     RETURN
  ===================================================== */

  return (
    <section className="hero-section">

      {/* Background Glow */}
      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>


      <div className="hero-container">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-left">

          {/* Trusted Badge */}
          <div className="trusted-badge">

            <span className="shield-border">
              <FaShieldAlt />
            </span>

            <span>
              Trusted by 1.5L+ Bankers
            </span>

          </div>


          {/* Title */}
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


          {/* Title Line */}
          <div className="title-line"></div>


          {/* Description */}
          <p className="hero-desc">

            Join <strong>1.5 lakh+</strong> bankers who
            cleared ABM, BFM, ABFM and their elective —
            while working full-time.

            <br />

            Built by ex-bankers, for bankers.

          </p>


          {/* CTA Buttons */}
          <div className="hero-cta-buttons">

    <a
  className="btn-explore"
  href="https://www.myonlineprep.com/exam/course/caiib"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>Explore Courses</span>

  <span className="circle-arrow">
    <FaArrowRight />
  </span>
</a>

            <button   onClick={() => openMockTest("CAIIB")} className="btn-mock">

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

            {/* Stat 1 */}
            <div className="stat-item-h">

              <FaUsers className="stat-icon-h" />

              <div className="stat-content-h">

                <h2>1.5L+</h2>

                <p>
                  Bankers Trained
                </p>

              </div>

            </div>


            <span className="stat-divider"></span>


            {/* Stat 2 */}
            <div className="stat-item-h">

              <FaAward className="stat-icon-h" />

              <div className="stat-content-h">

                <h2>88K+</h2>

                <p>
                  Selections
                </p>

              </div>

            </div>


            <span className="stat-divider"></span>


            {/* Stat 3 */}
            <div className="stat-item-h">

              <FaStar className="stat-icon-h" />

              <div className="stat-content-h">

                <h2>4.8</h2>

                <p>
                  App Rating
                </p>

              </div>

            </div>


            <span className="stat-divider"></span>


            {/* Stat 4 */}
            <div className="stat-item-h">

              <FaTrophy className="stat-icon-h" />

              <div className="stat-content-h">

                <h2>2014</h2>

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


            {/* LEFT ARROW */}
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


            {/* RIGHT ARROW */}
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
          <div className="bottom-pills-container">

        <div className="pill-item">

          <FaShieldAlt />

          <span>
            Score 60+ Guaranteed
          </span>

        </div>


        <div className="pill-item">

          <FaPlayCircle />

          <span>
            300+ Expert Videos
          </span>

        </div>


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
          BOTTOM PILLS
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