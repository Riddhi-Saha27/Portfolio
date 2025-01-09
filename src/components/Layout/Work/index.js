import React, { useState, useEffect } from "react";
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const workExperience = [
    {
      id: 1,
      company: "Rocket Technologies, GSU",
      period: "Jan 2024 - Present",
      details: `• Engineered an open-source rocket engine design platform using React and Material-UI, implementing CRUD operations for
                  engine parameters and configurations, hosted on AWS S3 with CloudFront CDN, enabling engineers to analyze and visualize
                  rocket engine parameters with 95% accuracy<br /><br />
                •  Architected serverless backend infrastructure using Node.js/Express with AWS Lambda and API Gateway, implementing
                   RESTful APIs that seamlessly integrate with a Python computational engine for precise rocket motor calculations.<br /><br />
                • Developed an automated data pipeline to extract and process material specifications from NASA databases, implementing efficient
                  data modeling in Amazon DynamoDB, resulting in a comprehensive database of 1000+ aerospace materials<br /><br />
                • Integrated Fusion360 API for dynamic 3D visualization, enabling real-time rendering of rocket engine components with
                  parametric modeling.`,
    },
    {
      id: 2,
      company: "Rocket Technologies, GSU",
      period: "Jan 2024 - Present",
      details: `• Designed flight software using C++ to interface with an MPU6050 and log data to a SD Card.<br /><br />
              • Performed data smoothing algorithms to enhance accuracy of recorded accelerometer data, ensuring reliable data collection and storage for flight analysis.<br /><br />
              • Implemented data acquisition and logging from BMP280 sensor to flash memory, establishing accurate temperature and pressure readings at specified intervals.<br /><br />
              • Designed and developed a real-time data transmission system with nRF24 to send sensor data to a ground station, facilitating immediate monitoring and analysis.`,
    },
    {
      id: 3,
      company: "Max Hospital Limited",
      period: "May 2023 - Aug 2023",
      details: ` • Engineered and deployed RESTful microservices using Spring Boot and Spring Data JPA, implementing comprehensive
                  APIs for patient record management, appointment scheduling, and test result tracking, resulting in 30% faster response times.<br /><br />
                • Architected a high-performance PostgreSQL database utilizing table partitioning, materialized views, and optimized indexing
                  strategies to efficiently manage 2000+ daily patient records, reducing data retrieval latency by 40% and implementing automated
                  backup procedures<br /><br />
                • Orchestrated cloud infrastructure using AWS services, integrating S3 with lifecycle policies for medical document storage, Lambda
                  for automated patient notifications, and CloudWatch for real-time system monitoring, reducing operational costs by 25%<br /><br />
                • Implemented enterprise-grade security using Spring Security with JWT and OAuth 2.0, establishing role-based access control,
                  ensuring robust data privacy`,
    },
    {
      id: 4,
      company: "RISE in Computing CIC Tutor",
      period: "Aug 2024 - Present",
      details: `• Provide academic support and tutoring to students in Introductory Computer Science 1 (CS 1301) and Computer Science 2 (CS 1302) courses.<br /><br />
              • Assist students in understanding core programming concepts, including object-oriented programming, data structures, algorithms, and problem-solving techniques.`,
    }
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleIndicatorClick = (event, id) => {
    event.stopPropagation();
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <div className="container work-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
            idx={15}
          />
        </h1>
        
        <div className="work-cards">
          {workExperience.map((work) => (
            <div 
              key={work.id} 
              className={`work-card ${expandedCard === work.id ? 'expanded' : ''}`}
              onClick={() => handleCardClick(work.id)}
            >
              <div className="card-header">
                <h3 className="company-name">{work.company}</h3>
                <div 
                  className={`status-indicator ${expandedCard === work.id ? 'inactive' : 'active'}`} 
                  onClick={(event) => handleIndicatorClick(event, work.id)}
                />
              </div>
              <div className="card-content">
                <p className="period">{work.period}</p>
                <p className="click-instruction">Click for more</p>
                {expandedCard === work.id && <p className="details" dangerouslySetInnerHTML={{ __html: work.details }}></p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
