import React from 'react'
import "./hero.css"
import { asset } from '../../assets'
import OngoingWrithing from './OngoingWrithing/OngoingWrithing'
const Hero = () => {
  return (
    <header className='hero'>
      
      <div className='hero-bg01'></div>
      <div className='hero-bg02'></div>
      <div className='hero-text-container '>
        <div className='hero-ongoing-container'><OngoingWrithing/></div>
        <div className='hero-div01'></div>
        <div className='hero-div02'></div>
        <h1 className='font-mono'>Titel <span className='font-mono hero-font-only '>only</span></h1>
        <h1 className='font-mono'>the brave high</h1>
        <p className='font-mono '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam iusto laborum facere sint voluptate. Ullam alias repellat, doloribus earum architecto ipsum voluptates maiores voluptas.</p>
      </div>
      <div className='hero-img-container'>
        <img className='hero-img' src={asset.home01} alt="" />
      </div>
    </header>
  )
}

export default Hero