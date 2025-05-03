import React, { useEffect, useState } from "react";
import "./Welcome.css";
import gsap from 'gsap'
import { icon } from '../../assets/index.jsx'

const Welcome = () => {
  const [startSlide, setStartSlide] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);


  useEffect(()=>{
    gsap.from(".welcome-container-font-h1",{
      x: 50,
      y: 50, 
      duration: 3, 
      ease: "power4.out"
    })
    gsap.from(".welcome-container-font-h2",{
      x: -50,
      y: -50, 
      duration: 3, 
      ease: "power4.out"
    })
    gsap.fromTo(".welcome-StarGradient2",
      {
        opacity: 0,
        
      },
      {
        opacity: 1,
        y : -15,
        rotate: 20,
        duration: 1,
        delay: 2,
        // repeat: -1,
        yoyo: true,
        ease: "power3.in",
      }
    );
    gsap.fromTo(".welcome-StarGradient3",
      {
        opacity: 0,
        
      },
      {
      opacity: 1,
      duration: .88, 
      delay: 2,       // starts after 2 seconds
      rotate: 360,    // rotates 360 degrees
      ease: "power3.in"
    });
    gsap.fromTo(".welcome",
      {
        opacity: 1,
        
      },
      {
      opacity: 0,
      y: -700,
      duration: .88, 
      delay: 7,    
      ease: "power3.in"
    });
    
    
  })
  return (
    <>
      {showWelcome && (
        <div className={`welcome f2 ${startSlide ? "slide" : ""}`}>
          <div className="welcome-container">
            <h1 className=" welcome-container-font-h1">Animate Anything</h1>
            <h2 className=" welcome-container-font-h2">That's right, Anything</h2>
            <div className="welcome-StarGradient2 "><icon.StarGradient2/></div>
            <div className="welcome-StarGradient3 -z-10 absolute -left-5 top-5"><icon.StarGradient3/></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
