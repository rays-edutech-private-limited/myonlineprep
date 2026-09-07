
import React, { useState, useEffect } from "react";
import "./ReviewSection.css";
import { Rocket } from "lucide-react";

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const reviews = [
    {
      tag: "ABM 61 • BFM 57 • RB 60",
      status: "CLEARED",
      quote:
        "I cleared CAIIB in my first attempt itself. The quality of the content and the mock test difficulty level is spot on.",
      name: "Kunal Sutradhar",
      details: "CAIIB Cleared • Dec 2025",
      avatar: "K",
      avatarBg: "#4a00e0",
    },
    {
      tag: "★★★★★ Google review",
      status: "CLEARED",
      quote:
        "I strongly recommend MyOnlinePrep for CAIIB. After many failed attempts, I finally managed to pass CAIIB in one go easily, because of the mocks.",
      name: "Vikas Yadav",
      details: "CAIIB Cleared • Dec 2025",
      avatar: "V",
      avatarBg: "#8e44ad",
    },
    {
      tag: "★★★★★ Google review",
      status: "PASSED",
      quote:
        "This app helped me a lot to clear the paper with very good marks. The mock tests were very close to the actual paper and the video lectures too.",
      name: "Shilpa S.",
      details: "CAIIB Cleared • Dec 2025",
      avatar: "S",
      avatarBg: "#e74c3c",
    },
    {
      tag: "Google Play review",
      status: "CLEARED",
      quote:
        "Most quality content ever! Faculties are excellent and their job well explained. Will explain something complex in impressive.",
      name: "Anim",
      details: "Google Play Reviewer",
      avatar: "A",
      avatarBg: "#007bff",
    },
    {
      tag: "ABM 59 • BFM 62",
      status: "CLEARED",
      quote:
        "The conceptual clarity provided in videos made tough topics extremely easy to digest. Highly satisfied!",
      name: "Rahul Sharma",
      details: "CAIIB Cleared • Dec 2025",
      avatar: "R",
      avatarBg: "#00897b",
    },
  ];

  /* =========================
     RESPONSIVE CARD COUNT
  ========================= */

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 650) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  /*
    Maximum position.

    Example:
    5 cards total
    4 visible

    0 = 1 2 3 4
    1 = 2 3 4 5

    Isliye max index = 5 - 4 = 1
  */
  const maxIndex = Math.max(
    reviews.length - visibleCards,
    0
  );

  /*
    Agar screen resize hone par currentIndex
    maximum se bada ho jaye to usko last position
    par automatically le aao.
  */
  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, maxIndex)
    );
  }, [maxIndex]);

  /* =========================
     NEXT
  ========================= */

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return maxIndex;
      }

      return prev + 1;
    });
  };

  /* =========================
     PREVIOUS
  ========================= */

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return 0;
      }

      return prev - 1;
    });
  };

  /* =========================
     DOT CLICK
  ========================= */

  const handleDotClick = (index) => {
    setCurrentIndex(
      Math.min(index, maxIndex)
    );
  };

  return (
    <section className="review-section">

     

      <h2 className="review-title">
       Choose Hear from our Bankers who <br />
        <span className="highlight-text">
          Cleared CAIIB
        </span>
      </h2>

      <p className="review-subtitle">
        Real results from real bankers. Hear exactly how MyOnlinePrep
        <br />
        helped them crack CAIIB and advance their careers.
      </p>

      {/* SLIDER */}
      <div className="review-container">

        {/* PREVIOUS BUTTON */}
        <button
          className={`slider-btn prev-btn ${
            currentIndex === 0 ? "disabled" : ""
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous reviews"
        >
          ‹
        </button>

        {/* VIEWPORT */}
        <div className="review-viewport">

          {/* TRACK */}
          <div
            className="review-grid"
            style={{
              "--current-index": currentIndex,
            }}
          >
            {reviews.map((item, index) => (
              <div
                className="review-card"
                key={index}
              >

                <div className="card-top">
                  <span className="card-tag">
                    {item.tag}
                  </span>

                  <span
                    className={`card-status ${item.status.toLowerCase()}`}
                  >
                    ✓ {item.status}
                  </span>
                </div>

                <div className="quote-icon">
                  ❝
                </div>

                <p className="review-text">
                  "{item.quote}"
                </p>

                <div className="card-footer">

                  <div
                    className="user-avatar"
                    style={{
                      backgroundColor:
                        item.avatarBg,
                    }}
                  >
                    {item.avatar}
                  </div>

                  <div className="user-info">
                    <h4>{item.name}</h4>
                    <p>{item.details}</p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* NEXT BUTTON */}
        <button
          className={`slider-btn next-btn ${
            currentIndex >= maxIndex
              ? "disabled"
              : ""
          }`}
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          aria-label="Next reviews"
        >
          ›
        </button>

      </div>

      {/* DOTS */}
      <div className="pagination-dots">

        {Array.from(
          { length: maxIndex + 1 },
          (_, index) => (
            <button
              key={index}
              className={`dot ${
                currentIndex === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleDotClick(index)
              }
              aria-label={`Go to slide ${
                index + 1
              }`}
            />
          )
        )}

      </div>

      {/* CTA */}
      <div className="cta-banner">
        <button className="cta-button">
           Start your CAIIB journey today <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>

      {/* STATS */}
      {/* <div className="stats-container">

        <div className="stat-item">
          <span className="stat-icon">
            🛡️
          </span>

          <div>
            <strong>Trusted by</strong>
            <p>10K+ Bankers</p>
          </div>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <span className="stat-icon">
            🎯
          </span>

          <div>
            <strong>High Success</strong>
            <p>Rate</p>
          </div>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <span className="stat-icon">
            ⭐
          </span>

          <div>
            <strong>Top Rated</strong>
            <p>by Learners</p>
          </div>
        </div>

      </div> */}

    </section>
  );
};

export default ReviewSection;

