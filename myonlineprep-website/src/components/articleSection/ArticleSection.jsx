import React from "react";
import "./ArticleSection.css";

import artimg1 from "../../assets/img/artical-img1.jpeg";
import artimg2 from "../../assets/img/artical-gal2.jpeg";
// Agar third image hai to yahan apni image import karein
// import artimg3 from "../../assets/img/artical-img3.jpeg";

import { FaArrowRight } from "react-icons/fa";

const articles = [
  {
    image: artimg1,
    category: "JAIIB • STRATEGY",
    title: "How to Prepare for JAIIB | Complete Paper-Wise Strategy",
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
    image: artimg1,
    category: "JAIIB • CAREER",
    title: "How Much Salary Increases After Passing JAIIB and CAIIB?",
    description:
      "A real SBI PO example breaking down basic pay, DA, HRA and the total monthly hike you can expect after clearing JAIIB and CAIIB.",
    date: "6th May 2026",
  },
];

const ArticleSection = () => {
  return (
    <section className="article-container" id="articles-section">
      
      {/* ================= HEADER ================= */}
      <div className="article-header">
        <h2>Articles</h2>

        <p>
          Get exam-ready with concepts, questions and study notes as per the
          latest CAIIB pattern.
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="articles-grid">
       {articles.map((article, index) => (
  <a
    href="https://www.myonlineprep.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="article-card"
    key={index}
  >
    {/* IMAGE */}
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

    {/* CONTENT */}
    <div className="article-content">
      <h3>{article.title}</h3>

      <p className="article-description">
        {article.description}
      </p>

      <div className="article-footer">
        <span className="article-date">
          {article.date}
        </span>

        <span className="article-arrow">
          <FaArrowRight />
        </span>
      </div>
    </div>
  </a>
))}
      </div>
    </section>
  );
};

export default ArticleSection;