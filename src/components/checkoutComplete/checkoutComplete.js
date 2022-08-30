import React, { useEffect, useState } from 'react';
import './checkoutComplete.style.scss';
import {Link} from 'react-router-dom'

// Import Images
import thanks from '../../assets/images/thanks.png';
import img1 from '../../assets/images/products/p1.png'


import ProductCartBox from '../productCart/productCartBox/productCartBox';


// const useExample = (prod) => {
//     const [product, setProduct] = useState([]);

//     useEffect(() => {
//         setProduct(prod)
//     }, [prod])

//     return {
//         product
//     }
// }

const CheckoutComplete = ({totalPrice}) => {
    const [product, setProduct] = useState([]);
    const productData = JSON.parse(localStorage.getItem('inCart'))

    const name = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    const zipCode = localStorage.getItem('zipCode');
    const unitedState = localStorage.getItem('unitedState');
    const apt = localStorage.getItem('aptfloor')
    const city = localStorage.getItem('city');

    window.onload = () => {
        setProduct(productData) 
    }


    return ( 
        <section className='checkout__complete'>
            <article className='checkout_complete flex direction-column '>
                <img src={thanks} alt='svg' className='thanks-png' />
                <div className='flex justify-between align-items-center'>
                    <div>
                        <h2>Your order was received!</h2>
                        <p>We’ll let you know when it ships and is headed your way.</p>
                    </div>
                    <Link to='/'>Back to shopping</Link>
                </div>
            </article>
            <article className='checkout_complete flex justify-between align-items-end'>
                <div className='product-images'>
                    {product.map((e) => {
                        return (
                            <ProductCartBox cart={e} key={e._id}/>
                        )
                    })}
                </div>
                <div className='product-detail'>
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
                            <h5>Total</h5>
                            <span>${totalPrice}</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className='checkout_complete flex justify-between align-items-end'>
                <div className='text-start complete-detail'>
                    <h5>Your order is being shipped to:</h5>
                    <p>{name} {lastName}</p>
                    <p>{zipCode} {unitedState}</p>
                    <p>{apt}</p>
                    <p>{city}</p>
                </div>
                <button className='tertiary_btn'>View Order Status</button>
            </article>
        </section>
    );
}
 
export default CheckoutComplete;