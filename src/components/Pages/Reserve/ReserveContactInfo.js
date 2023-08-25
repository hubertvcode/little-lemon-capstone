import React from 'react'
import { useContext } from 'react';
import { FormContext } from '../../ReserveLayout';
import { NavLink } from 'react-router-dom'


const ReserveContactInfo = () => {

  const { formData, setFormData} = useContext(FormContext);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
    console.log(formData)
    console.log(formData.time)

  }

  return (
    <section className='reserve-section'>

        <div className='form-section'>
          <h2>Now, we just need your information....</h2>
          <div className='form-container-contact'>
            <div className='form-instructions-contact'>
              <p>required * fields</p>
            </div>
            <form onSubmit={handleSubmit} className='form-body-contact'>
                <label htmlFor="fname">First name*
                <input 
                type="text" 
                id="fname" 
                name="fname" 
                value={formData.fname}
                onChange={(e) => setFormData({...formData, fname: e.target.value})} 
                />
                </label>
                <label htmlFor="lname">Last name *
                <input 
                type="text" 
                id="lname" 
                name="lname" 
                value={formData.lname}
                onChange={(e) => setFormData({...formData, lname: e.target.value})} 

                />
                </label>
                <label htmlFor="email">Email *
                <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                pattern=".+@mail\.com" 
                size="30" 
                placeholder='example@example.com'
                required 
                />
                </label>
                <label htmlFor="phone">Phone *
                <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder='(___) -___-__ __'
                
                />
                </label>
                <label htmlFor="special-request">Special requests (optional)
                <textarea 
                id="special-request" 
                name="special-request" 
                value={formData.specialRequest}
                onChange={(e) => setFormData({...formData, specialRequest: e.target.value})} 
                rows="4" 
                cols="50">
                </textarea>
                </label>
                {/* <button type='submit'  className='btn-continue'></button> */}
            </form>
          </div>
          <div className='btns-container'>
            <NavLink to="/reserve/reservereview" className="btn-continue" >Continue</NavLink>
            <NavLink to="/reserve" className="btn-continue back" >Back</NavLink>
          </div>
        </div>

    </section>
  )
}

export default ReserveContactInfo
