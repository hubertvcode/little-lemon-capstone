import React from 'react'
import logo from "../images/Logo.png"
import { Link, NavLink } from "react-router-dom"
import Hamburger from './Hamburger'

function Nav() {

  const [hamburgerOpen, setHamburgerOpen] = React.useState(false)

  const toggleHamburger = () => {
      setHamburgerOpen(!hamburgerOpen)

  }


  return (
    <>
    <nav className='primary-nav'>

        <Link to="/" ><img className='logo-nav' src={logo} alt='Little Lemon Logo' /></Link>
        
        <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen}/>
        </div>

        <ul id="menu" className={hamburgerOpen ? "visible" : null}>
            <li><NavLink to="/" onClick={toggleHamburger}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleHamburger} >About</NavLink></li>
            <li><NavLink to="/menu" onClick={toggleHamburger} >Menu</NavLink></li>
            <li><NavLink to="/bookings" onClick={toggleHamburger} >Reservations</NavLink></li>
            <li><NavLink to="/orderonline" onClick={toggleHamburger} >Order Online</NavLink></li>
            <li><NavLink to="/login" onClick={toggleHamburger} >Login</NavLink></li>
        </ul>
    </nav>

    
</>
  )
}

export default Nav
