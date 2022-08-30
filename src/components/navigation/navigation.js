import React, { useEffect } from 'react';
import './navigation.style.scss';
import { NavLink, Link } from 'react-router-dom'

// Import Icons
import Searchi from '../../assets/icons/search';

// Import Mobile_nav
import MobileNav from './mobile_nav/mobileNav';

// Import Components
import ProductCart from '../productCart/productCart';
import Search from '../search/search';

const navBase = {
    kind: [
        'acne',
        'sun',
        'ezcema',
        'psoriasis',
        'vitiligio'
    ],
    leftSide: [
        'aboutus',
        'blog'
    ],
    rightSide: [
        'cart',
        'login'
    ]
}

const Navigation = ({cartItem, removeFromCart, totalPrice}) => {
    function cart() {
        const carts = document.querySelectorAll('.ul-li > a')

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
        <React.Fragment>
            <MobileNav navBase={navBase}/>
            <ProductCart cartItem={cartItem} removeFromCart={removeFromCart} totalPrice={totalPrice} />
            <Search />
            <nav className='nav container-full flex justify-around'>
                <div className='flex align-items-start'>
                    <ul className='nav-ul flex'>
                        {navBase.leftSide.map((e) => {
                            return (
                                <li className='ul-li' key={e}>
                                    <Link to={`/${e}`} className='font-bold font-uppercase'>{e}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex align-items-center direction-column'>
                    <div className='logo'>
                        <a href='/'>
                            <h3 className='font-bold-300'>sooth</h3>
                        </a>
                    </div>
                    <ul className='nav-ul flex'>
                        {navBase.kind.map((e) => {
                            return (
                                <li className='ul-li' key={e}>
                                    <NavLink to={`/productCategory/${e}`}>{e}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex align-items-start'>
                    <ul className='nav-ul flex align-items-end'>
                        <div className='flex align-items-end' onClick={SearchOpener}>
                            <Searchi color='#354E57' />
                        </div>
                        {navBase.rightSide.map((e) => {
                            return (
                                <li className='ul-li' key={e}>
                                    <Link to={e === 'login' ? '/login' : `/${window.location.pathname}`} className='font-bold font-uppercase'>{e}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}
 
export default Navigation;