import React, { useState } from 'react';
import "./KeyDetailsSection.css";
import { FaCalendarAlt, FaBook, FaFileAlt, FaChevronRight, FaStar, FaClock, FaClipboardList, FaAward } from 'react-icons/fa';

const KeyDetailsSection = () => {
  // State to handle active tab: 'dates', 'subjects', or 'pattern'
  const [activeTab, setActiveTab] = useState('dates');

  return (
    <div className="key-details-container" id="exam-infos">
      {/* Header Section */}
      <div className="key-details-header">
        <h2>CAIIB - <span>All Key Details</span></h2>
        <p>Exam dates, subject syllabus, fee structure — everything in one place.</p>
      </div>

      {/* Tabs Section */}
      <div className="key-details-tabs">
        <button 
          className={`tab-btn ${activeTab === 'dates' ? 'active' : ''}`}
          onClick={() => setActiveTab('dates')}
        >
          <FaCalendarAlt /> Exam Dates
        </button>
        <button 
          className={`tab-btn ${activeTab === 'subjects' ? 'active' : ''}`}
          onClick={() => setActiveTab('subjects')}
        >
          <FaBook /> Subjects
        </button>
        <button 
          className={`tab-btn ${activeTab === 'pattern' ? 'active' : ''}`}
          onClick={() => setActiveTab('pattern')}
        >
          <FaFileAlt /> Fees & Pattern
        </button>
      </div>

      {/* Main Card Container */}
      <div className="key-details-card-wrapper">
        
        {/* CONDITIONAL RENDERING BASED ON ACTIVE TAB */}

        {/* 1. EXAM DATES TAB */}
        {activeTab === 'dates' && (
          <div className="tables-grid animate-fade">
            {/* Registration Table Card */}
            <div className="info-card">
              <div className="card-header purple-header">
                <FaCalendarAlt /> Registration — Dec 2026
              </div>
              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Period</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="icon-cell"><FaCalendarAlt /></span> 01 Sep – 07 Sep 2026</td>
                      <td><span className="badge normal">Normal fee</span></td>
                    </tr>
                    <tr>
                      <td><span className="icon-cell"><FaCalendarAlt /></span> 08 Sep – 14 Sep 2026</td>
                      <td><span className="badge extra">Normal + ₹500</span></td>
                    </tr>
                    <tr>
                      <td><span className="icon-cell"><FaCalendarAlt /></span> 15 Sep – 21 Sep 2026</td>
                      <td><span className="badge higher">Normal + ₹1000</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Exam Dates Table Card */}
            <div className="info-card">
              <div className="card-header purple-header">
                <FaCalendarAlt /> Exam dates — Dec 2026
              </div>
              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Paper</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="icon-cell"><FaCalendarAlt /></span> 08 Dec 2026</td>
                      <td className="paper-row">Advanced Bank Management (ABM) <FaChevronRight className="chevron" /></td>
                    </tr>
                    <tr>
                      <td><span className="icon-cell"><FaCalendarAlt /></span> 12 Dec 2026</td>
                      <td className="paper-row">Bank Financial Management (BFM) <FaChevronRight className="chevron" /></td>
                    </tr>
                    <tr>
                      <td><span className="icon-cell"><FaCalendarAlt /></span> 13 Dec 2026</td>
                      <td className="paper-row">Advanced Business & Financial Mgmt <FaChevronRight className="chevron" /></td>
                    </tr>
                    <tr>
                      <td><span className="icon-cell"><FaCalendarAlt /></span> 20 Dec 2026</td>
                      <td className="paper-row">Banking Regulations & Business Laws <FaChevronRight className="chevron" /></td>
                    </tr>
                    <tr>
                      <td><span className="icon-cell"><FaCalendarAlt /></span> 27 Dec 2026</td>
                      <td className="paper-row">Elective paper <FaChevronRight className="chevron" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 2. SUBJECTS TAB */}
        {activeTab === 'subjects' && (
          <div className="tables-grid animate-fade">
            <div className="info-card full-width">
              <div className="card-header purple-header">
                <FaBook /> CAIIB Compulsory & Elective Subjects
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
                    <tr>
                      <td><span className="badge normal">Compulsory</span></td>
                      <td className="paper-row">Advanced Bank Management (ABM) <FaChevronRight className="chevron" /></td>
                    </tr>
                    <tr>
                      <td><span className="badge normal">Compulsory</span></td>
                      <td className="paper-row">Bank Financial Management (BFM) <FaChevronRight className="chevron" /></td>
                    </tr>
                    <tr>
                      <td><span className="badge normal">Compulsory</span></td>
                      <td className="paper-row">Advanced Business & Financial Management (ABFM) <FaChevronRight className="chevron" /></td>
                    </tr>
                    <tr>
                      <td><span className="badge normal">Compulsory</span></td>
                      <td className="paper-row">Banking Regulations and Business Laws (BRBL) <FaChevronRight className="chevron" /></td>
                    </tr>
                    <tr>
                      <td><span className="badge extra">Elective</span></td>
                      <td className="paper-row">Co-operative Banking, Rural Banking, etc. (Any One) <FaChevronRight className="chevron" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 3. FEES & PATTERN TAB */}
        {activeTab === 'pattern' && (
          <div className="tables-grid animate-fade">
            <div className="info-card">
              <div className="card-header purple-header">
                <FaFileAlt /> Exam Pattern Structure
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
                      <td><strong>Mode of Exam</strong></td>
                      <td>Online (Computer Based Test)</td>
                    </tr>
                    <tr>
                      <td><strong>Questions</strong></td>
                      <td>100 Multiple Choice Questions (MCQs)</td>
                    </tr>
                    <tr>
                      <td><strong>Total Marks</strong></td>
                      <td>100 Marks per Paper</td>
                    </tr>
                    <tr>
                      <td><strong>Passing Criteria</strong></td>
                      <td>Minimum 50 marks out of 100</td>
                    </tr>
                    <tr>
                      <td><strong>Negative Marking</strong></td>
                      <td>No Negative Marking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="info-card">
              <div className="card-header purple-header">
                <FaFileAlt /> Fee Structure Summary
              </div>
              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Attempt Type</th>
                      <th>Exam Fee (Approx.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>First Attempt / Normal Period</td>
                      <td>As per IIBF Guidelines</td>
                    </tr>
                    <tr>
                      <td>Extended Period (1st Week)</td>
                      <td>Normal Fee + ₹500</td>
                    </tr>
                    <tr>
                      <td>Extended Period (2nd Week)</td>
                      <td>Normal Fee + ₹1000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Feature Footer */}
        <div className="features-footer">
          <div className="feature-item">
            <div className="feature-icon yellow-bg"><FaStar /></div>
            <div>
              <h4>All in One Place</h4>
              <p>Dates, syllabus, fees & pattern — everything here</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon green-bg"><FaClock /></div>
            <div>
              <h4>Plan Smart</h4>
              <p>Stay ahead with important dates & deadlines</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon orange-bg"><FaClipboardList /></div>
            <div>
              <h4>Exam Ready</h4>
              <p>Know the subjects & papers to prepare better</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon blue-bg"><FaAward /></div>
            <div>
              <h4>Achieve More</h4>
              <p>Right information today, success tomorrow!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeyDetailsSection;