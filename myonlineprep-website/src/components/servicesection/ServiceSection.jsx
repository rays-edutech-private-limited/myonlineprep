import React from 'react';
import { 
  FaRegCheckCircle,
  FaRegCreditCard,
  FaRegLightbulb,
  FaRegThumbsUp, 
} from 'react-icons/fa';
import './ServiceSection.css';


const servicesData = [
  {
    icon: <FaRegCreditCard />,
     title: 'Choose your package',
    description:
      'Pick the combo, mock-only, or single elective plan. Get a personalised 60-day study plan.',
    gradientClass: "purple-grad",
    label: 'Enroll',
  },
  {
    icon: <FaRegLightbulb />,
     title: 'Learn from expert faculty',
    description:
      '150+ hours of HD lessons by ex-bankers. Pause, rewind, revisit anytime, on any device.',
    gradientClass: "pink-grad",
    label: 'Learn',
  },
  {
    icon:  <FaRegThumbsUp />,
    title: 'Practice & track progress',
    description:
      'Attempt 200+ chapter-wise and full-length mocks. Analytics show exactly where to focus.',
    gradientClass: "purple-grad",
    label: 'Practice',
  },
  {
    icon: <FaRegCheckCircle />,
     title: 'Walk in ready, at 60+',
    description:
      'Backed by a proven track record of 88,000+ successful selections.',
    gradientClass: "pink-grad",
    label: 'Clear',
  },

];

const ServiceSection = () => {
  return (
    <div className="service-section-container">
      <div className="service-grid">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <div className={`service-icon-wrapper ${service.gradientClass}`}>
              <div className="service-icon">
                {service.icon}
              </div>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
               {/* <div className={`ser-btn ${service.gradientClass}`}>{service.label}</div> */}
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;