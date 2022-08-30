import React from 'react';
import './secondary_banner.style.scss';

const SecondaryBanner = ({h2title, ptitle, backImage, frontImage}) => {
    return ( 
        <div className='secondary__banner container-full flex justify-between align-items-center'>
            <div className='banner_title'>
                <h2>{h2title}</h2>
                <p className='medium'>{ptitle}</p>
            </div>
            <div className='banner_image flex justify-center align-items-end' style={{backgroundImage: `url(${backImage})`}}>
                <img src={frontImage} alt='frontimage' />
            </div>
        </div>
    );
}
 
export default SecondaryBanner;