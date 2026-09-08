import React from "react";
import "./StudyappSection.css";
import studimg from "../../assets/img/phone-imge.png";
import play from "../../assets/img/playstore.png"

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

              <div
  className="google-play-card"
  onClick={() =>
    window.open(
      "https://play.google.com/store/apps/details?id=com.mkn.elfemo.myonlineprep&hl=en_IN&gl=US&pli=1",
      "_blank",
      "noopener,noreferrer"
    )
  }
  style={{ cursor: "pointer" }}
>
  <img className="google-play-icon" src={play} alt="" />

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


      

      </div>
    </section>
  );
};

export default StudyappSection;