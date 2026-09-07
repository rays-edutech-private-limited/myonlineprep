import React from "react";
import "./StudyappSection.css";
import studimg from "../../assets/img/call-img.png";

import {
  FaTrophy,
  FaDownload,
  FaClipboardCheck,
  FaComments,
  FaChartBar,
  FaGooglePlay,
  FaClock,
  FaBullseye,
  FaChartLine,
  FaQrcode,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";

const StudyappSection = () => {
  return (
    <section className="study-app-section">
      <div className="study-app-container">

        <div className="study-main-grid">

          {/* ================= LEFT CONTENT ================= */}
          <div className="study-left-content">

            {/* Badge */}
            <div className="prep-badge">
              <FaTrophy />
              <span>#1 CAIIB Prep Companion</span>
            </div>

            {/* Heading */}
            <h1 className="study-main-title">
              Study Smarter
              <br />
              <span className="anywhere-text">Anywhere,</span>{" "}
              <span className="anytime-text">Anytime.</span>
            </h1>

            {/* Description */}
            <p className="study-description">
              Download the MyOnlinePrep app and carry your entire CAIIB
              preparation in your pocket. Attempt mock tests during lunch,
              watch lessons on your commute, and clear doubts on the go.
            </p>

            {/* Features */}
            <div className="study-features-grid">

              {/* Card 1 */}
              <div className="study-feature-card">
                <div className="study-feature-icon purple">
                  <FaDownload />
                  <span className="play-mini">▶</span>
                </div>

                <div className="study-feature-content">
                  <h3>Offline Video Downloads</h3>
                  <p>
                    Watch your favourite lessons without internet.
                  </p>
                  <div className="small-line purple-line"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="study-feature-card">
                <div className="study-feature-icon pink">
                  <FaClipboardCheck />
                </div>

                <div className="study-feature-content">
                  <h3>Mock Tests On-the-Go</h3>
                  <p>
                    300+ tests at your fingertips. Practice. Analyze. Improve.
                  </p>
                  <div className="small-line pink-line"></div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="study-feature-card">
                <div className="study-feature-icon blue">
                  <FaComments />
                </div>

                <div className="study-feature-content">
                  <h3>Instant Doubt Support</h3>
                  <p>
                    24×7 support from experts whenever you need.
                  </p>
                  <div className="small-line blue-line"></div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="study-feature-card">
                <div className="study-feature-icon green">
                  <FaChartBar />
                </div>

                <div className="study-feature-content">
                  <h3>Progress Dashboard</h3>
                  <p>
                    Track your accuracy, performance & rank.
                  </p>
                  <div className="small-line green-line"></div>
                </div>
              </div>

            </div>

            {/* Google Play + Rating */}
            <div className="study-store-rating">

              <div className="google-play-card">
                <FaGooglePlay className="google-play-icon" />

                <div>
                  <span>GET IT ON</span>
                  <strong>Google Play</strong>
                </div>
              </div>

              <div className="rating-divider"></div>

              <div className="rating-card">
                <div className="rating-stars">
                  <div className="rat-st">
                    ★★★★★
                  </div>
                  <div className="rat-rev">
                    <span>12,000+ reviews</span>
                  </div>
                </div>

                <div className="rating-info">
                  <strong>4.8/5.0</strong>
                  
                </div>
              </div>

            </div>

          </div>


          {/* ================= RIGHT CONTENT ================= */}
          <div className="study-right-content">

            {/* Decorative dotted background */}
            <div className="dots-decoration dots-one"></div>
            <div className="dots-decoration dots-two"></div>

            {/* Stars */}
            <div className="decor-star star-one">✦</div>
            <div className="decor-star star-two">✦</div>
            <div className="decor-star star-three">✦</div>

            {/* Paper Plane */}
            <div className="paper-plane">➤</div>

            {/* Purple Circle */}
            <div className="purple-glow-circle"></div>

            {/* Phone */}
            <div className="study-phone-wrapper">
              <img
                src={studimg}
                alt="CAIIB Study App"
                className="study-phone-image"
              />
            </div>

            
           

         

          </div>
        </div>


        {/* ================= BOTTOM BAR ================= */}
        <div className="study-bottom-bar">

          {/* Feature 1 */}
          <div className="bottom-feature">
            <div className="bottom-feature-icon purple-bottom">
              <FaClock />
            </div>

            <div>
              <h4>Save Time</h4>
              <p>Learn on the go<br />whenever you want.</p>
            </div>
          </div>

          <div className="bottom-divider"></div>

          {/* Feature 2 */}
          <div className="bottom-feature">
            <div className="bottom-feature-icon pink-bottom">
              <FaBullseye />
            </div>

            <div>
              <h4>Stay Consistent</h4>
              <p>Daily practice leads<br />to big results.</p>
            </div>
          </div>

          <div className="bottom-divider"></div>

          {/* Feature 3 */}
          <div className="bottom-feature">
            <div className="bottom-feature-icon blue-bottom">
              <FaChartLine />
            </div>

            <div>
              <h4>Track & Improve</h4>
              <p>Smart analytics to<br />boost your score.</p>
            </div>
          </div>

          {/* QR */}
          <div className="qr-section">
            <div className="qr-code">
              <FaQrcode />
            </div>

            <div className="qr-text">
              <span>Scan to</span>
              <strong>Download<br />Now!</strong>
            </div>
          </div>

        </div>


        {/* ================= BOTTOM BANNER ================= */}
        <div className="study-bottom-banner">
          <span>Prepare Smart. Practice Better. Achieve More.</span>
          <FaRocket />
        </div>

      </div>
    </section>
  );
};

export default StudyappSection;