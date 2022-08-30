import React, { useEffect } from 'react';
import './joinEmail.style.scss';

// Import Image

import img from '../../assets/images/joinemail.jpg'

// Import Icons

import Close from '../../assets/icons/close';

const JoinEmail = () => {

    function closer() {
        const joinEmail = document.querySelector('.join__email');

        joinEmail.style.display = 'none'
    }

    function autoOpener() {
        const joinEmail = document.querySelector('.join__email');

        setTimeout(() => {
            joinEmail.style.display = 'flex'
        }, 2000);
    }

    useEffect(() => {
        autoOpener();
    })

    return ( 
        <div className='join__email flex flex-wrap justify-center align-items-center'>
            <div className='join_email-container flex'>
                <div className='image'>
                    <img src={img} alt='join_email' />
                </div>
                <div className='join_detail flex direction-column justify-center'>
                    <h2>Join the Sooth family</h2>
                    <p className='medium'>A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</p>
                    <p>Sign up for our emails, and receive 15% off your first order!</p>
                    <div className='flex'>
                        <input type='text' className='primary_input' />
                        <button className='secondary_btn'>Subscribe</button>
                    </div>
                </div>
                <div className='closer' onClick={closer}>
                    <Close />
                </div>
            </div>
        </div>
    );
}
 
export default JoinEmail;