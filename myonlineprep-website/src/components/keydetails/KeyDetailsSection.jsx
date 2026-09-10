
import React, { useState } from "react";
import "./KeyDetailsSection.css";

import {
  FaCalendarAlt,
  FaBook,
  FaFileAlt,
  FaChevronRight,
  FaStar,
  FaClock,
  FaClipboardList,
  FaAward,
  FaRupeeSign,
} from "react-icons/fa";

const KeyDetailsSection = () => {
  const [activeTab, setActiveTab] = useState("dates");

  return (
    <div className="key-details-container" id="exam-infos">

      {/* ================= HEADER ================= */}
      <div className="key-details-header">
        <h2>
          CAIIB - <span>All Key Details</span>
        </h2>

        <p>
          Exam schedule, registration dates, subjects, fees & exam pattern —
          everything in one place.
        </p>
      </div>

      {/* ================= TABS ================= */}
      <div className="key-details-tabs">

        <button
          className={`tab-btn ${
            activeTab === "dates" ? "active" : ""
          }`}
          onClick={() => setActiveTab("dates")}
        >
          <FaCalendarAlt />
          Exam Dates
        </button>

        <button
          className={`tab-btn ${
            activeTab === "subjects" ? "active" : ""
          }`}
          onClick={() => setActiveTab("subjects")}
        >
          <FaBook />
          Subjects
        </button>

        <button
          className={`tab-btn ${
            activeTab === "pattern" ? "active" : ""
          }`}
          onClick={() => setActiveTab("pattern")}
        >
          <FaFileAlt />
          Fees & Pattern
        </button>

      </div>

      {/* ================= MAIN CARD ================= */}
      <div className="key-details-card-wrapper">

        {/* =====================================================
            1. EXAM DATES TAB
        ====================================================== */}
        {activeTab === "dates" && (
          <div className="tables-grid animate-fade">

            {/* ================= SCHEDULE / REGISTRATION ================= */}
            <div className="info-card">

              <div className="card-header purple-header">
                <FaCalendarAlt />
                CAIIB Registration Schedule — March 2026
              </div>

              <div className="schedule-intro">
                <strong>Schedule for CAIIB (Certified Associate of IIB&F)</strong>

                <div className="schedule-years">
                  <span>March 2026</span>
                  <span>September 2026</span>
                </div>
              </div>

              <div className="table-responsive">

                <table className="custom-table">

                  <thead>
                    <tr>
                      <th>Registration Period</th>
                      <th>Fee</th>
                    </tr>
                  </thead>

                  <tbody>

                    {/* NORMAL REGISTRATION */}
                    <tr>
                      <td>
                        <span className="icon-cell">
                          <FaCalendarAlt />
                        </span>

                        <div>
                          <strong>
                            04-Mar-2026 to 10-Mar-2026
                          </strong>

                          <small className="table-subtitle">
                            Registration with Normal Fees
                          </small>
                        </div>
                      </td>

                      <td>
                        <span className="badge normal">
                          Normal Fee
                        </span>
                      </td>
                    </tr>

                    {/* EXTENDED REGISTRATION */}
                    <tr>
                      <td>
                        <span className="icon-cell">
                          <FaCalendarAlt />
                        </span>

                        <div>
                          <strong>
                            11-Mar-2026 to 17-Mar-2026
                          </strong>

                          <small className="table-subtitle">
                            Registration with Normal Exam Fees
                          </small>
                        </div>
                      </td>

                      <td>
                        <span className="badge extra">
                          + ₹100
                        </span>
                      </td>
                    </tr>

                    {/* FINAL REGISTRATION */}
                    <tr>
                      <td>
                        <span className="icon-cell">
                          <FaCalendarAlt />
                        </span>

                        <div>
                          <strong>
                            18-Mar-2026 to 24-Mar-2026
                          </strong>

                          <small className="table-subtitle">
                            Final Registration
                          </small>
                        </div>
                      </td>

                      <td>
                        <span className="badge higher">
                          + ₹200
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* ================= EXAM DATES ================= */}
            <div className="info-card">

              <div className="card-header purple-header">
                <FaCalendarAlt />
                Exam Dates — May & June 2026
              </div>

              <div className="table-responsive">

                <table className="custom-table">

                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Mode</th>
                      <th>Subject</th>
                    </tr>
                  </thead>

                  <tbody>

                    {/* ABM */}
                    <tr>
                      <td>
                        <span className="icon-cell">
                          <FaCalendarAlt />
                        </span>

                        31st May 2026
                      </td>

                      <td>
                        <span className="badge normal">
                          Online
                        </span>
                      </td>

                      <td className="paper-row">
                        Advanced Bank Management

                        <FaChevronRight className="chevron" />
                      </td>
                    </tr>

                    {/* BFM */}
                    <tr>
                      <td>
                        <span className="icon-cell">
                          <FaCalendarAlt />
                        </span>

                        07th June 2026
                      </td>

                      <td>
                        <span className="badge normal">
                          Online
                        </span>
                      </td>

                      <td className="paper-row">
                        Bank Financial Management

                        <FaChevronRight className="chevron" />
                      </td>
                    </tr>

                    {/* ABFM */}
                    <tr>
                      <td>
                        <span className="icon-cell">
                          <FaCalendarAlt />
                        </span>

                        13th June 2026
                      </td>

                      <td>
                        <span className="badge normal">
                          Online
                        </span>
                      </td>

                      <td className="paper-row">
                        Advanced Business & Financial Management

                        <FaChevronRight className="chevron" />
                      </td>
                    </tr>

                    {/* BRBL */}
                    <tr>
                      <td>
                        <span className="icon-cell">
                          <FaCalendarAlt />
                        </span>

                        14th June 2026
                      </td>

                      <td>
                        <span className="badge normal">
                          Online
                        </span>
                      </td>

                      <td className="paper-row">
                        Banking Regulations and Business Laws

                        <FaChevronRight className="chevron" />
                      </td>
                    </tr>

                    {/* ELECTIVE */}
                    <tr>
                      <td>
                        <span className="icon-cell">
                          <FaCalendarAlt />
                        </span>

                        21st June 2026
                      </td>

                      <td>
                        <span className="badge normal">
                          Online
                        </span>
                      </td>

                      <td className="paper-row elective-subjects">

                        <div>1. Rural Banking</div>

                        <div>
                          2. Human Resources Management
                        </div>

                        <div>
                          3. Information Technology & Digital Banking
                        </div>

                        <div>4. Risk Management</div>

                        <div>5. Central Banking</div>

                        <FaChevronRight className="chevron" />

                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>
        )}

        {/* =====================================================
            2. SUBJECTS TAB
        ====================================================== */}
        {activeTab === "subjects" && (
          <div className="tables-grid animate-fade">

            <div className="info-card full-width">

              <div className="card-header purple-header">
                <FaBook />
                CAIIB Compulsory & Elective Subjects
              </div>

              <div className="table-responsive">

                <table className="custom-table">

                  <thead>
                    <tr>
                      <th>Module Type</th>
                      <th>Subject Name</th>
                    </tr>
                  </thead>

                  <tbody>

                    {/* ABM */}
                    <tr>
                      <td>
                        <span className="badge normal">
                          Compulsory
                        </span>
                      </td>

                      <td className="paper-row">
                        Advanced Bank Management (ABM)
                        <FaChevronRight className="chevron" />
                      </td>
                    </tr>

                    {/* BFM */}
                    <tr>
                      <td>
                        <span className="badge normal">
                          Compulsory
                        </span>
                      </td>

                      <td className="paper-row">
                        Bank Financial Management (BFM)
                        <FaChevronRight className="chevron" />
                      </td>
                    </tr>

                    {/* ABFM */}
                    <tr>
                      <td>
                        <span className="badge normal">
                          Compulsory
                        </span>
                      </td>

                      <td className="paper-row">
                        Advanced Business & Financial Management (ABFM)
                        <FaChevronRight className="chevron" />
                      </td>
                    </tr>

                    {/* BRBL */}
                    <tr>
                      <td>
                        <span className="badge normal">
                          Compulsory
                        </span>
                      </td>

                      <td className="paper-row">
                        Banking Regulations and Business Laws (BRBL)
                        <FaChevronRight className="chevron" />
                      </td>
                    </tr>

                    {/* ELECTIVE */}
                    <tr>
                      <td>
                        <span className="badge extra">
                          Elective
                        </span>
                      </td>

                      <td className="paper-row elective-subjects">

                        <div>1. Rural Banking</div>

                        <div>
                          2. Human Resources Management
                        </div>

                        <div>
                          3. Information Technology & Digital Banking
                        </div>

                        <div>4. Risk Management</div>

                        <div>5. Central Banking</div>

                        <small>
                          Candidates have to select Any One Elective
                        </small>

                        <FaChevronRight className="chevron" />

                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>
        )}

        {/* =====================================================
            3. FEES & PATTERN TAB
        ====================================================== */}
        {activeTab === "pattern" && (
          <div className="tables-grid animate-fade">

            {/* ================= EXAM PATTERN ================= */}
            <div className="info-card">

              <div className="card-header purple-header">
                <FaFileAlt />
                Exam Pattern Structure
              </div>

              <div className="table-responsive">

                <table className="custom-table">

                  <thead>
                    <tr>
                      <th>Parameters</th>
                      <th>Details</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>
                        <strong>Exam Mode</strong>
                      </td>

                      <td>
                        Online
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Compulsory Subjects</strong>
                      </td>

                      <td>
                        4 Papers
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Elective Subject</strong>
                      </td>

                      <td>
                        Any One Elective
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Exam Session</strong>
                      </td>

                      <td>
                        May & June 2026
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Exam Mode</strong>
                      </td>

                      <td>
                        Online
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* ================= FEE STRUCTURE ================= */}
            <div className="info-card">

              <div className="card-header purple-header">
                <FaRupeeSign />
                Fee Structure — IIBF Members
              </div>

              <div className="table-responsive">

                <table className="custom-table">

                  <thead>
                    <tr>
                      <th>Attempt</th>
                      <th>Fee</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>
                        <strong>First</strong>
                      </td>

                      <td>
                        <span className="badge normal">
                          ₹5,000*
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Second</strong>
                      </td>

                      <td>
                        <span className="badge normal">
                          ₹1,300*
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Third</strong>
                      </td>

                      <td>
                        <span className="badge normal">
                          ₹1,300*
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Fourth</strong>
                      </td>

                      <td>
                        <span className="badge normal">
                          ₹1,300*
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Fifth</strong>
                      </td>

                      <td>
                        <span className="badge normal">
                          ₹1,300*
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

              <div className="fee-note">
                * Fee for IIBF Members as per the provided fee structure.
              </div>

            </div>

          </div>
        )}

        {/* =====================================================
            BOTTOM FEATURES
        ====================================================== */}
        <div className="features-footer">

          <div className="feature-item">

            <div className="feature-icon yellow-bg">
              <FaStar />
            </div>

            <div>
              <h4>All in One Place</h4>

              <p>
                Dates, subjects, fees & pattern — everything here
              </p>
            </div>

          </div>

          <div className="feature-item">

            <div className="feature-icon green-bg">
              <FaClock />
            </div>

            <div>
              <h4>Plan Smart</h4>

              <p>
                Stay ahead with important dates & deadlines
              </p>
            </div>

          </div>

          <div className="feature-item">

            <div className="feature-icon orange-bg">
              <FaClipboardList />
            </div>

            <div>
              <h4>Exam Ready</h4>

              <p>
                Know the subjects & papers to prepare better
              </p>
            </div>

          </div>

          <div className="feature-item">

            <div className="feature-icon blue-bg">
              <FaAward />
            </div>

            <div>
              <h4>Achieve More</h4>

              <p>
                Right information today, success tomorrow!
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default KeyDetailsSection;

