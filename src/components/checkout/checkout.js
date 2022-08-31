import React, { useEffect, useState } from 'react';
import './checkout.style.scss';
import {Link} from 'react-router-dom';

// Import Checkout Components

import CheckOutFirst from './checkout_first/checkoutFirst';
import CheckOutSecond from './checkout_second/checkoutSecond';

const Checkouter = () => {
    const [modalStyle, setModalStyle] = useState({display: 'none'});
    const [disabled, setDisabled] = useState(true);

    function session() {
        const inputs = document.querySelectorAll('input');

        inputs.forEach((e) => {
            if(e.value) {
                localStorage.setItem(e.getAttribute('name'), e.value);
            }
            setModalStyle({display: 'block'})
        })
    }

    function checkValue(input) {
        if(input.target.value) {
            setDisabled(false)
        } else {
            setDisabled(true);
        }
    }

    function edit() {
        setModalStyle({display: 'none'})
    }

    const name = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    const zipCode = localStorage.getItem('zipCode');
    const unitedState = localStorage.getItem('unitedState');
    const apt = localStorage.getItem('aptfloor')
    const city = localStorage.getItem('city');

    return ( 
        <section className='checkout__section flex justify-center direction-column'>
            <article className='checkout_article'>
                <CheckOutFirst checkValue={checkValue}/>
            </article>
            <article className='checkout_article'>
                <CheckOutSecond />
                <button className='tertiary_btn' onClick={session} disabled={disabled}>Continue</button>
            </article>
            <div className='checkout__modal-detail' style={modalStyle}>
                <div className='text-start'>
                    <div>
                        <div>
                            <h6>Shipping</h6>
                            <p>{name} {lastName}</p>
                            <p>{zipCode} {unitedState}, {apt}, {city}</p>
                        </div>
                        <div>
                            <h6>Payment</h6>
                            <p>Visa ending in 2025</p>
                        </div>
                    </div>
                    <div>
                        <h5>everything look good?</h5>
                        <div>
                            <Link to='/checkout/complete'>
                                <button className='tertiary_btn' onClick={session}>Place Order</button>
                            </Link>
                            <button className='tertiary_btn' onClick={edit}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Checkouter;