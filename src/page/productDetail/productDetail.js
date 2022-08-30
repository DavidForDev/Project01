import React, { useEffect } from 'react';
import './productDetail.style.scss';
import {useParams} from 'react-router-dom'

// Import data base
import { test } from '../../lib/test';

// Import Component
import ProductDetails from '../../components/productDetail/productDetail';
import PrimaryGrid from '../../components/products_grid/primary_grid/primaryGrid';

const ProductDetail = ({addInCart}) => {
    const { id } = useParams();

    const exactlyProduct = test.find(function(x) {
        return x._id === JSON.parse(id);
    })

    return ( 
        <div className='home__container'>
            <div className='home_display'>
                <ProductDetails data={exactlyProduct} addInCart={addInCart}/>
            </div>
            <div className='home_display'>
                <PrimaryGrid quantity={4} base={test}/>
            </div>
        </div>
    );
}
 
export default ProductDetail;