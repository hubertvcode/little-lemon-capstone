import React from 'react'
import greekSalad from "../../images/greek salad.png"
import deliveryIcon from "../../images/delivery icon.svg"
import bruschetta from "../../images/brushetta.png"
import lemonDessert from "../../images/lemon dessert.jpg"
import { NavLink } from 'react-router-dom'

function Specials() {
  return (
    <div className='specials-section'>
      <div className='specials-section-title'>
        <h2 className='specials-title'>This week’s specials!</h2>
        <NavLink to="/menu" className='cta-online-menu'>Online Menu</NavLink>
      </div>
      <div className='specials-grid-container'>
        <article className='specials-card'>
            <img className='dish-photo' src={greekSalad} alt='Photo of a Greek Salad' />
          <div className='dish-info'>
            <div className='dish-title-container'>
              <h4 className='dish-title'>Greek Salad</h4>
              <p className='dish-price'>12.99</p>
            </div>
            <p className='dish-description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
              garnished with crunchy garlic and rosemary croutons. </p>
            <a className="delivery-link" href="/order-online">Order a delivery     <img className='delivery-icon' src={deliveryIcon} alt='A delivery icon' /></a>
          </div>
        </article>
        <article className='specials-card'>
            <img className='dish-photo' src={bruschetta} alt='Photo of a Brushetta' />
          <div className='dish-info'>
            <div className='dish-title-container'>
              <h4 className='dish-title'>Bruchetta</h4>
              <p className='dish-price'>5.99</p>
            </div>
            <p className='dish-description'>Our Bruschetta is made from grilled bread 
            that has been smeared with garlic and seasoned with salt and olive oil.  </p>
            <a className="delivery-link" href="/order-online">Order a delivery     <img className='delivery-icon' src={deliveryIcon} alt='A delivery icon' /></a>
          </div>
        </article>
        <article className='specials-card'>
            <img className='dish-photo' src={lemonDessert} alt='Photo of a Lemon Dessert' />
          <div className='dish-info'>
            <div className='dish-title-container'>
              <h4 className='dish-title'>Lemon Dessert</h4>
              <p className='dish-price'>5.00</p>
            </div>
            <p className='dish-description'>This comes straight from grandma’s recipe book, 
            every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a className="delivery-link" href="/order-online">Order a delivery     <img className='delivery-icon' src={deliveryIcon} alt='A delivery icon' /></a>
          </div>
        </article>


      </div>
    </div>
  )
}

export default Specials
