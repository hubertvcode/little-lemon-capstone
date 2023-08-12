import React from 'react'
import logowhite from "../images/Little Lemon logo white.png"

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <img className="logo-footer" src={logowhite} alt='Little Lemon Logo Footer' />
            <div className='footer-nav-container'>
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
                        <li><a href='/#'>Facebook</a></li>
                        <li><a href='/#'>Instagram</a></li>
                        <li><a href='/#'>Pinterest</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer
