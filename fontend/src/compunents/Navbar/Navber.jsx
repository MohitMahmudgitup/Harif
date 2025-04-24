import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navber.css"
import NavButton from '../NavButton/NavButton'
import {motion} from "framer-motion"
const Navber = () => {

  return (
    <motion.nav 
    animate={{opacity: 1,y: 0}}
    initial={{opacity: 0,y: -100}}
     transition={{
    duration: 1,
    delay: 1
  }}
    
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
    </motion.nav>
  )
}

export default Navber