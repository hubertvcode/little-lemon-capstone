import React from 'react'
import Header from "../Pages/Header"
import Footer from "../Pages/Footer"

const ReserveOne = () => {
  return (
    <div>
        <Header />
        <form>
            <label htmlFor="date" >Date</label>
            <input id="date" type="date" name='date' value="2023-08-21" />



        </form>
        <Footer />
    </div>
  )
}

export default ReserveOne
