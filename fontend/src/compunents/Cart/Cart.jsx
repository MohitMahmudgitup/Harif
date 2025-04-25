import React from 'react'
import "./Cart.css"
const Cart = () => {
  return (
    <div className='cart'>
        <div className='cart-img-container'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDISJF2ZH9KHtiSUtbHnG_gyTjAx9k3uBtYw&s" alt="" />
        </div>
        <div className='cart-info-container'>
            <h1>Product Name</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolorem mollitia dignissimos quos tempora obcaecati facilis est excepturi omnis</p>
            <p>Product Price : $100</p>
        </div>
        <div className='cart-button-container'>
            <button>Buy Now</button>
        </div>
    </div>
  )
}

export default Cart