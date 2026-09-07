import React from 'react'
import "./ArticleSection.css"
import artimg1 from "../../assets/img/artical-img1.jpeg"
import artimg2 from "../../assets/img/artical-gal2.jpeg"
import { FaBookOpen, FaQuestionCircle, FaStickyNote, FaBullseye, FaChevronRight } from 'react-icons/fa'

const ArticleSection = () => {
  return (
    <div className="article-container">
      {/* Header */}
      <div className="article-header">
        <span className="badge-top">★ Learn. Practice. Excel ★</span>
        <h2>Articles</h2>
        <p>Get exam-ready with concepts, questions and study notes as per the latest pattern</p>
      </div>

      {/* Cards Wrapper */}
      <div className="cards-wrapper">
        
        {/* Purple Card */}
        <div className="article-card purple-theme">
          <div className="card-top-content">
            <div className="left-content">
              <span className="brand-logo">My<strong>Online</strong>prep</span>
              <span className="paper-badge">JAIIB • PAPER 1</span>
              <h3>IE & IFS Most Important Topics <br />for the JAIIB Exam</h3>
              <div className="underline"></div>
            </div>
            <div className="right-illustration">
              <div className="clipboard purple-board">
                <img src={artimg1} alt="" />
              </div>
              
            </div>
          </div>

          {/* Features Row */}
          <div className="features-row">
            <div className="feature-item">
              <FaBookOpen className="f-icon purple-text" />
              <div>
                <strong>Concepts</strong>
                <span>Easy to Understand</span>
              </div>
            </div>
            <div className="feature-item">
              <FaQuestionCircle className="f-icon purple-text" />
              <div>
                <strong>Important Questions</strong>
                <span>Exam Pattern Based</span>
              </div>
            </div>
            <div className="feature-item">
              <FaStickyNote className="f-icon purple-text" />
              <div>
                <strong>Study Notes</strong>
                <span>Quick Revision</span>
              </div>
            </div>
            <div className="feature-item">
              <FaBullseye className="f-icon purple-text" />
              <div>
                <strong>Exam Focused</strong>
                <span>Score Better</span>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="card-bottom-banner">
            <div className="banner-icon-box">
              <FaBookOpen />
            </div>
            <div className="banner-text">
              <h4>IE And IFS Most Important Topics For The JAIIB Exam</h4>
              <p>IE & IFS Most Important Topics For The JAIIB Exam, Module-Wise Weightage, What To Study And What To Skip, Plus A Smart Strategy To Clear The Paper On Your First Attempt.</p>
            </div>
            <button className="arrow-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Blue Card */}
        <div className="article-card blue-theme">
          <div className="card-top-content">
            <div className="left-content">
              <span className="brand-logo">My<strong>Online</strong>prep</span>
              <span className="paper-badge">JAIIB • PAPER 1</span>
              <h3>IE & IFS Most Important Topics <br />for the JAIIB Exam</h3>
              <div className="underline"></div>
            </div>
            <div className="right-illustration">
              <div className="clipboard blue-board">
               <img src={artimg2} alt="" />
              </div>
            </div>
          </div>

          {/* Features Row */}
          <div className="features-row">
            <div className="feature-item">
              <FaBookOpen className="f-icon blue-text" />
              <div>
                <strong>Concepts</strong>
                <span>Easy to Understand</span>
              </div>
            </div>
            <div className="feature-item">
              <FaQuestionCircle className="f-icon blue-text" />
              <div>
                <strong>Important Questions</strong>
                <span>Exam Pattern Based</span>
              </div>
            </div>
            <div className="feature-item">
              <FaStickyNote className="f-icon blue-text" />
              <div>
                <strong>Study Notes</strong>
                <span>Quick Revision</span>
              </div>
            </div>
            <div className="feature-item">
              <FaBullseye className="f-icon blue-text" />
              <div>
                <strong>Exam Focused</strong>
                <span>Score Better</span>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="card-bottom-banner">
            <div className="banner-icon-box">
              <FaBookOpen />
            </div>
            <div className="banner-text">
              <h4>IE And IFS Most Important Topics For The JAIIB Exam</h4>
              <p>IE & IFS Most Important Topics For The JAIIB Exam, Module-Wise Weightage, What To Study And What To Skip, Plus A Smart Strategy To Clear The Paper On Your First Attempt.</p>
            </div>
            <button className="arrow-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ArticleSection