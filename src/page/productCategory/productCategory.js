import React from 'react';
import './productCategory.style.scss';
import { useParams } from 'react-router-dom';

// Import Components
import SecondaryGrid from '../../components/products_grid/secondary_grid/secondaryGrid';

// Import Data base
import { test } from '../../lib/test';

const ProductCategory = ({addInCart}) => {
    const { kind } = useParams();

    console.log(kind);

    const exactlyCategory = test.filter(function(x) {
        return x.kind === kind;
    })

    return ( 
        <div className='home__container'>
            <div className='home_display'>
                <SecondaryGrid data={exactlyCategory} addInCart={addInCart}/>
            </div>
        </div>
    );
}
 
export default ProductCategory;