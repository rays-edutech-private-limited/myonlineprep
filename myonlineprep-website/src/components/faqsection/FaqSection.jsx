import React, { useState } from 'react';
import './FaqSection.css';

const FaqSection = () => {
  // State to handle accordion toggle (defaulting the first one to open like in the image)
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Have the JAIIB 2026 Nov Exam Dates been declared?",
      answer: "No, the JAIIB 2026 Nov Exam is to be declared soon.",
      colorClass: "badge-purple",
      iconBg: "icon-purple"
    },
    {
      question: "When will the JAIIB 2026 May Registration start?",
      answer: "Registration dates for the JAIIB 2026 May exam will be updated on the official website soon.",
      colorClass: "badge-orange",
      iconBg: "icon-orange"
    },
    {
      question: "What does JAIIB stand for?",
      answer: "JAIIB stands for Junior Associate of the Indian Institute of Banking and Finance.",
      colorClass: "badge-green",
      iconBg: "icon-green"
    },
    {
      question: "Who is the JAIIB exam intended for?",
      answer: "The JAIIB exam is primarily intended for ordinary members of the Indian Institute of Banking and Finance (IIBF) working in the banking and financial sector.",
      colorClass: "badge-blue",
      iconBg: "icon-blue"
    },
    {
      question: "What is the eligibility for the JAIIB exam?",
      answer: "Candidates must have passed the 10+2 examination or equivalent in any discipline. The institute may also allow candidates who have passed the diploma in Banking recognised by the Council.",
      colorClass: "badge-pink",
      iconBg: "icon-pink"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section-wrapper">
      {/* Top Header Section */}
      <div className="faq-header-container">
        
        <h2 className="faq-main-title">Frequently Asked Questions</h2>
        <div className="faq-underline"></div>
        <p className="faq-subtitle">Find quick answers to the most common questions about JAIIB 2026.</p>
      </div>

      {/* FAQ Accordion List */}
      <div className="faq-list-container">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div 
              key={index} 
              className={`faq-card ${faq.colorClass} ${isOpen ? 'active' : ''}`}
            >
              <div className="faq-question-bar" onClick={() => toggleAccordion(index)}>
                <div className="faq-left-content">
                  <span className={`faq-number ${faq.iconBg}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="faq-question-text">{faq.question}</h3>
                </div>
                <button className="faq-toggle-btn" aria-label="Toggle Answer">
                  {isOpen ? '▲' : '▼'}
                </button>
              </div>

              {isOpen && (
                <div className="faq-answer-bar">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {/* Bottom Support Banner */}
        <div className="faq-support-card">
          <div className="faq-support-left">
            <div className="faq-clipboard-icon"><i style={{color:"#7b1fa2"}} class="fa-solid fa-clipboard-list"></i></div>
            <div>
              <h4 className="support-heading">Can't find your answer?</h4>
              <p className="support-subtext">Our support team is here to help you with any queries.</p>
            </div>
          </div>
          <button className="contact-support-btn">
            🎧 Contact Support <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;