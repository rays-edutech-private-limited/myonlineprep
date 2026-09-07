import React from 'react'
import HeroSection from './components/herosection/HeroSection'
import ServiceSection from './components/servicesection/ServiceSection'
import AllServices from './components/allsercice/AllServices'
import EnrollSection from './components/enrollsection/EnrollSection'
import ReviewSection from './components/reviewSection/ReviewSection'
import KeyDetailsSection from './components/keydetails/KeyDetailsSection'
import StudyappSection from './components/studyappsection/StudyappSection'
import ArticleSection from './components/articleSection/ArticleSection'
import FaqSection from './components/faqsection/FaqSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceSection/>
      <AllServices/>
      <EnrollSection/>
      <ReviewSection/>
      <KeyDetailsSection/>
      <StudyappSection/>
      <ArticleSection/>
      <FaqSection/>
    </div>
  )
}

export default Home
