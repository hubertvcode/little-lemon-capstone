import React from 'react'
import { useContext } from 'react';
import { FormContext } from '../../ReserveLayout';
import { NavLink, redirect, useNavigate } from 'react-router-dom'


const ReserveReview = () => {

  const { formData, setFormData} = useContext(FormContext);
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
    console.log(formData)
    return navigate("/reserve/reserveconfirmation")

  }

  return (
    <section className='reserve-section'>

        <div className='form-section'>
          <h2>Your are almost done...</h2>
          <div className='form-container-review'>
          <p className='p-review'>Please review the information below</p>
          <h4>Reserved Date</h4>
          <p>{formData.date}</p>
          <h4>Reserved Time</h4>
          <p>{formData.time}</p>
          <h4>Numbert of Guests</h4>
          <p>{formData.diners}</p>
          <h4>Table Location</h4>
          <p>{formData.tableLocation}</p>
          <h4>Special Occasion</h4>
          <p>{formData.occasion}</p>
          <h4>Name</h4>
          <p>{formData.fname}</p>
          <h4>Last Name</h4>
          <p>{formData.lname}</p>
          <h4>Email</h4>
          <p>{formData.email}</p>
          <h4>Phone</h4>
          <p>{formData.phone}</p>
          <h4>Special Request</h4>
          <p>{formData.specialRequest}</p>

          <form onSubmit={handleSubmit} className='form-confirmation-options'>
            <h4>Please send me a confirmation via:</h4>
              <label htmlFor="email-option">Email
              <input 
              type="checkbox" 
              id="email-option" 
              name="email-option" 
              value={formData.emailOption}
              onChange={(e) => setFormData({...formData, emailOption: e.target.checked})} 
              />
              </label>
              <label className='text-option' htmlFor="text-option">Text
              <input 
              type="checkbox" 
              id="text-option" 
              name="text-option" 
              value={formData.textOption}
              onChange={(e) => setFormData({...formData, textOption: e.target.checked})} 
              />
              </label>
            </form>
          </div>
          <div className='btns-container'>
            <button type='submit' onClick={handleSubmit} className='btn-continue'>Reserve</button>
            <NavLink to="/reserve/reservecontactinfo" className="btn-continue back" >Back</NavLink>
            {/* <NavLink to="/reserve/reserveconfirmation" className="btn-continue" >Reserve</NavLink> */}
          </div>
        </div>

    </section>
  )
}

export default ReserveReview
