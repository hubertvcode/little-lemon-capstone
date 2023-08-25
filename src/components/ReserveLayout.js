import React from 'react'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react'
import logoColors from "../images/Little Lemon Logo colors.png"


export const FormContext = createContext()

const ReserveLayout = () => {

  const [formData, setFormData] = React.useState(
    {
    date: "",
    time: "",
    diners: "",
    tableLocation: "",
    occasion: "",
    fname: '',
    lname: '',
    email: '',
    phone: '',
    specialRequest: '',
    emailOption: '',
    textOption: ''

    })

    const logoFooter = logoColors

  return (
    <section className='reserve-section'>
        <div className='sub-header'>
          <h1>Reserve a Table</h1>
          <p>For more information please call us to 1-800-545 0000</p>
        </div>
        <FormContext.Provider value={{formData, setFormData }}>
          <Outlet />
        </FormContext.Provider>

    </section>
  )
}

export default ReserveLayout
