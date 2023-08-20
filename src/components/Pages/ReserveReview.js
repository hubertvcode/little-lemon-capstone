import React from 'react'
import { NavLink } from 'react-router-dom'


const ReserveReview = () => {

const handleSubmit = (e) => {
  e.preentDefault()
  console.log("Form submitted")

}

  return (
    <section className='reserve-section'>
        <div className='sub-header'>
          <h1>Reserve a Table</h1>
          <p>For more information please call us to 1-800-545 0000</p>
        </div>
        <div className='form-section'>
          <h2>Your are almost done...</h2>
          <div className='form-container'>
            <div className='form-instructions'>
              <p>Please check that all the information below is correct, 
                then click on the “Reserve” button.</p>
            </div>

          </div>
          <div className='btns-container'>
            <NavLink to="/reservecontactinfo" className="btn-continue" >Back</NavLink>
            <NavLink to="/reserveconfirmation" className="btn-continue" >Continue</NavLink>
          </div>
        </div>

    </section>
  )
}

export default ReserveReview
