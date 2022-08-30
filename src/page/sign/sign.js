import React from 'react';
import './sign.style.scss';

// Import Components
import SignUp from '../../components/sign_up/sign_up';

const Sign = () => {
    return ( 
        <div className='home__container flex justify-center align-items-center'>
            <div className='home_display'>
                <SignUp />
            </div>
        </div>
    );
}
 
export default Sign;