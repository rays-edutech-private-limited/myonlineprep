import React from "react";
import {
  FaRegCheckCircle,
  FaRegCreditCard,
  FaRegLightbulb,
  FaRegThumbsUp,
} from "react-icons/fa";

import "./ServiceSection.css";

const servicesData = [
  {
    icon: <FaRegCreditCard />,
    title: "Choose your package",
    description:
      "Pick the combo, mock-only, or single elective plan. Get a personalised 60-day study plan.",
    gradientClass: "purple-grad",
    animationClass: "creative-package",
    number: "01",
    stat: "Enroll",
  },

  {
    icon: <FaRegLightbulb />,
    title: "Learn from expert faculty",
    description:
      "300+ hours of HD lessons by ex-bankers. Pause, rewind, revisit anytime, on any device.",
    gradientClass: "pink-grad",
    animationClass: "creative-lightbulb",
    number: "02",
    stat: "Learn",
  },

  {
    icon: <FaRegThumbsUp />,
    title: "Practice & track progress",
    description:
      "Attempt 7000+ chapter-wise and full-length mocks. Analytics show exactly where to focus.",
    gradientClass: "purple-grad",
    animationClass: "creative-progress",
    number: "03",
    stat: "Practice",
  },

  {
    icon: <FaRegCheckCircle />,
    title: "Walk in ready, at 60+ marks",
    description:
      "Backed by a proven track record of 88,000+ successful selections.",
    gradientClass: "pink-grad",
    animationClass: "creative-ready",
    number: "04",
    stat: "Clear",
  },
];

const ServiceSection = () => {
  return (
    <section className="service-section-container">
      <div className="service-inner">

        {/* ================= HEADER ================= */}

        <div className="service-heading">
          <h2>
            Clear CAIIB In Four{" "}
            <span>Checkpoints</span>
          </h2>

          <p>
            Not a generic course — a sequenced study protocol from registration
            day to result day.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div className="service-grid">
          {servicesData.map((service, index) => (
            <div
              className={`service-item ${service.gradientClass} ${service.animationClass}`}
              key={index}
            >

              {/* ================= NUMBER ================= */}

              <div className="service-number">
                {service.number}
              </div>


              {/* ================= ICON AREA ================= */}

              <div className="service-icon-area">

  {/* ================= CARD 01 ================= */}
  {service.animationClass === "creative-package" && (
    <>
      <div className="package-orbit"></div>
      <div className="package-orbit-small"></div>

      <span className="package-particle package-one"></span>
      <span className="package-particle package-two"></span>
      <span className="package-particle package-three"></span>
    </>
  )}

  {/* ================= CARD 02 ================= */}
  {service.animationClass === "creative-lightbulb" && (
    <>
      <div className="light-orbit light-orbit-one"></div>
      <div className="light-orbit light-orbit-two"></div>

      <span className="light-particle particle-one"></span>
      <span className="light-particle particle-two"></span>
      <span className="light-particle particle-three"></span>
      <span className="light-particle particle-four"></span>
    </>
  )}

  {/* ================= CARD 03 ================= */}
  {service.animationClass === "creative-progress" && (
    <>
      <div className="progress-orbit progress-orbit-one"></div>
      <div className="progress-orbit progress-orbit-two"></div>

      <span className="progress-particle progress-one"></span>
      <span className="progress-particle progress-two"></span>
      <span className="progress-particle progress-three"></span>
    </>
  )}

  {/* ================= CARD 04 ================= */}
  {service.animationClass === "creative-ready" && (
    <>
      <div className="ready-orbit ready-orbit-one"></div>
      <div className="ready-orbit ready-orbit-two"></div>

      <span className="ready-particle ready-one"></span>
      <span className="ready-particle ready-two"></span>
      <span className="ready-particle ready-three"></span>
      <span className="ready-particle ready-four"></span>
    </>
  )}

  {/* Blob */}
  <div className="icon-blob"></div>

  {/* Icon */}
  <div
    className={`service-icon-wrapper ${service.gradientClass}`}
  >
    <div className="service-icon">
      {service.icon}
    </div>
  </div>

  {/* Spark */}
  <div className="icon-spark">
    <i></i>
    <i></i>
    <i></i>
  </div>

</div>


              {/* ================= CONTENT ================= */}

              <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                {/* Bottom Stat */}

                <div
                  className={`service-stat ${service.gradientClass}`}
                >
                  <span>{service.stat}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;