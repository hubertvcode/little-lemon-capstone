import React from 'react'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Menu() {
  return (
    <section className='menu-section'>
        <div className='sub-header'>
          <h1>Menu</h1>
          <p>For more information please call us to 1-800-545 0000</p>
        </div>
        <div className="not-found-container">
          <h2>Page under construction...</h2>
          <FontAwesomeIcon icon={faPersonDigging} size="6x" />
        </div>
    </section>
  )
}

export default Menu
