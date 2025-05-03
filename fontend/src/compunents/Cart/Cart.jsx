import React from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'
const Cart = () => {
  return (
    <div className='cart'>
        <div className='cart-img-container'>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/934501151218465.6307c5362ac88.png" alt="" />
        </div>
        <div className='cart-info-container'>
            <h1>Product Name</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolorem mollitia dignissimos quos tempora obcaecati facilis est excepturi omnis</p>
            <p>Product Price : $100</p>
        </div>
        <div className='cart-button-container'>
            <Link to={"/product-details"} className='cart-button'>Buy Now</Link>
        </div>
    </div>
  )
}

export default Cart