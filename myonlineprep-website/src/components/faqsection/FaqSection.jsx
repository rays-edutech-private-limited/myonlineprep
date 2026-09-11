import React, { useState } from 'react';
import './FaqSection.css';

const FaqSection = () => {
  // State to handle accordion toggle (defaulting the first one to open like in the image)
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Have the CAIIB December 2026 exam dates been declared?",
      answer: "Yes. Compulsory papers are held on 6, 12, 13 and 20 December 2026, and the elective paper is on 27 December 2026. Registration runs 1–21 September 2026.",
      colorClass: "badge-purple",
      iconBg: "icon-purple"
    },
    {
      question: "Who is eligible to appear for CAIIB?",
      answer: "Candidates who have already cleared JAIIB and are regular members of the Indian Institute of Banking and Finance (IIBF) can register for CAIIB.",
      colorClass: "badge-orange",
      iconBg: "icon-orange"
    },
    {
      question: "How many papers does CAIIB have?",
      answer: "CAIIB has four compulsory papers — ABM, BFM, ABFM and BRBL — plus one elective paper chosen from five options.",
      colorClass: "badge-green",
      iconBg: "icon-green"
    },
    {
      question: "What is the passing criteria for CAIIB?",
      answer: "You need a minimum of 50/100 in each paper, or at least 45 in every paper with an overall aggregate of 50% in a single attempt.",
      colorClass: "badge-blue",
      iconBg: "icon-blue"
    },
    {
      question: "Which CAIIB elective should I choose?",
      answer: "Scores are consistently higher when the elective matches your actual job role — for example Risk Management for credit or compliance roles — rather than picking one purely for its reputation of being easy",
      colorClass: "badge-pink",
      iconBg: "icon-pink"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section-wrapper" id='faq-section'>
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

       
      </div>
    </section>
  );
};

export default FaqSection;