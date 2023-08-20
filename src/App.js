import React from 'react';
import Header from "./components/Pages/Header"
import Main from "./components/Pages/Main"
import Footer from "./components/Pages/Footer"
import AboutUs from './components/Pages/AboutUs';
import Menu from './components/Pages/Menu';
import Reservations from './components/Pages/Reservations';
import ReserveContactInfo from './components/Pages/ReserveContactInfo'
import ReserveReview from './components/Pages/ReserveReview'
import ReserveConfirmation from './components/Pages/ReserveConfirmation'
import OrderOnline from './components/Pages/OrderOnline';
import Login from './components/Pages/Login';
import ReserveOne from './components/Reserve/ReserveOne';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
    {/* <ReserveOne /> */}
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/reservations" element={<Reservations />}/>
      <Route path="/reservecontactinfo" element={<ReserveContactInfo />}/>
      <Route path="/reservereview" element={<ReserveReview />}/>
      <Route path="/reserveconfirmation" element={<ReserveConfirmation />}/>
      <Route path="/orderonline" element={<OrderOnline />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
