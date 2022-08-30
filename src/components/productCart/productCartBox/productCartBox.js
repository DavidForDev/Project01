import React, { useEffect, useState } from 'react';
import './productCartBox.style.scss';

// Import SVG icons
import Close from '../../../assets/icons/close';


const ProductCartBox = ({cart, removeFromCart}) => {
    return ( 
        <div className='product__cart-container flex align-items-center' key={cart._id}>
            <div className='product_cart-image'>
                <img src={cart.mainImage} alt='cart-img' />
            </div>
            <div className='product_cart-detail' aria-details={cart._id}>
                <div className='detail-text'>
                    <h6>{cart.quantity}x {cart.name}</h6>
                    <p className='low'>{cart.explain}</p>
                </div>
                <div onClick={() => removeFromCart(cart)}>
                    <Close width='10px' height='10px'/>
                </div>
            </div>
        </div>
    );
}
 
export default ProductCartBox;