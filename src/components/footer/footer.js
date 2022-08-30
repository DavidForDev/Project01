import React from 'react';
import './footer.style.scss';

// Import Icons

import Facebook from '../../assets/icons/facebook';
import Twitter from '../../assets/icons/twitter';
import Instagram from '../../assets/icons/instagram';
import Youtube from '../../assets/icons/youtube';


const menuBase = {
    shop: [
        'lorem ipsum ai',
        'dolarat',
        'veraotio',
        'chauloe'
    ],
    about: [
        'about us',
        'sooth stories (blog)',
        'contanct us',
        'learn more',
        'stores'
    ],
    more: [
        'dolar at',
        'lorem at al',
        'veraotio'
    ]
}

const Footer = () => {
    return ( 
        <div className='footer container-full flex direction-column'>
            <div className='join-container container-full flex justify-center align-items-center flex-wrap'>
                <h5>Join the Sooth family</h5>
                <div className='line'></div>
                <div className='join-form flex align-items-center flex-wrap'>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                    <div className='flex'>
                        <input type='text' className='primary_input' />
                        <button className='secondary_btn'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footer-container flex direction-column'>
                <div className='flex justify-between align-items-start flex-wrap-reverse'>
                    <div className='subscribe_container'>
                        <div>
                            <h1 className='font-bold-400'>sooth</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                        </div>
                        <div className='flex'>
                            <input type='text' className='primary_input' placeholder='Enter your Email'/>
                            <button className='primary_btn'>Subscribe</button>
                        </div>
                    </div>
                    <div className='menu_container flex align-items-start '>
                        <ul className='menu-ul'>
                            <label form='menu' className='font-bold'>SHOP</label>
                            {menuBase.shop.map((e) => {
                                return (
                                    <li className='menu-li' key={e}>
                                        <a href='##' className='font-bold-300'>{e}</a>
                                    </li>
                                )
                            })}                        
                        </ul>
                        <ul className='menu-ul'>
                            <label form='menu' className='font-bold'>ABOUT</label>
                            {menuBase.about.map((e) => {
                                return (
                                    <li className='menu-li' key={e}>
                                        <a href='##' className='font-bold-300'>{e}</a>
                                    </li>
                                )
                            })}                        
                        </ul>
                        <ul className='menu-ul'>
                            <label form='menu' className='font-bold'>MORE</label>
                            {menuBase.more.map((e) => {
                                return (
                                    <li className='menu-li' key={e}>
                                        <a href='##' className='font-bold-300'>{e}</a>
                                    </li>
                                )                           
                            })}                        
                        </ul>
                    </div>
                </div>
                <div className='copyright_container container-full flex justify-between align-items-end flex-wrap'>
                    <div className='text-start'>
                        <h6 className='font-bold-400'>Sooth all rights reserved</h6>
                        <div className='help_container flex'>
                            <a href='###'>Privacy Policy</a>
                            <a href='###'>Terms of Use</a>
                            <a href='###'>Contact Us</a>
                        </div>
                    </div>
                    <div className='social flex'>
                        <a href='###'><Facebook width={18} height={18}/></a>
                        <a href='###'><Instagram width={18} height={18}/></a>
                        <a href='###'><Twitter width={18} height={18}/></a>
                        <a href='###'><Youtube width={18} height={18}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;