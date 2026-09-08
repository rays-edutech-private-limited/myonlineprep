import React, { useEffect, useState } from "react";
import "./ArticleSection.css";

import artimg1 from "../../assets/img/caiib-img1.png";
import artimg2 from "../../assets/img/caiib-img2.png";
import artimg3 from "../../assets/img/caiib-img3.png";

import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const articles = [
  {
    image: artimg1,
    category: "JAIIB • STRATEGY",
    title:
      "How to Prepare for JAIIB | Complete Paper-Wise Strategy",
    description:
      "A complete paper-wise strategy for ABM, BFM, ABFM, BRBL and the elective — what each paper demands, where candidates lose marks, and a month-wise plan for the Dec 2026 cycle.",
    date: "29th Jun 2026",
  },

  {
    image: artimg2,
    category: "JAIIB • ELECTIVE",
    title:
      "Choosing Your JAIIB Elective: HRM, IT, Rural Banking, Risk or Central Banking?",
    description:
      "HRM, Rural Banking, IT, Risk Management, or Central Banking? A role-by-role guide to choosing the right JAIIB elective and clearing it in your first attempt.",
    date: "15th May 2026",
  },

  {
    image: artimg3,
    category: "JAIIB • CAREER",
    title:
      "How Much Salary Increases After Passing JAIIB and CAIIB?",
    description:
      "A real SBI PO example breaking down basic pay, DA, HRA and the total monthly hike you can expect after clearing JAIIB and CAIIB.",
    date: "6th May 2026",
  },

 
];

const ArticleSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  /* =====================================================
     RESPONSIVE CARD COUNT
  ===================================================== */

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 767) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();

    window.addEventListener(
      "resize",
      updateVisibleCards
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCards
      );
    };
  }, []);

  /* =====================================================
     MAX SLIDE
  ===================================================== */

  const maxIndex = Math.max(
    0,
    articles.length - visibleCards
  );

  /* =====================================================
     RESET INDEX WHEN SCREEN SIZE CHANGES
  ===================================================== */

  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, maxIndex)
    );
  }, [maxIndex]);

  /* =====================================================
     NEXT
  ===================================================== */

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, maxIndex)
    );
  };

  /* =====================================================
     PREVIOUS
  ===================================================== */

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  /* =====================================================
     SLIDE WIDTH
  ===================================================== */

  const getTranslateValue = () => {
    if (visibleCards === 3) {
      return `calc(
        -${currentIndex} * ((100% - 36px) / 3 + 18px)
      )`;
    }

    if (visibleCards === 2) {
      return `calc(
        -${currentIndex} * ((100% - 18px) / 2 + 18px)
      )`;
    }

    return `-${currentIndex * 100}%`;
  };

  return (
    <section
      className="article-container"
      id="articles-section"
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="article-header">

        

        <h2> Articles</h2>

        <p>
          Get exam-ready with concepts, questions and
          study notes as per the latest JAIIB & CAIIB
          pattern.
        </p>

      </div>


      {/* =================================================
          SLIDER
      ================================================= */}

      <div className="articles-slider">

        {/* =================================================
            PREVIOUS BUTTON
        ================================================= */}

        {articles.length > visibleCards && (
          <button
            type="button"
            className={`article-side-btn article-prev ${
              currentIndex === 0
                ? "disabled"
                : ""
            }`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous article"
          >
            <FaChevronLeft />
          </button>
        )}


        {/* =================================================
            VIEWPORT
        ================================================= */}

        <div className="articles-viewport">

          {/* =================================================
              TRACK
          ================================================= */}

          <div
            className="articles-track"
            style={{
              transform: `translateX(${getTranslateValue()})`,
            }}
          >

            {articles.map((article, index) => (
              <a
                href="https://www.myonlineprep.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-card"
                key={index}
              >

                {/* =========================================
                    IMAGE
                ========================================= */}

                <div className="article-image-wrapper">

                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-image"
                  />

                  <span className="article-category">
                    {article.category}
                  </span>

                

                </div>


                {/* =========================================
                    CONTENT
                ========================================= */}

                <div className="article-content">

                  <h3>
                    {article.title}
                  </h3>

                  <p className="article-description">
                    {article.description}
                  </p>


                  {/* =======================================
                      FOOTER
                  ======================================= */}

                  <div className="article-footer">

                    <span className="article-date">
                      {article.date}
                    </span>

                    <span className="article-read">
                      Read More

                      <span className="article-arrow">
                        <FaArrowRight />
                      </span>
                    </span>

                  </div>

                </div>

              </a>
            ))}

          </div>

        </div>


        {/* =================================================
            NEXT BUTTON
        ================================================= */}

        {articles.length > visibleCards && (
          <button
            type="button"
            className={`article-side-btn article-next ${
              currentIndex >= maxIndex
                ? "disabled"
                : ""
            }`}
            onClick={handleNext}
            disabled={
              currentIndex >= maxIndex
            }
            aria-label="Next article"
          >
            <FaChevronRight />
          </button>
        )}

      </div>


      {/* =================================================
          DOTS
      ================================================= */}

      {articles.length > visibleCards && (
        <div className="article-slider-dots">

          {Array.from({
            length: maxIndex + 1,
          }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={`article-dot ${
                currentIndex === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setCurrentIndex(index)
              }
              aria-label={`Go to slide ${
                index + 1
              }`}
            />
          ))}

        </div>
      )}

    </section>
  );
};

export default ArticleSection;