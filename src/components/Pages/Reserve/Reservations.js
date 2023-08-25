import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { FormContext } from '../../ReserveLayout';


const Reservations = () => {

  const { formData, setFormData} = useContext(FormContext);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
    console.log(formData)
    console.log(formData.time)

  }

  return (
    <>

        <div className='form-section'>
          <h2>Find a table for any occasion.</h2>
          <div className='form-container'>
            <div className='form-instructions'>
              <p>Please fill out all the required * fields
                to reserve a table.</p>
            </div>
            <form onSubmit={handleSubmit} className='form-body'>
                <label id='label-date' htmlFor="date" >  Date *
                <input 
                  id="date" 
                  type="date" 
                  name='date' 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})} 
                  
                  />                  
                </label>
                <label id='label-time' htmlFor="reserved-time">Time of Reservation *
                <input 
                  id="reserved-time"
                  type="time" 
                  name="time" 
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})} 
                  min="12:00" 
                  max="22:00" 
                   
                  />
                </label>
                <label id='label-diners' htmlFor="diners">Number of Diners *
                <select 
                  name="diners" 
                  id="diners"
                  value={formData.diners}
                  onChange={(e) => setFormData({...formData, diners: e.target.value})} 
                  >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4">5</option>
                  <option value="4">6</option>
                </select>
                </label>
                <label id='label-table' htmlFor="table-location">Table Location
                <select 
                  name="table-location" 
                  id="table-location"
                  value={formData.tableLocation}
                  onChange={(e) => setFormData({...formData, tableLocation: e.target.value})} 
                  >
                  <option value="No preference">No preference</option>
                  <option value="Inside">Inside</option>
                  <option value="Outside">Outside</option>
                </select>
                </label>
                <label id='label-special' htmlFor="special-occasion">Special occasion?
                <select 
                  name="special-occasion" 
                  id="special-occasion"
                  value={formData.occasion}
                  onChange={(e) => setFormData({...formData, occasion: e.target.value})} 
                  >
                  <option value="No special occasion">No special occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </select>
                </label>


                {/* <button type='submit'  className='btn-continue'></button> */}

            </form>
          </div>
          <div className='btns-container one'>
            <NavLink to="reservecontactinfo" type='submit' className="btn-continue one" >Continue</NavLink>
          </div>
        </div>

    </>
  )
}

export default Reservations
