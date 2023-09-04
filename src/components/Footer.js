import React from 'react'
import {
    faFacebook,

    faInstagram,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoWhite from "../images/Little Lemon logo white.png"
import logoColors from "../images/Little Lemon Logo colors.png"
import { useLocation, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'



const Footer = () => {
  
    // Getting the pathname the footer is shown (Home, Reserve, About, etc..)
    const location = useLocation();

    // Windos width in pixels.
    const currentWindowSize = 560; 

    // Windows Width tracking state
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
    

    // Conditional rendering of the footer logo and style, depending on the location pathname (Home, Reserve, About, etc..)
    const lemonLogo = (location.pathname === "/bookings" && windowWidth < currentWindowSize )|| 
                      (location.pathname === "/bookings/bookingcontactinfo" && windowWidth < currentWindowSize) || 
                      (location.pathname === "/bookings/bookingreview" && windowWidth < currentWindowSize )|| 
                      (location.pathname === "/bookings/bookingconfirmation" && windowWidth < currentWindowSize) ? logoColors : logoWhite

    const altStyle = (location.pathname === "/bookings" && windowWidth < currentWindowSize) || 
                      (location.pathname === "/bookings/bookingcontactinfo" && windowWidth < currentWindowSize) || 
                      (location.pathname === "/bookings/bookingreview" && windowWidth < currentWindowSize) || 
                      (location.pathname === "/bookings/bookingconfirmation" && windowWidth < currentWindowSize) ? "reserve-style" : null

  return (
    <footer>
        <div className={`footer-container  ${altStyle}`}>
             <img className="logo-footer" src={lemonLogo} alt='Little Lemon Logo Footer' />
          
            {/* <div className='footer-nav-container'> */}
                <nav className='secondary-nav'>
                    <h4>Navigation</h4>
                    <ul>
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/about" >About Us</NavLink></li>
                        <li><NavLink to="/menu" >Online Menu</NavLink></li>
                        <li><NavLink to="/bookings" >Reservations</NavLink></li>
                        <li><NavLink to="/orderonline" >Order Online</NavLink></li>
                        <li><NavLink to="/login" >Login</NavLink></li>
                    </ul>
                </nav>
                <div className='contact-info'>
                    <h4>Contact</h4>
                    <ul>
                        <li>2800 Flagler St Miami FL, 00000</li>
                        <li>1 800 545 0000</li>
                        <li><a href="mailto:littlelemon@mail.com">littlelemon@mail.com</a></li>
                    </ul>
                </div>
                <nav className='socialmedia-links'>
                    <h4>Social Media</h4>
                    <ul>
                        <li>
                          <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com'  target="_blank" rel="noopener noreferrer"  >
                          <FontAwesomeIcon icon={faInstagram} size="lg" /> 
                          </a>
                        </li>
                        <li>
                          <a href='https://www.youtube.com'  target="_blank" rel="noopener noreferrer"  >
                          <FontAwesomeIcon icon={faYoutube} size="lg" />
                          </a>
                        </li>
                    </ul>
                </nav>
            {/* </div> */}
        </div>
    </footer>
  )
}

export default Footer
