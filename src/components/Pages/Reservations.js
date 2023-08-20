import React from 'react'
import { NavLink } from 'react-router-dom'


const Reservations = () => {

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
          <h2>Find a table for any occasion.</h2>
          <div className='form-container'>
            <div className='form-instructions'>
              <p>Please fill out all the required * fields
                to reserve a table.</p>
            </div>
            <form onSubmit={handleSubmit} className='form-body'>
                <label id='label-date' htmlFor="date" >  Date *
                <input id="date" type="date" name='date' value="" />                  
                </label>
                <label id='label-time' htmlFor="reserved-time">Time of Reservation *
                <input type="time" id="reserved-time" name="appt" min="12:00" max="22:00" required />
                </label>
                <label id='label-diners' htmlFor="diners">Number of Diners *
                <select name="diners" id="diners">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4">5</option>
                  <option value="4">6</option>
                </select>
                </label>
                <label id='label-table' htmlFor="table-location">Table Location
                <select name="table-location" id="table-location">
                  <option value="No preference">No preference</option>
                  <option value="Inside">Inside</option>
                  <option value="Outside">Outside</option>
                </select>
                </label>
                <label id='label-special' htmlFor="special-occasion">Special occasion?
                <select name="special-occasion" id="special-occasion">
                  <option value="No special occasion">No special occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </select>
                </label>



            </form>
          </div>
            <NavLink to="/reservecontactinfo" className="btn-continue" >Continue</NavLink>
        </div>

    </section>
  )
}

export default Reservations
