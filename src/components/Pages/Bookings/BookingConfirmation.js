import React from 'react'
import { NavLink } from 'react-router-dom'
import checkmark from '../../../images/Checkmark.svg'


const BookingConfirmation = () => {


  return (
    <>
        <div className='form-confirmation-section'>
          <div className='confirmation-container'>
            <div className='conf-message-container'>
              <h2>You have successfully reserved your table! </h2>
              <img src={checkmark} alt="Checkmark symbol" />
              <p>Enjoy your visit to Little Lemon.</p>
            </div>
            <div className='btns-container-confirmation'>
              <NavLink to="/" className="btn-continue confirmation" >Back to Home</NavLink>
            </div>
          </div>

        </div>
    </>
  )
}

export default BookingConfirmation
