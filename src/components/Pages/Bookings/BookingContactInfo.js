import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { FormContext } from '../../BookingMainLayout';
import { NavLink } from 'react-router-dom'
import { inputsInfoData } from '../../InputsData';
import { checkboxData } from '../../InputsData';
import  FormInput from '../../FormInput'
import FormCheckbox from '../../FormCheckbox';


const BookingContactInfo = () => {

  const { 
    myFormData, 
    setMyFormData, 
    confOptions, 
    setConfOptions, 
    navigateToReview, 
    handleChange, 
    activate, 
    errorM} = useContext(FormContext);
  
  useEffect(() => {
    //Sets on first render the Email confirmation option as preselected when myFormData.emailOption is true
    if(myFormData.emailOption === true){
      setConfOptions({...confOptions, emailOption: "Email"})
    }
  },[])

  return (
    <section className='reserve-section'>

        <div className='form-section'>
          <h2>Now, we just need your information....</h2>
          <div className='form-container-contact'>
            <div className='form-instructions-contact'>
              <p>required *</p>
            </div>
            <form onSubmit={navigateToReview} className='form-body-contact'>
                 {inputsInfoData.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={myFormData[input.name]}
                    onChange={(e) => setMyFormData({...myFormData, [input.name]: e.target.value })}
                  />
                ))}

                <h4 className='contact-confirmation-title'>Please send me a confirmation via:</h4>
                {checkboxData.map((checkbox) => (
                  <FormCheckbox
                    key={checkbox.id}
                    {...checkbox}
                    checked={myFormData[checkbox.name]}
                    onChange={handleChange}
               
                  />
                ))}
                <div className='btns-container contact'>
                  {/* {!activate ? <NavLink  id='btn-continue-disabled' className="btn-continue disabled" >Continue</NavLink> :
                              <NavLink  id='btn-continue' to="/bookings/bookingreview" className="btn-continue contact" >Continue</NavLink>} */}
                              <button type='submit'  id='btn-continue' className={`btn-continue ${!activate? "disabled" : "contact"}`} disabled={!activate}  >Continue</button>
                              {/* <NavLink  id='btn-continue' to="/bookings/bookingreview" className="btn-continue contact" >Continue</NavLink> */}
                              <NavLink to="/bookings" className="btn-continue back" >Back</NavLink>
                </div>
              </form>
          </div>
        </div>

    </section>
  )
}

export default BookingContactInfo
