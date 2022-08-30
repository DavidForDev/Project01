import React, { useEffect, useState } from 'react';
import './productCard.style.scss';
import {Link} from 'react-router-dom'


// Import Icons

import Cart from '../../assets/icons/cart';

const ProductCard = ({base, addInCart}) => {
    const {mainImage, name, explain, cost, _id} = base
    const [cartItem, setCartItem] = useState();
       
    function addCard(carts) {
        if(localStorage.getItem('Incart') === null) {
            localStorage.setItem('Incart', '[]')
        }

        const old_cart = JSON.parse(localStorage.getItem('Incart'));
        const exist = old_cart.find(x => x._id === carts._id);

        if(exist) {
           exist.quantity ++
           const index = old_cart.indexOf(exist);
           old_cart.splice(index);
           old_cart.push(exist);
           localStorage.setItem('Incart', JSON.stringify(old_cart));
        } else {
            old_cart.push(carts);
            localStorage.setItem('Incart', JSON.stringify(old_cart));
        }

    }

    return ( 
            <div className='product__card'>
                {base.new ? 
                    <div className='product_additional-info'>
                        <p>New</p>
                    </div>
                : ''}
                <Link to={`/productDetail/${_id}`}>
                    <div className='product_image container-full'>
                        <img src={mainImage} alt='product-img' />
                    </div>
                    <div className='product_detail container-full'>
                        <div className='container-full'>
                            <h6>{name}</h6>
                            <p>{explain}</p>
                        </div>
                        <span className='price'>${cost}</span>
                    </div>
                </Link>
                <button onClick={() => addInCart(base)} className='primary_btn flex align-items-center justify-center'>
                    <Cart width={12} height={12}/>
                    Add to bag
                </button>
            </div>
    );
}
 
export default ProductCard;