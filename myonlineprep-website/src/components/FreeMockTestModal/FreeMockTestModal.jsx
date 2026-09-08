import React, { useEffect, useState } from "react";
import "./FreeMockTestModal.css";
import play from "../../assets/img/playstore.png"



const FreeMockTestModal = ({
  isOpen,
  onClose,
  exam = "JAIIB",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    exam: exam,
  });

  /* =====================================================
     EXAM UPDATE
  ===================================================== */
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      exam,
    }));
  }, [exam]);

  /* =====================================================
     RESET FORM WHEN MODAL OPENS
  ===================================================== */
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        exam,
      });
    }
  }, [isOpen, exam]);

  /* =====================================================
     BODY SCROLL + ESC
  ===================================================== */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  /* =====================================================
     INPUT CHANGE
  ===================================================== */
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "");

      setFormData((prev) => ({
        ...prev,
        phone: onlyNumbers.slice(0, 10),
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =====================================================
     SUBMIT
  ===================================================== */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10 digit phone number.");
      return;
    }

    console.log("Mock Test Data:", formData);

    alert(
      `Proceeding to ${formData.exam} Free Mock Test`
    );

    // API / navigation yahan add kar sakte ho
  };

  /* =====================================================
     OVERLAY CLICK
  ===================================================== */
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="mock-test-overlay"
      onMouseDown={handleOverlayClick}
    >
      <div
        className="mock-test-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mock-test-title"
      >

        {/* =================================================
            HEADER
        ================================================= */}
        <div className="mock-test-header">

          <div className="mock-header-content">

            <div className="mock-header-icon">
              <i class="fa-solid fa-graduation-cap" ></i>
            </div>

            <div>
              <h2 id="mock-test-title">
                Start Your Free Mock Test
              </h2>

              <p>
                Practice • Prepare • Perform
              </p>
            </div>

          </div>

          <button
            type="button"
            className="mock-test-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span></span>
            <span></span>
          </button>

        </div>

        {/* =================================================
            BODY
        ================================================= */}
        <div className="mock-test-body">

          <div className="mock-welcome-box">

            

            <p className="mock-test-description">
              Fill the details below to attempt{" "}
              <strong>{formData.exam}</strong>{" "}
              Free Mock Test
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mock-test-form"
          >

            {/* NAME */}
            <div className="mock-input-group">

              <label htmlFor="mock-name">
                Full Name
              </label>

              <div className="mock-input-wrapper">
                <span className="mock-input-icon">
                  👤
                </span>

                <input
                  id="mock-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

            </div>

            {/* EMAIL */}
            <div className="mock-input-group">

              <label htmlFor="mock-email">
                Email Address
              </label>

              <div className="mock-input-wrapper">
                <span className="mock-input-icon">
                  ✉
                </span>

                <input
                  id="mock-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />
              </div>

            </div>

            {/* PHONE */}
            <div className="mock-input-group">

              <label htmlFor="mock-phone">
                Phone Number
              </label>

              <div className="mock-input-wrapper">

                <span className="mock-country-code">
                  +91
                </span>

                <span className="mock-divider"></span>

                <input
                  id="mock-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10 digit mobile number"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength="10"
                  required
                />

              </div>

            </div>

            {/* EXAM */}
            <div className="mock-input-group">

              <label htmlFor="mock-exam">
                Selected Exam
              </label>

              <div className="mock-input-wrapper mock-exam-wrapper">

                <span className="mock-input-icon">
                  📚
                </span>

                <input
                  id="mock-exam"
                  type="text"
                  value={formData.exam}
                  readOnly
                />

                <span className="mock-selected-badge">
                  Selected
                </span>

              </div>

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mock-proceed-btn"
            >
              <span>
                Proceed to {formData.exam} Mock Test
              </span>

              <span className="mock-arrow">
                →
              </span>
            </button>

          </form>

          {/* =================================================
              MOBILE APP
          ================================================= */}
       {/* =================================================
    MOBILE APP
================================================= */}
<div className="mock-mobile-section">

  <div className="mock-mobile-line">
    <span></span>

    <p>
      Or prepare on mobile
    </p>

    <span></span>
  </div>

  <a
    href="https://play.google.com/store/apps/details?id=com.mkn.elfemo.myonlineprep&hl=en_IN&gl=US&pli=1"
    className="google-play-btn"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Get it on Google Play"
  >

    <div className="google-play-icon">

     
       <img src={play} alt="" />
      

    </div>

    <div className="google-play-text">

      <small>
        GET IT ON
      </small>

      <strong>
        Google Play
      </strong>

    </div>

  </a>

</div>

        </div>

        {/* =================================================
            FOOTER
        ================================================= */}
        <div className="mock-test-footer">

          <span></span>

          Your information is safe & secure

        </div>

      </div>
    </div>
  );
};

export default FreeMockTestModal;