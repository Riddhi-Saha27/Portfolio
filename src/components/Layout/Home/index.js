import './index.scss';
import { Link } from 'react-router-dom';
import LogoTitle from '../../../assets/images/r.png';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    const nameArray = ['i', 'd', 'd', 'h', 'i']
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
      return () => clearTimeout(timeout)
    }, [])
  
    return (
      <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img
                src={LogoTitle}
                alt="JavaScript Developer Name, Web Developer Name"
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </h1>
            <h2>Computer Science Engineering, 2025, at Georgia State University</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Logo />
        </div>
        </>
    )
}

export default Home;
