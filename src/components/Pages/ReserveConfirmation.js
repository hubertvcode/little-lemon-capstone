import React from 'react'
import { NavLink } from 'react-router-dom'
import checkmark from '../../images/Checkmark.svg'


const ReserveConfirmation = () => {

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
          <div className='confirmation-container'>
            <h2>You have successfully reserved your table! </h2>
            <img src={checkmark} alt="Checkmark symbol" />
            <p>Enjoy your visit to Little Lemon.</p>
          </div>

          <div className='btns-container-confirmation'>
            <NavLink to="/" className="btn-continue" >Back to Home</NavLink>
          </div>
        </div>
    </section>
  )
}

export default ReserveConfirmation
