import React from 'react'
import { Link } from 'react-router-dom'
import "./navbutton.css"

const NavButton = () => {
  return (
    <div className='nav-button-container'>
        <div className='nav-button-register-container'>
            <Link className='nav-button-register' to="/register">Register</Link>
        </div>
        <Link to="/login" className='nav-button-login'>Login</Link>
    </div>
  )
}

export default NavButton