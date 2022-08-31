import React, { useEffect, useState } from 'react';
import './checkoutFirst.style.scss';

// Import Components

import LoginIn from '../../login_in/login_in';

const CheckOutFirst = ({checkValue}) => {

    return ( 
        <div className='checkout__first'>
            <h6>Where’s this order going?</h6>
            <div className='checkout_inputs'>
                <div className='flex'>
                    <input type='text' onChange={(e) => checkValue(e)} className='primary_input' name='unitedState' placeholder={localStorage.getItem('unitedState') ? localStorage.getItem('unitedState') :'United State'} />
                </div>
                <div className='flex'>
                    <input type='text' onChange={(e) => checkValue(e)} className='primary_input' name='firstName' placeholder={localStorage.getItem('firstName') ? localStorage.getItem('firstName') : 'First Name'} />
                    <input type='text' onChange={(e) => checkValue(e)} className='primary_input' name='lastName' placeholder={localStorage.getItem('lastName') ? localStorage.getItem('lastName') : 'Last Name'} />
                </div>
                <div className='flex'>
                    <input type='text' onChange={(e) => checkValue(e)} className='primary_input' name='address' placeholder={localStorage.getItem('address') ? localStorage.getItem('address') : 'Address'} />
                    <input type='text' onChange={(e) => checkValue(e)} className='primary_input' name='aptfloor' placeholder={localStorage.getItem('aptfloor') ? localStorage.getItem('aptfloor') : 'Apt/Floor/Suite'} />
                </div>
                <div className='flex'>
                    <input type='text' onChange={(e) => checkValue(e)} className='primary_input' name='city' placeholder={localStorage.getItem('city') ? localStorage.getItem('city') : 'City'} />
                    <input type='text' onChange={(e) => checkValue(e)} className='primary_input' name='state' placeholder={localStorage.getItem('state') ? localStorage.getItem('state') : 'State'} />
                    <input type='text' onChange={(e) => checkValue(e)} className='primary_input' name='zipCode' placeholder={localStorage.getItem('zipCode') ? localStorage.getItem('zipCode') : 'Zip Code'} />
                </div>
                <div className='flex'>
                    <input type='text' onChange={(e) => checkValue(e)} className='primary_input' name='phone' placeholder={localStorage.getItem('phone') ? localStorage.getItem('phone') : 'Phone'} />
                </div>
            </div>
        </div>
    );
}
 
export default CheckOutFirst;