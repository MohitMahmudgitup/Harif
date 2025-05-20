import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navber.css"
import NavButton from '../NavButton/NavButton'
import gsap from 'gsap'
import { FiAlignRight } from "react-icons/fi";
// import Headroom from 'react-headroom'
import { FiX } from "react-icons/fi";
const Navber = () => {
  const [showMoblieSize , setShowMoblieSize] = useState(false);
  useEffect(() => {


    let mm = gsap.matchMedia();

    mm.add("(min-width: 720px)", () => {
      gsap.from(".navbar",{
        opacity: 0, 
        y: -100 , 
        duration: 1, 
        delay: 5, 
        ease: "power4.out"
      });
    });
    mm.add("(max-width: 720px)", () => {
      gsap.from(".mbl-nav",{
        opacity: 1, 
        x: -500 , 
        duration: .22, 
        ease: "power4.out"
      });
    });
    
  
    return () => mm.revert(); 
  })

  return (
    // <Headroom>
      <nav    
      className="navbar  f2">
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

            {
              showMoblieSize ? (       <FiX onClick={()=>setShowMoblieSize(false)} className='FiAlignRight'/> ):( 
                <FiAlignRight onClick={()=>setShowMoblieSize(true)} className='FiAlignRight'/>)
            }

   
            {
              showMoblieSize && ( 
              <div className='mbl-nav'>
                <div className = "mbl-ul">
                  
                {
              ["shop", "gallery", "about", "contact"].map((item, index) => {
                return (
                  <NavLink  key = {index}  onClick={()=>setShowMoblieSize(false)}  className = {({ isActive }) => isActive ? `navber-mbl-link navber-mbl-link-active` : `navber-mbl-link`} to={`/${item}`}>{item}</NavLink>
                )
              })
            }
                </div>
                <div onClick={()=>setShowMoblieSize(false)}  className='mbl-login-container'>
                  <NavButton/>
                </div>
              </div>
              
               )
           }


      </nav>
 
  )
}

export default Navber