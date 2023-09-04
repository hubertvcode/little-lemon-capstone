import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../BookingMainLayout';
import { NavLink, useNavigate } from 'react-router-dom'
import { inputsInfoData } from '../../InputsData';
import { checkboxData } from '../../InputsData';
import  FormInput from '../../FormInput'
import FormCheckbox from '../../FormCheckbox';


const BookingContactInfo = () => {

  const { myFormData, setMyFormData, setErrorM, confOptions, setConfOptions} = useContext(FormContext);
  const navigate = useNavigate()


  // This onChange function handle changes in fname, lname, mail and phone inputs.

  const onChange = (e) => {
    setMyFormData({...myFormData, [e.target.name]: e.target.value })

  }



  // START LOGIC TO VALIDATE INPUTS

  // Logic to validate form inputs of BookingContactInfo component,
  // If no errors, the "Continue"  button is enabled and user navigates to -
  // BookingReview component.

  const regexName = new RegExp(/^[A-Za-z]{3,16}$/)
  const regexPhone = new RegExp(/[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}/)

  const [disable, setDisable] = useState(true);


 function validateInputs() {
    let errors = {};
  
    if(myFormData.fname === "") {
      errors.fname =  'Please enter your First Name';
    } else if (!regexName.test(myFormData.fname)){
      errors.fname = 
      "First Name should be at least 3 characters long and shouldn't include numbers or special characters!";
    }
    if(myFormData.lname === "") {
      errors.lname = 'Please enter your Last Name';
    } else if (!regexName.test(myFormData.lname)){
      errors.lname = 
      "Last Name should be at least 3 characters long and shouldn't include numbers or special characters!";
    }
  
    if (myFormData.email === "") {
      errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S\S+/.test(myFormData.email)) {
      errors.email = 'Invalid! Email address must be like example@example.com';
    }
    if (myFormData.phone === "") {
      errors.phone = 'Please enter your phone number';
    } else if (!regexPhone.test(myFormData.phone)) {
      errors.phone = "Please enter a valid US phone number with 10 digits";
    }
    

    return errors;
  }

  //The following useEffect Enable or Disable the "Continue" button of the Form inside 
  // the BookingContactInfo component. Also updates the state of errorM

  useEffect( () => {
    if (Object.keys(validateInputs()).length === 0) {
      setDisable(false)

    } else {
      setDisable(true)
    }
     setErrorM(validateInputs())
 
  }, [myFormData.fname, myFormData.lname, myFormData.email, myFormData.phone])


  const navigateToReview = () => navigate("/bookings/bookingreview")

// END OF INPUT VALIDATION


// The following code handles the changes on the two checkboxes in
// BookingContactInfo component


const handleChange = (e) => {
        //Updates the checkbox value to "true" or "false" to myFormData.emailOption or
        //myFormData.textOption
        setMyFormData({...myFormData, [e.target.name]: e.target.checked })

        if (e.target.checked === true) {
          // Adds checkbox value and key (emailOption or textOption) to object 
          //when checkbox is checked
          setConfOptions({...confOptions, [e.target.name]: e.target.value })
     
        } else {
          // removes key from object when checkbox is not checked
          const newConfOptions = {...confOptions};
          delete newConfOptions[e.target.name]
          setConfOptions(newConfOptions);
   
        }
         
      };

  // End of code that handles the changes on the two checkboxes..
  

  return (
    <section className='reserve-section'>

        <div className='form-section'>
          <div className='form-container-contact'>
            <div className='form-instructions-contact'>
          <h2>Now, we just need your information....</h2>
              <p>required *</p>
            </div>
            <form onSubmit={navigateToReview} className='form-body-contact'>
                 {inputsInfoData.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={myFormData[input.name]}
                    onChange={onChange}
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
                  <button type='submit'  id='btn-continue' className={`btn-continue ${disable? "disabled" : "contact"}`} disabled={disable}  >Continue</button>
                  <NavLink to="/bookings" className="btn-continue back" >Back</NavLink>
                </div>
              </form>
          </div>
        </div>

    </section>
  )
}

export default BookingContactInfo
