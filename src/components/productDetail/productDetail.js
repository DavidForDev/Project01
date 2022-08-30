import React, { useState } from 'react';
import './productDetail.style.scss';

// Import Components

import MoreInfo from '../moreInfo/moreInfo';

// Import Icons

import Plus from '../../assets/icons/plus';
import Minus from '../../assets/icons/minus';

import RightArrow from '../../assets/icons/rightArrow'
import LeftArrow from '../../assets/icons/leftArrow'

import Star from '../../assets/icons/star';

// Import Example image

import img1 from '../../assets/images/products/p11.png';

import img2 from '../../assets/images/products/p4.png'
import img3 from '../../assets/images/products/p5.png'
import img4 from '../../assets/images/products/p7.png'
import img5 from '../../assets/images/products/p6.png'



const ProductDetails = ({data, addInCart}) => {
    const [count, setCount] = useState(1);
    const [mainImage, setMainImage] = useState(data.mainImage);

    function increaseCount() {
        setCount(count + 1)
    }

    function decreaseCount() {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    function slider(event) {
        setMainImage(event.target.src);
    }

    return ( 
        <div className='product__detail-container container-full flex justify-between align-items-start flex-wrap'>
            <div className='product__slider'>
                <div className='slider-display flex container-full justify-center'>
                    <img src={mainImage} alt='img-slide' />
                </div>
                <div className='images_collage flex justify-center align-items-center'>
                    {data.images.map((s) => {
                        return (
                            <img src={s} alt='img-collage' onClick={(e) => slider(e)} />
                        )
                    })}
                </div>
            </div>
            <div className='product__detail'>
                <div className='product_detail-box'>
                    <h1 className='product_title'>{data.name}</h1>
                    <div className='stars flex align-items-end'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star color='silver'/>
                        <div className='review'>
                            <span>{data.review} Reviews</span>
                        </div>
                    </div>
                </div>
                <div className='product_detail-box'>
                    <div className='product_description'>
                        <h5>Lorem ipsum dolor sit amet, consetetur</h5>
                        <p className='medium'>{data.description}</p>
                    </div>
                    <MoreInfo />
                </div>
                <div className='product_detail-box'>
                    <h6>Quantity</h6>
                    <div className='controller flex align-items-center'>
                        <div className='flex align-items-center'>
                            <button className='count_btn' onClick={increaseCount}><Plus /></button>
                            <div className='count'>{count}</div>
                            <button className='count_btn' onClick={decreaseCount}><Minus /></button>
                        </div>
                        <button className='tertiary_btn' onClick={() => addInCart(data, count)}>Add to bag — ${data.cost}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductDetails;