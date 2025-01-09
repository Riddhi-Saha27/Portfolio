import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [activeSection, setActiveSection] = useState('languages')

  const languages = [
    { name: 'Java', years: 3, color: '#f89820' },
    { name: 'Python', years: 3, color: '#ffd43b' },
    { name: 'HTML/CSS/JS', years: 3, color: '#4caf50' },
    { name: 'SQL', years: 2.5, color: '#9c27b0' },
    { name: 'C++', years: 1.5, color: '#333' },
    { name: 'PHP', years: 1, color: '#00add8' },
    { name: 'C', years: 1, color: '#2e7d32' },
  ]

  const frameworks = [
    { name: 'React', years: 2.5, color: '#61dafb' },
    { name: 'Node/Express', years: 2, color: '#68a063' },
    { name: 'Spring Boot', years: 2, color: '#6db33f' },
    { name: 'Pandas / NumPy / Matplotlib / Scikit-learn', years: 2, color: '#dd0031' },
  ]

  const tools = [
    { name: 'Git', years: 3, color: '#f34f29' },
    { name: 'AWS', years: 2.5, color: '#0db7ed' },
    { name: 'Postman', years: 1.5, color: '#d24939' },
    { name: 'Figma', years: 1, color: '#326ce5' },
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  const renderSkillBars = (skills) => (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-info">
            <span>{skill.name}: {skill.years} years</span>
          </div>
          <div className="skill-bar-container">
            <div
              className="skill-bar"
              style={{
                width: `${(skill.years / 3) * 100}%`,
                backgroundColor: skill.color || '#ffd700'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>

          <div className="skill-buttons">
            <button
              className={`skill-button ${activeSection === 'languages' ? 'active' : ''}`}
              onClick={() => setActiveSection('languages')}
            >
              LANGUAGES
            </button>
            <button
              className={`skill-button ${activeSection === 'frameworks' ? 'active' : ''}`}
              onClick={() => setActiveSection('frameworks')}
            >
              FRAMEWORKS/TECHNOLOGIES
            </button>
            <button
              className={`skill-button ${activeSection === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveSection('tools')}
            >
              DEVELOPMENT TOOLS
            </button>
          </div>

          {activeSection === 'languages' && renderSkillBars(languages)}
          {activeSection === 'frameworks' && renderSkillBars(frameworks)}
          {activeSection === 'tools' && renderSkillBars(tools)}

          
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About