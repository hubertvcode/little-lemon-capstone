import React from 'react';
import Layout from './components/Layout'
import Home from './components/Pages/Home';
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutUs from './components/Pages/AboutUs';
import Menu from './components/Pages/Menu';
import ReserveLayout from './components/ReserveLayout';
import Reservations from './components/Pages/Reserve/Reservations';
import ReserveContactInfo from './components/Pages/Reserve/ReserveContactInfo'
import ReserveReview from './components/Pages/Reserve/ReserveReview'
import ReserveConfirmation from './components/Pages/Reserve/ReserveConfirmation'
import OrderOnline from './components/Pages/OrderOnline';
import Login from './components/Pages/Login';
import NotFound from './components/Pages/NotFound';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <>


    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />}/>
        <Route path="about" element={<AboutUs />}/>
        <Route path="menu" element={<Menu />}/>
        <Route path="reserve" element={<ReserveLayout />}>
          <Route index element={<Reservations />}/>
          <Route path="reservecontactinfo" element={<ReserveContactInfo />}/>
          <Route path="reservereview" element={<ReserveReview />}/>
          <Route path="reserveconfirmation" element={<ReserveConfirmation />}/>
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
