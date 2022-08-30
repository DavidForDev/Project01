import React from 'react';
import './404.style.scss';

const NotFound = () => {
    return ( 
        <div className='home__container'>
            <div className='home_display text-center'>
                <h2 className='error-404'>Page not Founded</h2>
                <a href='/'>Back to shop</a>
            </div> 
        </div>
    );
}
 
export default NotFound;