import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { createContext, useReducer, useState, useEffect } from 'react'
import { fetchAPI, submitAPI } from '../utilities/demoAPI'
import { inputsInfoData } from './InputsData'
import { checkboxData } from './InputsData'





export const FormContext = createContext()

const BookingMainLayout = () => {
  const initialDate = new Date().toLocaleDateString('en-us')
  // const availableTimes = ["17:00", "17:30", "18:00", "18:30"]
  const numberDiners = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const tablesType = ["No preference", "Inside", "Outside"]
  const occasions = ["No special occasion", "Birthday", "Anniversary", "Engagement"]
  const minDate = new Date().toISOString().split('T')[0];
  const regexName = new RegExp(/^[A-Za-z]{3,16}$/)
  const regexPhone = new RegExp(/[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}/)
  const navigate = useNavigate()

  
  const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];
  
  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes; 
  };
  
  const [ availableTimes, dispatch ] = useReducer(updateTimes, [], initializeTimes);

  const initialFormData = {
    date: "",
    time: availableTimes[0],
    diners: "1",
    tableLocation: "No preference",
    occasion: "No special occasion",
    fname: '',
    lname: '',
    email: '',
    phone: '',
    specialRequest: '',
    emailOption: true,
    textOption: false
    
  }

  
  useEffect(() => {
    localStorage.setItem("myFormData", JSON.stringify(initialFormData))
  },[])
  
  function localSaves () {
    //Gets localstorage stored values
    const saved = localStorage.getItem('myFormData')
    const initialValues = JSON.parse(saved)
    return initialValues || "";
  }

  const [myFormData, setMyFormData] = useState(localSaves())

  useEffect(() => {
    setMyFormData({...myFormData, date: new Date()})
  
  }, [])

  // const [myFormData, setMyFormData] = useState({
  //   date: new Date(),
  //   time: availableTimes[0],
  //   diners: "1",
  //   tableLocation: "No preference",
  //   occasion: "No special occasion",
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   phone: '',
  //   specialRequest: '',
  //   emailOption: true,
  //   textOption: false
    
  // })


useEffect(() => {
  localStorage.setItem("myFormData", JSON.stringify(myFormData))

},[myFormData])
    
    const [confOptions, setConfOptions] = useState({

    })
    
    
    const isValidDate = (selectedDate) => {
      const today = new Date()
      return selectedDate > today
    }

    
    const handleDateChange = date => {
       if (isValidDate(date)) {
        setMyFormData({...myFormData, date: date})
        dispatch(date);
      }
    };
    
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
    
    const [activate, setActivate] = useState(Boolean);
    const [errorM, setErrorM] = useState(Object)

    function validateInputs() {
      let errors = {};
    
      if(!myFormData.fname) {
        errors.fname = 'Please enter your First Name';
      } else if (!regexName.test(myFormData.fname)){
        errors.fname = 
        "First Name should be at least 3 characters long and shouldn't include numbers or special characters!";
      }
      if(!myFormData.lname) {
        errors.lname = 'Please enter your Last Name';
      } else if (!regexName.test(myFormData.lname)){
        errors.lname = 
        "Last Name should be at least 3 characters long and shouldn't include numbers or special characters!";
      }
    
      if (!myFormData.email) {
        errors.email = 'Please enter your email';
      } else if (!/\S+@\S+\.\S\S+/.test(myFormData.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!myFormData.phone) {
        errors.phone = 'Please enter your phone number';
      } else if (!regexPhone.test(myFormData.phone)) {
        errors.phone = "Please enter a valid US phone number with 10 digits";
      }
      
  
      return errors;
    }

    //Activates or Deactivates "Continue" button on Form Step 2 (ReserveContactInfo)

    useEffect( () => {
      if (Object.keys(validateInputs()).length === 0) {
        setActivate(true)

      } else {
        setActivate(false)
      }
      // const active = continueBtnActive()
       setErrorM(validateInputs())
   
    }, [myFormData.fname, 
      myFormData.lname, 
      myFormData.email, 
      myFormData.phone])

    const navigateToReview = () => navigate("/bookings/bookingreview")

    const submitForm = (e) => {
      e.preventDefault()
       const res = submitAPI(myFormData);
      if (res) {
        console.log("Form submitted")
        console.log(myFormData)
        console.log(confOptions)
        localStorage.clear(myFormData)
        localStorage.setItem("myFormData", JSON.stringify(initialFormData))
       return navigate("/bookings/bookingconfirmation")
      }
      }


   return (
    <section className='reserve-section'>
        <div className='sub-header'>
          <h1>Reserve a Table</h1>
          <p>For more information please call us to 1-800-545 0000</p>
        </div>
        <FormContext.Provider value={{initialFormData, myFormData, setMyFormData, confOptions, setConfOptions, submitForm, navigateToReview, availableTimes, numberDiners, tablesType, occasions, minDate, handleDateChange, handleChange, inputsInfoData, checkboxData, activate, errorM }}>
          <Outlet />
        </FormContext.Provider>

    </section>
  )
}

export default BookingMainLayout
