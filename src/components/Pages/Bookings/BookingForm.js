import React from 'react'
import { useContext} from 'react';
import { NavLink } from 'react-router-dom'
import { FormContext } from '../../BookingMainLayout';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


const BookingForm = () => {

  const { 
    myFormData, 
    setMyFormData, 
    availableTimes, 
    numberDiners, 
    tablesType, 
    occasions, 
    handleDateChange} = useContext(FormContext);
  

  
  return (
    <>

        <div className='form-section'>
          <div className='form-container'>
            <div className='form-instructions'>
              <p>Please fill out all the required * fields
                to reserve a table.</p>
            </div>
            <h2>Find a table for any occasion.</h2>
            <form  className='form-body'>
                <label id='label-date' htmlFor="date" >  Date *
                <DatePicker
                id='date'
                name='date'
              
                selected={!myFormData.date ? new Date() : 
                  new Date(myFormData.date)}
                onChange={handleDateChange}
                required={true}
                />
                </label>
                <label id='label-time' htmlFor="reserved-time">Time of Reservation *
                <select 
                  id="reserved-time"
                  data-testid="reservedTime"
                  name="time" 
                  value={myFormData.time}
                  onChange={(e) => setMyFormData({...myFormData, time: e.target.value})} 
                  required={true}
                  >
                    {availableTimes.map(times =>
                      <option data-testid='bookingTime'  key={times} value={times} >
                        {times}
                       </option>
                      )}
                  </select>
                </label>
                <label id='label-diners' htmlFor="diners">Number of Guests *
                <select 
                  name="diners" 
                  id="diners"
                  data-testid='diners'
                  value={myFormData.diners}
                  onChange={(e) => setMyFormData({...myFormData, diners: e.target.value})} 
                  required={true}
                  >
                    {numberDiners.map(diners => 
                      <option  data-testid='dinersOption' key={diners} value={diners} >
                        {diners}
                       </option>
                      )}
                </select>
                </label>
                <label id='label-table' htmlFor="table-location">Table Location (optional)
                <select 
                  name="table-location" 
                  id="table-location"
                  value={myFormData.tableLocation}
                  onChange={(e) => setMyFormData({...myFormData, tableLocation: e.target.value})} 
                  >
                    {tablesType.map(tables => 
                      <option key={tables} value={tables} >
                        {tables}
                       </option>
                      )}
                </select>
                </label>
                <label id='label-occasion' htmlFor="special-occasion">Special occasion? (optional)
                <select 
                  name="special-occasion" 
                  id="special-occasion"
                  value={myFormData.occasion}
                  onChange={(e) => setMyFormData({...myFormData, occasion: e.target.value})} 
                  >
                    {occasions.map(occasion => 
                      <option data-testid='occasionOption'  key={occasion} value={occasion} >
                        {occasion}
                       </option>
                      )}
                </select>
                </label>
                <label id='label-special'  htmlFor="special-request">Special requests
                <textarea 
                id="special-request" 
                name="special-request" 
                value={myFormData.specialRequest}
                onChange={(e) => setMyFormData({...myFormData, specialRequest: e.target.value})} 
                rows="3" 
                cols="50">
                </textarea>
                </label>

          
                <div className='btns-container one'>
                  <NavLink to="bookingcontactinfo"  className="btn-continue one" >Continue</NavLink>
                </div>

            </form>
          </div>
        </div>

    </>
  )
}

export default BookingForm
