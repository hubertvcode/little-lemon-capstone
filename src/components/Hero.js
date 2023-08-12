import React from 'react'
import heroPhoto from "../images/restaurant food hifi.png"

function Hero() {
  return (
    <div className='hero-section'>
        <div className='hero-container'>
            <div className='hero-text-container'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <button >Reserve a Table</button>

            <img className='hero-photo'  src={heroPhoto} alt='Photo of a server showing a delicious Mediterranean dish' />

        </div>
    </div>
  )
}

export default Hero
