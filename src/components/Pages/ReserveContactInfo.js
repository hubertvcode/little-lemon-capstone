import React from 'react'
import { NavLink } from 'react-router-dom'


const ReserveContactInfo = () => {

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
          <h2>Now, we just need your information....</h2>
          <div className='form-container-contact'>
            <div className='form-instructions-contact'>
              <p>required * fields</p>
            </div>
            <form onSubmit={handleSubmit} className='form-body-contact'>
                <label htmlFor="fname">First name*
                <input type="text" id="fname" name="fname" />
                </label>
                <label htmlFor="lname">Last name *
                <input type="text" id="lname" name="lname" />
                </label>
                <label htmlFor="email">Email *
                <input type="email" id="email" pattern=".+@globex\.com" size="30" required />
                </label>
                <label htmlFor="phone">Phone *
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </label>
                <label htmlFor="special-request">Special requests (optional)
                <textarea id="special-request" name="special-request" rows="4" cols="50">
                Add your request
                </textarea>
                </label>

            </form>
          </div>
          <div className='btns-container'>
            <NavLink to="/reservations" className="btn-continue" >Back</NavLink>
            <NavLink to="/reservereview" className="btn-continue" >Continue</NavLink>
          </div>
        </div>

    </section>
  )
}

export default ReserveContactInfo
