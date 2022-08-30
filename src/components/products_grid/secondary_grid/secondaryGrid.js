import React from 'react';
import './secondaryGrid.style.scss';

// Import Components
import DropDown from '../../dropdown/dropdown';
import ProductCard from '../../productCard/productCard';

const SecondaryGrid = ({data, addInCart}) => {
    const categoryBase = {
        acne: [
            'ointment',
            'spot Treatment',
            'Lotion',
            'cream'
        ],
        sun: [
            'Rlief',
            'Cream',
            'Protection'
        ],
        ezcema: [
            'Cream',
            'Oil',
            'Lotion',
            'Balm'
        ],
        Psorias: [
            'Balm',
            'Ointment'
        ]
    }

    return ( 
        <div className='product__category container'>
            <div className='category_container'>
                <DropDown />
            </div>
            <div className='category_container flex justify-center align-items-start'>
                <div className='category_menu'>
                    <ul className='category_ul'>
                        <h6>Acne</h6>
                        {categoryBase.acne.map((e) => {
                            return (
                                <li className='category_li'>
                                    <a href='###'>{e}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className='category_ul'>
                        <h6>sun</h6>
                        {categoryBase.sun.map((e) => {
                            return (
                                <li className='category_li'>
                                    <a href='###'>{e}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className='category_ul'>
                        <h6>ezcema</h6>
                        {categoryBase.ezcema.map((e) => {
                            return (
                                <li className='category_li'>
                                    <a href='###'>{e}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className='category_ul'>
                        <h6>Psorias</h6>
                        {categoryBase.Psorias.map((e) => {
                            return (
                                <li className='category_li'>
                                    <a href='###'>{e}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='category_products'>
                    {data.map((e) => {
                        return (
                            <ProductCard 
                               base={e}
                               addInCart={addInCart}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default SecondaryGrid;