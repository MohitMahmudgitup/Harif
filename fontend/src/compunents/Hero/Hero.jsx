import React, { useEffect } from 'react'
import "./hero.css"
import { asset } from '../../assets'
import OngoingWrithing from './OngoingWrithing/OngoingWrithing'
import gsap from 'gsap'
import { icon } from '../../assets/index.jsx'


const Hero = () => {

  useEffect(() => {
    gsap.to('.hero-bg01', {
      rotation: 360,
      duration: 10,
      delay: 2,
      repeat: -1
    });
    gsap.to('.hero-img', {
      y : -10,
      duration: 1,
      delay: 2,
      repeat: -1,
      yoyo: true
    });
    gsap.to('.StarGradient2', {
      y : -15,
      rotate: 20,
      duration: 1,
      delay: 2,
      repeat: -1,
      yoyo: true
    });
    gsap.to('.StarGradient3', {
      rotate: 90,
      duration: .15,
      
      repeat: -1,
      repeatDelay: 2
      // yoyo: true
    });
  })
  return (
    <header className='hero'>
      
      <div className='hero-bg02'></div>
      <div className='hero-text-container'>
        {/* <div className='hero-ongoing-container'><OngoingWrithing/></div> */}
          <div className='StarGradient3 absolute scale-185 z-20 top-[10%] left-[10%] transform -translate-x-1/2 -translate-y-1/2'>
            <icon.StarGradient3/>
          </div>
        <div className='hero-titel-container'>
          <h1 className='font-mono'>Titel <span className='font-mono hero-font-only relative '><div className='hero-div01'></div>only</span> </h1>
        </div>
        <div className='flex justify-between items-center'>
        <h1 className='font-mono'>the brave high</h1>
        <OngoingWrithing/>
        </div>
        <div className='hero-longText'>
        <div className='hero-div02'></div>
        <p className='font-mono '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam iusto laborum facere sint voluptate. Ullam alias repellat, doloribus earum architecto ipsum voluptates maiores voluptas.</p>
        </div>
      </div>
      <div className='hero-img-container'>
      <div className='hero-bg01'></div>
      <div className="StarGradient2 absolute z-20 bottom-[10%] rotate-10 right-[25%] transform -translate-x-1/2 -translate-y-1/2"> <icon.StarGradient2/></div>
          <img className='hero-img' src={asset.home01} alt="" />
      <div className="StarGradient2 absolute z-20 top-[35%] rotate-10 left-[35%] transform -translate-x-1/2 -translate-y-1/2"> <icon.StarGradient2/></div>
      </div>
    </header>
  )
}

export default Hero