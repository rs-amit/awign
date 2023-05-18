import React from 'react';
import "./Cart.css"

function Cart({val}) {
  return (
    <div className='cart'>
      <div className='cart-avatar'>
        <img src={val?.owner.avatar_url} alt='' className='cart-avatar-img'/>
      </div>
      <div className='cartDetails'>
        <div className='cartInfo-name'>{val?.name}</div>
        <div className='cartInfo-desc'>{val?.description}</div>
        <div className='cartInfo-Language'>
            <span className='cartInfo-title'>language : </span>
            <span>{val?.language} </span>
        </div>
      </div>
    </div>
  )
}

export default Cart
