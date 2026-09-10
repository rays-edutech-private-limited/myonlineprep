import React, { useEffect, useState } from "react";
import "./StudyappSection.css";

import app1 from "../../assets/img/app1.webp";
import app2 from "../../assets/img/app2.webp";
import app3 from "../../assets/img/app3.webp";
import app4 from "../../assets/img/app4.webp";
import app5 from "../../assets/img/app5.webp";
import app6 from "../../assets/img/app6.webp";
import app7 from "../../assets/img/app7.webp";

import play from "../../assets/img/playstore.png";

import {
  FaDownload,
  FaClipboardCheck,
  FaComments,
  FaChartBar,
  FaBullseye,
  FaTrophy,
  FaGraduationCap,
} from "react-icons/fa";

/* =========================================================
   APP SLIDES
========================================================= */

const appSlides = [
  app1,
  app2,
  app3,
  app4,
  app5,
  app6,
  app7,
];

const StudyappSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  /* =========================================================
     AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % appSlides.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     MANUAL SLIDE
  ========================================================= */

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="study-app-section">
      <div className="study-app-container">

        <div className="study-main-grid">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="study-left-content">

            <h1 className="study-main-title">
              Study Smarter
              <br />

              <span className="anywhere-text">
                Anywhere,
              </span>{" "}

              <span className="anytime-text">
                Anytime.
              </span>
            </h1>

            <p className="study-description">
              Download the MyOnlinePrep app and carry your entire CAIIB
              preparation in your pocket. Attempt mock tests during lunch,
              watch lessons on your commute, and clear doubts on the go.
            </p>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="study-features-grid">

              {/* FEATURE 1 */}
              <div className="study-feature-card">

                <div className="study-feature-icon purple">
                  <FaDownload />

                  <span className="play-mini">
                    ▶
                  </span>
                </div>

                <div className="study-feature-content">

                  <h3>
                    Offline Video Downloads
                  </h3>

                  <p>
                    Watch your favourite lessons without internet.
                  </p>

                  <div className="small-line purple-line"></div>

                </div>

              </div>


              {/* FEATURE 2 */}
              <div className="study-feature-card">

                <div className="study-feature-icon pink">
                  <FaClipboardCheck />
                </div>

                <div className="study-feature-content">

                  <h3>
                    Mock Tests On-the-Go
                  </h3>

                  <p>
                    7000+ tests at your fingertips. Practice. Analyze. Improve.
                  </p>

                  <div className="small-line pink-line"></div>

                </div>

              </div>


              {/* FEATURE 3 */}
              <div className="study-feature-card">

                <div className="study-feature-icon blue">
                  <FaComments />
                </div>

                <div className="study-feature-content">

                  <h3>
                    Instant Doubt Support
                  </h3>

                  <p>
                    24×7 support from experts whenever you need.
                  </p>

                  <div className="small-line blue-line"></div>

                </div>

              </div>


              {/* FEATURE 4 */}
              <div className="study-feature-card">

                <div className="study-feature-icon green">
                  <FaChartBar />
                </div>

                <div className="study-feature-content">

                  <h3>
                    Progress Dashboard
                  </h3>

                  <p>
                    Track your accuracy, performance & rank.
                  </p>

                  <div className="small-line green-line"></div>

                </div>

              </div>

            </div>


            {/* =================================================
                GOOGLE PLAY + RATING
            ================================================= */}

            <div className="study-store-rating">

              <div
                className="google-play-card"
                role="button"
                tabIndex={0}
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.mkn.elfemo.myonlineprep&hl=en_IN&gl=US&pli=1",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.mkn.elfemo.myonlineprep&hl=en_IN&gl=US&pli=1",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }
                }}
              >

                <img
                  className="google-play-icon"
                  src={play}
                  alt="Google Play"
                />

                <div>
                  <span>
                    GET IT ON
                  </span>

                  <strong>
                    Google Play
                  </strong>
                </div>

              </div>


              <div className="rating-divider"></div>


              <div className="rating-card">

                <div className="rating-stars">

                  <div className="rat-st">
                    ★★★★★
                  </div>

                  <div className="rat-rev">
                    <span>
                      12,000+ reviews
                    </span>
                  </div>

                </div>

                <div className="rating-info">
                  <strong>
                    4.8/5.0
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="study-right-content">

            {/* Decorative dots */}
            <div className="dots-decoration dots-one"></div>
            <div className="dots-decoration dots-two"></div>


            {/* Stars */}
            <div className="decor-star star-one">
              ✦
            </div>

            <div className="decor-star star-two">
              ✦
            </div>

            <div className="decor-star star-three">
              ✦
            </div>


            {/* Plane */}
            <div className="paper-plane">
              ➤
            </div>


            {/* Purple Glow */}
            <div className="purple-glow-circle"></div>


            {/* =================================================
                APP AUTO SLIDER
            ================================================= */}

            <div className="study-app-slider">

              <div className="study-app-slides">

                {appSlides.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`MyOnlinePrep App Screen ${index + 1}`}
                    className={`study-slide-image ${
                      index === activeSlide
                        ? "study-slide-active"
                        : ""
                    }`}
                  />
                ))}

              </div>


              {/* =================================================
                  SLIDER DOTS
              ================================================= */}

              <div className="study-slider-dots">

                {appSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show app screen ${index + 1}`}
                    className={`slider-dot ${
                      index === activeSlide
                        ? "slider-dot-active"
                        : ""
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StudyappSection;