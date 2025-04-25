import React from 'react'
import "./Title.css"
import { asset } from '../../assets'
const Title = ({title01, title02}) => {
  return (
    <div className='title'>
        <div className='title-container'>
            <div className='title-font-box01'>
                <h1>{title01}</h1>
                {/* Explore */}
                <h3>{title02}</h3>
                {/* pure potency */}
            </div>
            <div className='title-font-box02'>
                <img  src={asset.arrowicon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Title