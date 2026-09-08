import React from "react";


import HeroSection from "./components/herosection/HeroSection";
import ServiceSection from "./components/servicesection/ServiceSection";
import AllServices from "./components/allsercice/AllServices";
import EnrollSection from "./components/enrollsection/EnrollSection";
import ReviewSection from "./components/reviewSection/ReviewSection";
import KeyDetailsSection from "./components/keydetails/KeyDetailsSection";
import StudyappSection from "./components/studyappsection/StudyappSection";
import ArticleSection from "./components/articleSection/ArticleSection";
import FaqSection from "./components/faqsection/FaqSection";

const Home = () => {
  return (
    <div>

      

      {/* EXAM INFO */}
      <div id="exam-info">
        <HeroSection />
      </div>

      <ServiceSection />

      <AllServices />

      {/* COURSES */}
      <div id="enroll-section">
        <EnrollSection />
      </div>

      <ReviewSection />

      <KeyDetailsSection />

      <StudyappSection />

      {/* ARTICLES */}
      <div id="articles-section">
        <ArticleSection />
      </div>

      {/* FAQ */}
      <div id="faq-section">
        <FaqSection />
      </div>

    </div>
  );
};

export default Home;