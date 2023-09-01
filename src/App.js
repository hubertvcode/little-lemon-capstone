import React from 'react';
import Layout from './components/Layout'
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import Menu from './components/Pages/Menu';
import BookingMainLayout from './components/BookingMainLayout';
import BookingForm from './components/Pages/Bookings/BookingForm';
import BookingContactInfo from './components/Pages/Bookings/BookingContactInfo'
import BookingReview from './components/Pages/Bookings/BookingReview'
import BookingConfirmation from './components/Pages/Bookings/BookingConfirmation'
import OrderOnline from './components/Pages/OrderOnline';
import Login from './components/Pages/Login';
import NotFound from './components/Pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <>


    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />}/>
        <Route path="about" element={<AboutUs />}/>
        <Route path="menu" element={<Menu />}/>
        <Route path="bookings" element={<BookingMainLayout />}>
          <Route index element={<BookingForm />}/>
          <Route path="bookingcontactinfo" element={<BookingContactInfo />}/>
          <Route path="bookingreview" element={<BookingReview />}/>
          <Route path="bookingconfirmation" element={<BookingConfirmation />}/>
        </Route>
        <Route path="/orderonline" element={<OrderOnline />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

    </>
  );
}

export default App;
