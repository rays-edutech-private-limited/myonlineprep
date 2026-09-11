import React, { useEffect, useState } from "react";
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

// API URL yahan apna actual endpoint lagayein
const API_URL = "YOUR_API_URL_HERE";

const KeyDetailsSection = () => {
  const [activeTab, setActiveTab] = useState("dates");

  // ================= API DATA =================
  const [keyDetails, setKeyDetails] = useState({
    registration: [
      {
        date: "Registration dates will be notified soon.",
        description: "Registration with Normal Fees",
        fee: "Normal Fee",
        feeClass: "normal",
      },
      {
        date: "Registration dates will be notified soon.",
        description:
          "Registration with Normal Exam Fees plus Rs. 100/-",
        fee: "+ ₹100",
        feeClass: "extra",
      },
      {
        date: "Registration dates will be notified soon.",
        description:
          "Registration with Normal Exam Fees plus Rs. 200/-",
        fee: "+ ₹200",
        feeClass: "higher",
      },
    ],

    examDates: [
      {
        date: "06th Dec 2026",
        mode: "Online",
        subject: "Advanced Bank Management",
      },
      {
        date: "12th Dec 2026",
        mode: "Online",
        subject: "Bank Financial Management",
      },
      {
        date: "13th Dec 2026",
        mode: "Online",
        subject:
          "Advance Business & Financial Management",
      },
      {
        date: "20th Dec 2026",
        mode: "Online",
        subject:
          "Banking Regulations and Business Laws",
      },
      {
        date: "27th Dec 2026",
        mode: "Online",
        subject: [
          "Rural Banking",
          "Human Resources Management",
          "Information Technology & Digital Banking",
          "Risk Management",
          "Central Banking",
        ],
      },
    ],

    subjects: {
      compulsory: [
        "Advanced Bank Management (ABM)",
        "Bank Financial Management (BFM)",
        "Advanced Business & Financial Management (ABFM)",
        "Banking Regulations and Business Laws (BRBL)",
      ],
      elective: [
        "Rural Banking",
        "Human Resources Management",
        "Information Technology & Digital Banking",
        "Risk Management",
        "Central Banking",
      ],
    },

    fees: [
      {
        attempt: "First",
        fee: "₹5,000*",
      },
      {
        attempt: "Second",
        fee: "₹1,300*",
      },
      {
        attempt: "Third",
        fee: "₹1,300*",
      },
      {
        attempt: "Fourth",
        fee: "₹1,300*",
      },
      {
        attempt: "Fifth",
        fee: "₹1,300*",
      },
    ],
  });

  const [loading, setLoading] = useState(false);

  // ================= API CALL =================
  useEffect(() => {
    const getKeyDetails = async () => {
      try {
        setLoading(true);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch key details");
        }

        const result = await response.json();

        console.log("Key Details API Response:", result);

        /*
          Yahan API ke response ke according mapping karenge.

          Example:

          setKeyDetails({
            registration: result.registration,
            examDates: result.exam_dates,
            subjects: result.subjects,
            fees: result.fees,
          });
        */

        setLoading(false);
      } catch (error) {
        console.error(
          "Key Details API Error:",
          error
        );

        setLoading(false);
      }
    };

    getKeyDetails();
  }, []);

  return (
    <div
      className="key-details-container"
      id="exam-infos"
    >

      {/* ================= HEADER ================= */}
      <div className="key-details-header">
        <h2>
          CAIIB - <span>All Key Details</span>
        </h2>

        <p>
          Exam schedule, registration dates, subjects,
          fees & exam pattern — everything in one place.
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

            {/* ================= REGISTRATION ================= */}
            <div className="info-card">

              <div className="card-header purple-header">
                <FaCalendarAlt />
                CAIIB Registration Schedule — September 2026
              </div>

              <div className="schedule-intro">
                <strong>
                  Schedule for CAIIB
                  (Certified Associate of IIB&F)
                </strong>

                <div className="schedule-years">
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

                    {keyDetails.registration.map(
                      (item, index) => (
                        <tr key={index}>

                          <td>
                            <span className="icon-cell">
                              <FaCalendarAlt />
                            </span>

                            <div>

                              <strong>
                                {item.date}
                              </strong>

                              <small className="table-subtitle">
                                {item.description}
                              </small>

                            </div>
                          </td>

                          <td>
                            <span
                              className={`badge ${item.feeClass}`}
                            >
                              {item.fee}
                            </span>
                          </td>

                        </tr>
                      )
                    )}

                  </tbody>

                </table>

              </div>

            </div>

            {/* ================= EXAM DATES ================= */}
            <div className="info-card">

              <div className="card-header purple-header">
                <FaCalendarAlt />
                Exam Dates — December 2026
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

                    {keyDetails.examDates.map(
                      (item, index) => (
                        <tr key={index}>

                          <td>
                            <span className="icon-cell">
                              <FaCalendarAlt />
                            </span>

                            {item.date}
                          </td>

                          <td>
                            <span className="badge normal">
                              {item.mode}
                            </span>
                          </td>

                          <td
                            className={`paper-row ${
                              Array.isArray(
                                item.subject
                              )
                                ? "elective-subjects"
                                : ""
                            }`}
                          >

                            {Array.isArray(
                              item.subject
                            ) ? (
                              item.subject.map(
                                (
                                  subject,
                                  subjectIndex
                                ) => (
                                  <div
                                    key={subjectIndex}
                                  >
                                    {subjectIndex + 1}.{" "}
                                    {subject}
                                  </div>
                                )
                              )
                            ) : (
                              item.subject
                            )}

                            <FaChevronRight className="chevron" />

                          </td>

                        </tr>
                      )
                    )}

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

                    {keyDetails.subjects.compulsory.map(
                      (subject, index) => (
                        <tr key={index}>

                          <td>
                            <span className="badge normal">
                              Compulsory
                            </span>
                          </td>

                          <td className="paper-row">
                            {subject}
                            <FaChevronRight className="chevron" />
                          </td>

                        </tr>
                      )
                    )}

                    {/* ELECTIVE */}
                    <tr>

                      <td>
                        <span className="badge extra">
                          Elective
                        </span>
                      </td>

                      <td className="paper-row elective-subjects">

                        {keyDetails.subjects.elective.map(
                          (subject, index) => (
                            <div key={index}>
                              {index + 1}. {subject}
                            </div>
                          )
                        )}

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
                      <td>Online</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Compulsory Subjects</strong>
                      </td>
                      <td>4 Papers</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Elective Subject</strong>
                      </td>
                      <td>Any One Elective</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Exam Session</strong>
                      </td>
                      <td>December 2026</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Exam Mode</strong>
                      </td>
                      <td>Online</td>
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

                    {keyDetails.fees.map(
                      (item, index) => (
                        <tr key={index}>

                          <td>
                            <strong>
                              {item.attempt}
                            </strong>
                          </td>

                          <td>
                            <span className="badge normal">
                              {item.fee}
                            </span>
                          </td>

                        </tr>
                      )
                    )}

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