import React from 'react';
import './style.scss';

// Import Component

import CheckoutComplete from '../../components/checkoutComplete/checkoutComplete';

const Complete = ({totalPrice}) => {
    return ( 
        <div className='home__container'>
            <div className='home_display'>
                <CheckoutComplete totalPrice={totalPrice}/>
            </div>
        </div>
    );
}
 
export default Complete;