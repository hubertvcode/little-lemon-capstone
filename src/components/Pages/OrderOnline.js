import React from 'react'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OrderOnline() {
  return (
    <section className='order-online-section'>
        <div className='sub-header'>
          <h1>Order Online</h1>
          <p>For more information please call us to 1-800-545 0000</p>
        </div>
        <div className="not-found-container">
          <h2>Page under construction...</h2>
          <FontAwesomeIcon icon={faPersonDigging} size="6x" />
        </div>
    </section>
  )
}

export default OrderOnline
