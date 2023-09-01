import React from 'react'
import heroPhoto from "../../images/restaurant food hifi.png"
import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero-section'>
        <div className='hero-container'>
            <div className='hero-text-container'>
              <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

              </div>
                <NavLink  to="/bookings" className='cta-reserve-table'>Reserve a Table</NavLink>
            </div>
            <img className='hero-photo'  src={heroPhoto} alt='Photo of a server showing a delicious Mediterranean dish' />
        </div>
    </div>
  )
}

export default Hero
