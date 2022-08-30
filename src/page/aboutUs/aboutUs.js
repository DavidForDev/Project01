import React from 'react';
import './aboutUs.style.scss';

const AboutUs = () => {
    return ( 
        <div className='home__container'>
            <div className='about__container home_display flex direction-column'>
                <span>Covid Update</span>
                <h1>Stores</h1>
                <p className='low'>We’re reopening select stores at limited capacity. We’re prioritizing the health and safety of our community by increasing sanitation throughout our stores, implementing contactless checkout, and providing our team with masks and hand-washing breaks. </p>
            </div>
        </div>
    );
}
 
export default AboutUs;