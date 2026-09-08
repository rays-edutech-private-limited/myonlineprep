import React from "react";
import "./EnrollSection.css";
import {
  GraduationCap,
  ClipboardList,
  BookOpen,
  FileText,
  Users,
  Star,
  Check,
  Rocket,
} from "lucide-react";

const EnrollSection = () => {
  const packages = [
    {
      type: "bestseller",
      category: "COMPLETE PREP",
      icon: <GraduationCap size={24} />,
      title: "CAIIB Combo Pro 2026",
      desc: "All compulsory papers + HRM elective",
      price: "₹2,999",
      oldPrice: "₹12,999",
      discount: "76% off - ends soon",

      // Enroll Now URL
      url: "https://www.myonlineprep.com/course-details/caiib-combo-abm-bfm-abfm-brbl-video-lesson-mock-test-ebooks",

      features: [
        "300+ HD video lessons",
        "7,000+ MCQs with solutions",
        "200+ practice sets",
        "8 months validity",
      ],
    },

    {
      category: "MOCK TESTS",
      icon: <ClipboardList size={24} />,
      title: "CAIIB Mocks Pro 2026",
      desc: "All compulsory papers",
      price: "₹2,499",
      oldPrice: "₹9,999",
      discount: "75% off",

      // Enroll Now URL
      url: "https://www.myonlineprep.com/course-details/caiib-mock-tests-abm-bfm-abfm-brbl",

      features: [
        "7,000+ MCQs with solutions",
        "250+ practice sets",
        "150+ e-books",
        "6 months validity",
      ],
    },

    {
      category: "ELECTIVE PAPER",
      icon: <BookOpen size={24} />,
      title: "CAIIB HRM Elective 2026",
      desc: "Mock tests + e-books",
      price: "₹599",
      oldPrice: "₹4,499",
      discount: "87% off",

      // Enroll Now URL
      url: "https://www.myonlineprep.com/course-details/caiib-hrm-elective-paper-mock-tests-ebooks",

      features: [
        "2,000+ MCQs with solutions",
        "50+ practice sets",
        "50+ e-books",
        "6 months validity",
      ],
    },

    {
      category: "PAPER-WISE",
      icon: <FileText size={24} />,
      title: "Single Paper Packs",
      desc: (
        <>
          Mock tests + e-books
          <br />
          pick any one
        </>
      ),
      price: "₹599",
      oldPrice: "₹4,499",
      discount: "87% off",

      tags: ["ABM", "BFM", "ABFM", "BRBL"],

      // Enroll Now URL
      url: "https://www.myonlineprep.com/exam/course/caiib",

      features: [
        "1,200+ MCQs with solutions",
        "25–35+ practice sets",
        "6 months validity",
      ],
    },
  ];

// Enroll Now click handler
const handleEnroll = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

// Browse All CAIIB Courses click handler
const handleBrowseCourses = () => {
  window.open(
    "https://www.myonlineprep.com/exam/course/caiib",
    "_blank",
    "noopener,noreferrer"
  );
};

  return (
    <section
      id="enroll-section"
      className="enroll-section-container"
    >
      {/* Header */}
      <div className="enroll-header">
        <h2 className="enroll-title">
          Choose your CAIIB{" "}
          <span className="highlight-text">Package</span>
        </h2>

        <p className="enroll-subtitle">
          Multiple packages available for the June 2026 and December 2026 exams.
          <br />
          Pick the plan that suits your prep style and budget.
        </p>

       
      </div>

      {/* Pricing Cards */}
      <div className="pricing-grid">
        {packages.map((item, index) => (
          <div
            className={`price-card ${
              item.type === "bestseller" ? "bestseller-card" : ""
            }`}
            key={index}
          >
            {/* Bestseller */}
            {item.type === "bestseller" && (
              <div className="bestseller-badge">
                <span>
                  <Star size={15} />
                </span>
                BESTSELLER
              </div>
            )}

            {/* Card Icon */}
            <div
              className={`card-top-icon card-icon-${index + 1} category-${
                index + 1
              }`}
            >
              <span>{item.icon}</span>
            </div>

            {/* Category */}
            <span
              className={`plan-category category-${index + 1}`}
            >
              {item.category}
            </span>

            {/* Title */}
            <h3 className="plan-title">
              {item.title}
            </h3>

            {/* Description */}
            <p className="plan-desc">
              {item.desc}
            </p>

            {/* Price */}
            <div className="price-box">
              <span className="current-price">
                {item.price}
              </span>

              <span className="original-price">
                {item.oldPrice}
              </span>
            </div>

            {/* Discount */}
            <div
              className={`discount-tag ${
                item.type === "bestseller"
                  ? "green-tag"
                  : "light-green-tag"
              }`}
            >
              {item.discount}
            </div>

            {/* Paper Tags */}
            {item.tags && (
              <div className="paper-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}

            {/* Features */}
            <ul className="features-list">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <span
                    className={`feature-check check-${index + 1}`}
                  >
                    ✓
                  </span>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Enroll Button */}
           <button
  type="button"
  className={`enroll-btn ${
    item.type === "bestseller"
      ? "gradient-btn"
      : `outline-btn outline-btn-${index + 1}`
  }`}
  onClick={() => handleEnroll(item.url)}
>
  <span className="button-icon">
    <Rocket size={20} />
  </span>

  <span>Enroll Now</span>
</button>
          </div>
        ))}
      </div>

      {/* Bottom Statistics */}
      <div className="enroll-bottom-bar">
        <div className="stat-item-erl">
          <div className="stat-icon stat-purple">
            <span>
              <Users size={24} />
            </span>
          </div>

          <div className="stat-content">
            <h4>1,00,000+</h4>
            <p>
              Happy Students
              <br />
              Trust CAIIB Preparation
            </p>
          </div>
        </div>

        <div className="stat-separator"></div>

        <div className="stat-item-erl">
          <div className="stat-icon stat-green">
            <span>
              <Check size={24} />
            </span>
          </div>

          <div className="stat-content">
            <h4>95%</h4>
            <p>
              Success Rate
              <br />
              For Our Learners
            </p>
          </div>
        </div>

        <div className="stat-separator"></div>

        <div className="stat-item-erl">
          <div className="stat-icon stat-orange">
            <span>
              <Star size={24} />
            </span>
          </div>

          <div className="stat-content">
            <h4>200+</h4>
            <p>
              Mock Tests
              <br />
              Designed by Experts
            </p>
          </div>
        </div>

        <div className="stat-separator"></div>

        <div className="stat-item-erl">
          <div className="stat-icon stat-blue">
            <span>
              <BookOpen size={24} />
            </span>
          </div>

          <div className="stat-content">
            <h4>Updated</h4>
            <p>
              As per Latest
              <br />
              IIBF Pattern
            </p>
          </div>
        </div>

        {/* Browse All Courses */}
        <button
  type="button"
  className="browse-all-btn"
  onClick={handleBrowseCourses}
>
  <span>Browse all CAIIB courses</span>
  <strong>→</strong>
</button>
      </div>
    </section>
  );
};

export default EnrollSection;