import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navber.css"
import NavButton from '../NavButton/NavButton'
import {motion} from "framer-motion"
import gsap from 'gsap'
// import Headroom from 'react-headroom'
const Navber = () => {
  useEffect(() => {
    gsap.from(".navbar",{
      opacity: 0, 
      y: -100 , 
      duration: 1, 
      delay: 5, 
      ease: "power4.out"
    });
    
  })

  return (
    // <Headroom>
      <nav    
      className="navbar ">
          <div className='navber-logo-container'>
              <Link to="/" className='navber-logo' >Logo</Link>
          </div>
          <div className='navber-link-container'>
            {
              ["shop", "gallery", "about", "contact"].map((item, index) => {
                return (
                  <NavLink  key = {index}  className = {({ isActive }) => isActive ? `navber-menu-link navber-menu-link-active` : `navber-menu-link`} to={`/${item}`}>{item}</NavLink>
                )
              })
            }
          </div>
          <div className='navber-login-container'>
            <NavButton/>
          </div>
      </nav>
 
  )
}

export default Navber