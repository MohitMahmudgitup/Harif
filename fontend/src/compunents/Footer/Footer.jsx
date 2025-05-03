import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className='footer-bg'>
      </div>
      <h1 className='font-mono font-bold h1'>off/Menu</h1>
      <div></div>
      <div className='footer-container'>
        <div className='footer-logo-container'>
          <h1>©2023 OFF MENU ALL RIGHTS RESERVED</h1>
        </div>
        <div className='footer-menu-container'>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer