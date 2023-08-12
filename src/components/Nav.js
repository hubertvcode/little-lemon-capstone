import React from 'react'
import logo from "../images/Logo.png"

function Nav() {
  return (
    <nav className='primary-nav'>

        <img className='logo-nav' src={logo} alt='Little Lemon Logo' />

        <ul>
            <li><a href='/#'>Home</a></li>
            <li><a href='/#'>About</a></li>
            <li><a href='/#'>Menu</a></li>
            <li><a href='/#'>Reservations</a></li>
            <li><a href='/#'>Order Online</a></li>
            <li><a href='/#'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav
