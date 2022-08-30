import React, { useEffect, useState } from 'react';
import './mobileNav.style.scss';
import { Link, NavLink } from 'react-router-dom'

// Import Icons

import Search from '../../../assets/icons/search';
import Close from '../../../assets/icons/close';

const MobileNav = ({navBase}) => {
    const [mobileNav, setMobileNav] = useState({width: '0%', padding: '0px'});

    function navOpener() {
       setMobileNav({width: '100%', padding: '50px'});
    }

    function navCloser() {
        setMobileNav({width: '0%', padding: '0px'});
    }

    function cart() {
        const carts = document.querySelectorAll('a')

        carts.forEach((e) => {
            if(e.innerHTML === 'cart') {
                return e.parentElement.addEventListener('click', () => {
                    const productCart = document.querySelector('.black__opacity-bg')
                    productCart.style.display = 'inline-block'
                })
            }
        })
       
    }

    
    function SearchOpener() {
        const searchContainer = document.querySelector('.search__container');

        searchContainer.style.display = 'flex'
    }

    useEffect(() => {
        cart();
    }, [])

    return ( 
        <nav className='nav_mobile flex justify-between align-items-center'>
            <div className='flex align-items-center' style={{gap: '10px'}}>
                <div className='burger' onClick={navOpener}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='logo'>
                    <h4 className='font-bold-300' style={{color: '#354E57'}}>sooth</h4>
                </div>
            </div>
            <ul className='nav-ul flex' style={mobileNav}>
                <div className='flex justify-between container-full' onClick={navCloser}>
                    <Close width={17} height={17} />
                    <div className='flex align-items-center' style={{gap: '10px'}}>
                        <div className='flex align-items-center' onClick={SearchOpener}>
                            <Search color='#354E57' />
                        </div>
                        <a href='###' className='font-bold font-uppercas' style={{color: '#354E57'}}>cart</a>
                    </div>
                </div>
                {navBase.kind.map((e) => {
                    return(
                        <li className='ul-li' key={e}>
                            <NavLink to={`/productCategory/${e}`}>{e}</NavLink>
                        </li>
                    )
                })}
                <ul className='flex direction-column' style={{gap: '20px'}}>
                    {navBase.leftSide.map((e) => {
                        return(
                            <li className='ul-li' key={e}>
                                <a href='##' className='font-bold font-uppercas'>{e}</a>
                            </li>
                        )
                    })}
                </ul>
            </ul>
            <div className='flex align-items-center' style={{gap: '10px'}}>
                <div className='flex align-items-center' onClick={SearchOpener}>
                    <Search color='#354E57' />
                </div>
                <a href='###' className='font-bold font-uppercas' style={{color: '#354E57'}}>cart</a>
            </div>
        </nav>
    );
}
 
export default MobileNav;