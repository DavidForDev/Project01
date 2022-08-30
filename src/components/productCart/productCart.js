import React, { useEffect, useState } from 'react';
import './productCart.style.scss';
import {Link} from 'react-router-dom'

// Import SVG icons

import Close from '../../assets/icons/close';

// Import Component
import ProductCartBox from './productCartBox/productCartBox';

const ProductCart = ({cartItem, removeFromCart, totalPrice}) => {
    function closer() {
        const prod = document.querySelector('.black__opacity-bg');
        prod.style.display = 'none'
    }

    return ( 
        <div className='black__opacity-bg'>
            <div className='product__cart'>
                <div className='product_cart-section flex align-items-center justify-between'>
                    <div className='flex align-items-center' style={{gap: '15px'}}>
                        <h4 className='cart-title'>Your Cart</h4>
                        <p className='low font-underline'>{cartItem.length ? cartItem.length : '0'} items</p>
                    </div>
                    <div onClick={closer}>
                        <Close width='15' height='15'/>
                    </div>
                </div>
                <div className='product_cart-section'>
                    <div className='product_in_cart'>
                        {cartItem.length >= 1 ? 
                        cartItem.map((e) => {
                            return (
                                <ProductCartBox cart={e} removeFromCart={removeFromCart} key={e._id}/>
                            )
                        })   
                        : <h3>Cart is clear</h3>}
                    </div>
                </div>
                <div className='product_cart-section'>
                    <div className='product_cart-checkout'>
                        <div className='flex align-items-center justify-between'>
                            <span className='font-bold'>Subtotal</span>
                            <p>${totalPrice}</p>
                        </div>
                        <div className='flex align-items-center justify-between'>
                            <span className='font-bold flex'>Tax <p className='font-bold-400'>(calculated in checkout)</p></span>
                            <p>--</p>
                        </div>
                        <div className='flex align-items-center justify-between'>
                            <span className='font-bold flex'>Shipping <p className='font-bold-400'>(free standard over $40)</p></span>
                            <p>Free</p>
                        </div>
                    </div>
                    <div className='finally-checkout flex align-items-center justify-between'>
                        <h5>Estimated Total</h5>
                        <span>${totalPrice}</span>
                    </div>
                    <div className='text-center'>
                        <a href='/checkout'>
                            <button className='primary_btn'>Checkout</button>
                        </a>
                        <a href='###'>View Cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductCart;