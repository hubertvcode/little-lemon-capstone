import React from 'react'
import chefsB from "../../images/Mario and Adrian b.jpg"
import chefsA from "../../images/Mario and Adrian A.jpg"

function AboutUs({location}) {

  const spacer = location? "section-spacer" : null

  return (
    <div className='aboutus-section'>
      { location !== "home" ?
          <div className='sub-header'>
            <h1>About Us</h1>
            <p>For more information please call us to 1-800-545 0000</p>
          </div> : null
      }

      <div className={`aboutus-container ${spacer}`}>
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. </p>
          <div className='aboutus-images-grid'>
            <div className='photo-container-1' >
              <img  className='photo-chefs-b' src={chefsA} alt='chefs' />
            </div>
            <div className='photo-container-2' >
              <img  className='photo-chefs-a' src={chefsB} alt='chefs 2' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutUs
