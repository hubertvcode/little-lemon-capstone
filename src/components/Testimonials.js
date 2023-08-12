import React from 'react'
import lenaPhoto from "../images/Lena.png"
import seanPhoto from "../images/Sean.png"
import marthaPhoto from "../images/Martha.png"
import robertPhoto from "../images/Robert.png"
import fourStarsHalf from "../images/Four and half stars rating.png"
import fiveStars from "../images/Five stars rating.png"

function Testimonials() {
  return (
    <div className='testimonials-section'>
      <h2>Testimonials</h2>
      <div className='testimonials-container'>
        <article>
          <h4>Lena</h4>
          <img className='guest-photo' src={lenaPhoto} alt='Photo of Lena' />
          <img className='stars-rating' src={fourStarsHalf} alt='Rating of Four and a half stars icon' />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        </article>
        <article>
          <h4>Sean</h4>
          <img className='guest-photo' src={seanPhoto} alt='Photo of Lena' />
          <img className='stars-rating' src={fiveStars} alt='Rating of Five stars icon'/>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        </article>
        <article>
          <h4>Martha</h4>
          <img className='guest-photo' src={marthaPhoto} alt='Photo of Lena' />
          <img className='stars-rating' src={fourStarsHalf} alt='Rating of Four and a half stars icon' />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        </article>
        <article>
          <h4>Robert</h4>
          <img className='guest-photo' src={robertPhoto} alt='Photo of Lena' />
          <img className='stars-rating' src={fiveStars} alt='Rating of Five stars icon' />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        </article>

      </div>
    </div>
  )
}

export default Testimonials
