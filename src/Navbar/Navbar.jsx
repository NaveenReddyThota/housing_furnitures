import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div>

        <div id='navbar'>
          <h1 className='title'>Panto</h1>

          <ul id='ul-section'>
            <li className='titles'>Homepage</li>
            <li className='titles'>Customize</li>
            <li className='titles'>Projects</li>
            <li className='titles'>Financing</li>
            <li className='titles'>Contacts</li>


          </ul>
          <div className='button-sec'>
          <button className='button'> Design yours</button>

          </div>

        </div>




      </div>

    </div>
  )
}

export default Navbar