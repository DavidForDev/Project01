import React from 'react';
import './checkoutSecond.style.scss';

// Import Icons

import Visa from '../../../assets/icons/visa';

const CheckOutSecond = () => {

    return ( 
        <div className='checkout__second'>
            <h6>What’s your payment information?</h6>
            <div className='checkout_input'>
                <p className='low'>Enter your card information</p>
                <div className='flex'>
                    <Visa />
                    <input type='text' name='cardCode' className='primary_input' placeholder={localStorage.getItem('cardCode') ? localStorage.getItem('cardCode') : '4030 2100 5030 2020'}/>
                </div>
            </div>
        </div>
    );
}
 
export default CheckOutSecond;