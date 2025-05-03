import React from 'react'
import './ShowCard.css'
import Title from '../Title/Title'
import Cart from '../Cart/Cart'
const ShowCard = () => {
  return (
    <section className='showCard f3'>
        <div className='bg-01'></div>
        <div className='bg-02'></div>
        <div className='bg-03'></div>
        <div className='bg-04'></div>
        <Title title01 = {"ALL"} title02= {"Product"}/>
        <div className='showCard-container'>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        </div>
    </section>
  )
}

export default ShowCard