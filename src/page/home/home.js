import React from 'react';
import './home.style.scss';

// Import Data base 
import {test} from '../../lib/test';

// Import Images
import Cactus from '../../assets/images/product_background/cactus.png'
import prod from '../../assets/images/products/p3.png';
import img from '../../assets/images/banners/banner1.jpg'
import img1 from '../../assets/images/banners/banner2.jpg'

// Import Components
import PrimaryBanner from '../../components/banners/primary_banner/primary_banner';
import SecondaryBanner from '../../components/banners/secondary_banner/secondary_banner'
import PrimaryGrid from '../../components/products_grid/primary_grid/primaryGrid';

const Home = ({addInCart}) => {
    return ( 
        <div className='home__container'>
            <div className='banner__section home_display'>
                <SecondaryBanner 
                    h2title='All Natural'
                    ptitle='A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best'
                    backImage={Cactus}
                    frontImage={prod}
                />
            </div>
            <div className='home_display'>
                <div className='container-title text-center'>
                    <h4>Solutions for all skin health</h4>
                    <p>Explore our innovative skincare products </p>
                </div>
            </div>
            <div className='home_display'>
                <PrimaryGrid quantity='4' base={test} addInCart={addInCart}/>
            </div>
            <div className='home_display'>
                <PrimaryBanner 
                    imageSrc={img}
                    h2title='Clean products that deliver better solutions'
                    h2color='white'
                    ptitle='A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best'
                    pcolor='white'
                    btnborder='1px solid white'
                    btncolor='white'
                    btntitle='Read More'
                    bannerBcColor='#547665'
                />
            </div>
            <div className='home_display'>
                <PrimaryGrid quantity='8' base={test} addInCart={addInCart}/>
            </div>
            <div className='home_display'>
                <PrimaryBanner 
                    imageSrc={img1}
                    h2title='All Natural Ingredients.'
                    h2color='white'
                    ptitle='A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best'
                    pcolor='#2E2E22'
                    btnborder='1px solid #956A53'
                    btncolor='#2E2E22'
                    btntitle='Read More'
                    bannerBcColor='#C6B9B6'
                    reverse='row-reverse'
                />
            </div>
            <div className='home_display'>
                <PrimaryGrid quantity='4' base={test} addInCart={addInCart}/>
            </div>
        </div>
    );
}
 
export default Home;