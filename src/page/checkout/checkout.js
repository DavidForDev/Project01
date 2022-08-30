import React from 'react';
import './checkout.style.scss';

// Import Components

import Checkouter from '../../components/checkout/checkout';

const Checkout = () => {
    return ( 
        <div className='home__container'>
            <div className='home_display'>
                <Checkouter />
            </div>
        </div>
    );
}
 
export default Checkout;