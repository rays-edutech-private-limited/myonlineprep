import React from "react";
import "./AllServices.css";
import allservice from "../../assets/img/allservice-ing.png"

import {
  FaChevronRight,
  FaVideo,
  FaChartBar,
  FaHeadset,
  FaCalendarAlt,
  FaMobileAlt,
  FaShieldAlt,
  FaUsers,
  FaStar,
  FaTrophy,
  FaBullseye,
} from "react-icons/fa";

const AllServices = () => {
  return (
    <section className="caiib-container">
      <div className="caiib-inner">

      

        {/* Heading */}
        <div className="heading-wrapper">
         

          <h1 className="main-heading">
            Everything you need
            
            to clear CAIIB{" "}
            <span className="heading-highlight">
              in one go
            </span>
          </h1>
        </div>

        <p className="sub-heading">
          Built by ex-bankers, for bankers. Every feature exists to raise
          your odds on exam day.
        </p>

        {/* Main Feature Area */}
        <div className="middle-grid">

          {/* Left Purple Card */}
          <div className="purple-card">

            <div className="purple-decoration purple-circle-one"></div>
          

            <div className="target-area">
              <img src={allservice} alt="" />
            </div>

            <div className="purple-content">
                <div className="ico-ser">
                    <FaBullseye />
                </div>
              <h2>200+</h2>

              <h3>
                Real exam
                <br />
                simulation tests
              </h3>

              <div className="purple-small-line"></div>

              <p>
                Full-length mocks that mirror the exact IIBF pattern,
                timing, and difficulty curve — so exam day feels like
                day 201.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="right-cards-col">

            {/* Video Card */}
            <div className="white-card">

              <div className="card-icon-box video-icon">
                <FaVideo />
              </div>

              <div className="card-text">
                <h4>
                  Bite-sized
                  <br />
                  expert videos
                </h4>

                <p>
                  150+ hours taught by ex-bankers,
                  structured for people studying
                  between shifts.
                </p>
              </div>

              
            </div>

            {/* Analytics Card */}
            <div className="white-card">

              <div className="card-icon-box analytics-icon">
                <FaChartBar />
              </div>

              <div className="card-text">
                <h4>
                  Smart performance
                  <br />
                  analytics
                </h4>

                <p>
                  Know your all-India rank and
                  weak chapters after every
                  single mock.
                </p>
              </div>

             
            </div>

          </div>
        </div>

        {/* Four Feature Cards */}
        <div className="bottom-cards-grid">

          {/* Card 1 */}
          <div className="feature-card-all feature-red">
            <div className="feat-icon red">
              <FaHeadset />
              
            </div>

            <div>
                <h4>
              24×7 doubt
              support
            </h4>

            <p>
              Stuck at 2 AM? Ex-bankers
              answer round the clock.
            </p>
            </div>

            <div className="card-line red-line"></div>
          </div>

          {/* Card 2 */}
          <div className="feature-card-all feature-yellow">
            <div className="feat-icon yellow">
              <FaCalendarAlt />
            </div>

            <div>
                <h4>
              Personalised
             
              study planner
            </h4>

            <p>
              A day-plan that fits around
              your banking job, automatically
              re-sequenced when you fall behind.
            </p>
            </div>

            <div className="card-line yellow-line"></div>
          </div>

          {/* Card 3 */}
          <div className="feature-card-all feature-blue">
            <div className="feat-icon blue">
              <FaMobileAlt />
            </div>

            <div>
                <h4>
              4.8★ rated
              
              mobile app
            </h4>

            <p>
              Turn commute time into study
              time. Fully usable offline.
            </p>
            </div>

            <div className="card-line blue-line"></div>
          </div>

          {/* Card 4 */}
          <div className="feature-card-all feature-purple">
            <div className="feat-icon purple">
              <FaShieldAlt />
            </div>

           <div>
             <h4>
              Trusted by
              
              thousands
            </h4>

            <p>
              Join thousands of bankers
              who cleared CAIIB with
              confidence.
            </p>
           </div>

            <div className="card-line purple-line"></div>
          </div>

        </div>

      
      </div>
    </section>
  );
};

export default AllServices;