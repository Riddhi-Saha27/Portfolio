import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../../assets/images/r1.png';
import LogoSubtitle from '../../../assets/images/Riddhi_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='riddhi' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' /> 
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' /> 
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="work-link" to='/work'>
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' /> 
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="portfolio-link" to='/portfolio'>
                <FontAwesomeIcon icon={faFolder} color='#4d4d4e' /> 
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' /> 
            </NavLink>  
             
        </nav>
        <ul>
            <li>
                <a
                    href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        color="#4d4d4e"
                        className="anchor-icon"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/bobangajicsm"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        color="#4d4d4e"
                        className="anchor-icon"
                    />
                </a>
            </li>
        </ul>
        
    </div>
);

export default Sidebar;