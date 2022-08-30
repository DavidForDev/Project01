import React from 'react';
import './primary_banner.style.scss';

const PrimaryBanner = (
    {h2title, 
    ptitle, 
    btntitle, 
    h2color, 
    pcolor, 
    btncolor, 
    btnborder, 
    bannerBcColor,
    imageSrc,
    reverse
    }) => {
    const h2_style = {
        color: `${h2color}`,
    }
    const p_style = {
        color: `${pcolor}`
    }
    const btn_style = {
        color: `${btncolor}`,
        border: `${btnborder}`
    }
    const banner_style = {
        backgroundColor: `${bannerBcColor}`,
        flexDirection: `${reverse}`
    }

    return ( 
        <div className='primary__banner container-full flex-wrap flex align-items-start' style={banner_style}>
            <div className='banner-title'>
                <div className='container-full'>
                    <h2 style={h2_style}>{h2title}</h2>
                    <p style={p_style} className='medium'>{ptitle}</p>
                </div>
                <button className='primary_btn' style={btn_style}>{btntitle}</button>
            </div>
            <img src={imageSrc} alt='banner'/>
        </div>
    );
}
 
export default PrimaryBanner;