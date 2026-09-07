import React from "react";
import {
  FaRegCheckCircle,
  FaRegCreditCard,
  FaRegLightbulb,
  FaRegThumbsUp,
  FaGraduationCap,
  FaCrown,
  FaUsers,
  FaChartBar,
  FaStar,
} from "react-icons/fa";

import "./ServiceSection.css";

const servicesData = [
  {
    icon: <FaRegCreditCard />,
    title: "Choose your package",
    description:
      "Pick the combo, mock-only, or single elective plan. Get a personalised 60-day study plan.",
    gradientClass: "purple-grad",
    number: "01",
    
    stat: "Enroll",
  },
  {
    icon: <FaRegLightbulb />,
    title: "Learn from expert faculty",
    description:
      "150+ hours of HD lessons by ex-bankers. Pause, rewind, revisit anytime, on any device.",
    gradientClass: "pink-grad",
    number: "02",
    
    stat: "Learn",
  },
  {
    icon: <FaRegThumbsUp />,
    title: "Practice & track progress",
    description:
      "Attempt 200+ chapter-wise and full-length mocks. Analytics show exactly where to focus.",
    gradientClass: "purple-grad",
    number: "03",
   
    stat: "Practice",
  },
  {
    icon: <FaRegCheckCircle />,
    title: "Walk in ready, at 60+",
    description:
      "Backed by a proven track record of 88,000+ successful selections.",
    gradientClass: "pink-grad",
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
            Not a generic course — a sequenced study protocol from registration day to result day.
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="service-grid">

          {servicesData.map((service, index) => (
            <div
              className={`service-item ${service.gradientClass}`}
              key={index}
            >

              {/* Number */}
              <div className="service-number">
                {service.number}
              </div>

              {/* Icon */}
              <div className="service-icon-area">

                <div className="icon-blob"></div>

                <div
                  className={`service-icon-wrapper ${service.gradientClass}`}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>

                {/* Small decorative lines */}
                <div className="icon-spark">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

              </div>

              {/* Content */}
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