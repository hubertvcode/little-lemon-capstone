import React from 'react'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faEnvelope,
    faLocationDot,
    faPhone
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoWhite from "../images/Little Lemon logo white.png"
import logoColors from "../images/Little Lemon Logo colors.png"
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Footer = () => {

    const location = useLocation();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });
    
    const lemonLogo = location.pathname === "/reserve" && windowWidth < 560 || 
                      location.pathname === "/reserve/reservecontactinfo" && windowWidth < 560 || 
                      location.pathname === "/reserve/reservereview" && windowWidth < 560 || 
                      location.pathname === "/reserve/reserveconfirmation" && windowWidth < 560 ? logoColors : logoWhite

    const altStyle = location.pathname === "/reserve" && windowWidth < 560|| 
                      location.pathname === "/reserve/reservecontactinfo" && windowWidth < 560 || 
                      location.pathname === "/reserve/reservereview" && windowWidth < 560 || 
                      location.pathname === "/reserve/reserveconfirmation" && windowWidth < 560 ? "reserve-style" : null

  return (
    <footer>
        <div className={`footer-container  ${altStyle}`}>
            {/* <p>{windowWidth}</p> */}
            <img className="logo-footer" src={lemonLogo} alt='Little Lemon Logo Footer' />
          
            {/* <div className='footer-nav-container'> */}
                <nav className='secondary-nav'>
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href='/#'>Home</a></li>
                        <li><a href='/#'>About</a></li>
                        <li><a href='/#'>Menu</a></li>
                        <li><a href='/#'>Reservations</a></li>
                        <li><a href='/#'>Order Online</a></li>
                        <li><a href='/#'>Login</a></li>
                    </ul>
                </nav>
                <div className='contact-info'>
                    <h4>Contact</h4>
                    <ul>
                        <li>2800 Flagler St Miami FL, 00000</li>
                        <li>1 800 500 0000</li>
                        <li><a href="mailto:littlelemon@mail.com">littlelemon@mail.com</a></li>
                    </ul>
                </div>
                <nav className='socialmedia-links'>
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebook} size="lg" /></a></li>
                        <li><a href='/#'><FontAwesomeIcon icon={faInstagram} size="lg" /> </a></li>
                        <li><a href='/#'><FontAwesomeIcon icon={faYoutube} size="lg" /></a></li>
                    </ul>
                </nav>
            {/* </div> */}
        </div>
    </footer>
  )
}

export default Footer
