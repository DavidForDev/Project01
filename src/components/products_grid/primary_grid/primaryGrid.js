import React, { useEffect, useState } from 'react';
import './primaryGrid.style.scss';

// Import Components
import ProductCard from '../../productCard/productCard';

const PrimaryGrid = ({quantity, base, addInCart}) => {
    const [prodId, setProdId] = useState();

    useEffect(() => {
        base.forEach(element => {
            setProdId(element._id);
        });
    }, [])

    return ( 
        <div className='limited_product container'>
            <div className='limited_product-title flex justify-between align-items-center'>
                <p>Most Popular</p>
                <p>Shop all products</p>
            </div>
            <div className='product-boxes'>
                {base.map((e, index) => {
                    for (let i = index; i < quantity; i++) {
                        return (
                            <ProductCard 
                                key={e._id}
                                base={e}
                                addInCart={addInCart}
                            />
                        )   
                    }
                })}
            </div>
        </div>
    );
}
 
export default PrimaryGrid;